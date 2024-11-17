import fetch from "node-fetch" // Ensure you have node-fetch installed
import fs from "fs" // File system module to handle files
import path from "path" // Path module to handle paths
import * as https from "https" // HTTPS module for downloading images

// API URL
const API_URL = "https://assets.deadlock-api.com/v2/heroes"

// Folder to store data and images
const IMAGE_FOLDER = "./public/assets/heroes/"
const HERO_DATA_PATH = "./src/assets/heroes.json"

// Fetch heroes data from the API
async function fetchHeroes() {
    try {
        console.log("Fetching heroes data...")
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`)
        }

        const heroes = (await response.json()) as any[]
        console.log("Data fetched successfully.")

        // Extract relevant data
        const simplifiedData = heroes.flatMap((hero: any) => {
            if (hero.disabled) {
                return []
            }
            return [
                {
                    id: hero.class_name,
                    name: hero.name,
                    imageUrl: `/assets/heroes/${getFileName(
                        hero.class_name,
                        hero.images.icon_hero_card
                    )}`,
                    _sourceImageUrl: hero.images.icon_hero_card,
                    experimental: hero.in_development,
                },
            ]
        })

        // Save data to JSON
        await saveDataAsJson(simplifiedData)

        // Download images
        await downloadHeroImages(simplifiedData)
    } catch (error) {
        console.error("Error fetching or processing data:", error)
    }
}

// Save simplified data as JSON
async function saveDataAsJson(data: any) {
    try {
        const jsonPath = HERO_DATA_PATH
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2))
        console.log(`Heroes data saved to ${jsonPath}`)
    } catch (error) {
        console.error("Error saving JSON file:", error)
    }
}

// Download hero images
async function downloadHeroImages(heroes: any[]) {
    for (const hero of heroes) {
        try {
            if (!hero._sourceImageUrl) {
                continue
            }
            const filePath = path.join(
                IMAGE_FOLDER,
                getFileName(hero.id, hero._sourceImageUrl) || ""
            )

            await downloadImage(hero._sourceImageUrl, filePath)
        } catch (error) {
            console.error("Error downloading images:", error)
        }
    }
    console.log("All images downloaded successfully.")
}

function getFileName(heroId: string, url: string) {
    if (!url) {
        return undefined
    }
    const fileExtension = path.extname(url)
    const fileName = `${heroId}${fileExtension}`
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
fetchHeroes()
