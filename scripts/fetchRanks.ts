import fetch from "node-fetch" // Ensure you have node-fetch installed
import fs from "fs" // File system module to handle files
import path from "path" // Path module to handle paths
import * as https from "https" // HTTPS module for downloading images

// API URL
const API_URL = "https://assets.deadlock-api.com/v2/ranks"

// Folder to store data and images
const IMAGE_FOLDER = "./public/assets/ranks/"
const RANK_DATA_PATH = "./src/assets/ranks.json"

// Fetch ranks data from the API
async function fetchRanks() {
    try {
        console.log("Fetching ranks data...")
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`)
        }

        const ranks = (await response.json()) as any[]
        console.log("Data fetched successfully.")

        // Extract relevant data
        const simplifiedData = ranks.flatMap((rank: any) => {
            if (rank.disabled) {
                return []
            }
            return [
                {
                    tier: rank.tier,
                    name: rank.name,
                    imageUrl: `/assets/ranks/${getFileName(
                        rank.name,
                        rank.images.large
                    )}`,
                    _sourceImageUrl: rank.images.large,
                },
            ]
        })

        // Save data to JSON
        await saveDataAsJson(simplifiedData)

        // Download images
        await downloadRankImages(simplifiedData)
    } catch (error) {
        console.error("Error fetching or processing data:", error)
    }
}

// Save simplified data as JSON
async function saveDataAsJson(data: any) {
    try {
        const jsonPath = RANK_DATA_PATH
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2))
        console.log(`Ranks data saved to ${jsonPath}`)
    } catch (error) {
        console.error("Error saving JSON file:", error)
    }
}

// Download rank images
async function downloadRankImages(ranks: any[]) {
    for (const rank of ranks) {
        try {
            if (!rank._sourceImageUrl) {
                continue
            }
            const filePath = path.join(
                IMAGE_FOLDER,
                getFileName(rank.name, rank._sourceImageUrl) || ""
            )

            await downloadImage(rank._sourceImageUrl, filePath)
        } catch (error) {
            console.error("Error downloading images:", error)
        }
    }
    console.log("All images downloaded successfully.")
}

function getFileName(rankId: string, url: string) {
    if (!url) {
        return undefined
    }
    const fileExtension = path.extname(url)
    const fileName = `${rankId}${fileExtension}`.toLowerCase()
    return fileName
}

// Download image from a URL
function downloadImage(url: string, outputPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath)
        https
            .get(url, (response) => {
                if (response.statusCode === 200) {
                    response.pipe(file)
                    file.on("finish", () => {
                        file.close()
                        console.log(`Image saved to ${outputPath}`)
                        resolve()
                    })
                } else {
                    reject(
                        new Error(
                            `Failed to download image: ${response.statusCode} - ${response.statusMessage}`
                        )
                    )
                }
            })
            .on("error", (error) => {
                fs.unlinkSync(outputPath) // Remove the file if an error occurs
                reject(error)
            })
    })
}

// Run the script
fetchRanks()
