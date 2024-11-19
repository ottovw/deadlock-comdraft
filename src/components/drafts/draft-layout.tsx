import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Placeholder data
const teams = [
  { name: "Team A", slots: Array(6).fill(null) },
  { name: "Team B", slots: Array(6).fill(null) }
]

const availablePlayers = Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Player ${i + 1}`,
  position: ["Forward", "Midfielder", "Defender", "Goalkeeper"][Math.floor(Math.random() * 4)],
  avatar: `/placeholder.svg?height=40&width=40`
}))

export function DraftLayout() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Game Draft</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Team Column */}
        <div>
          <h2 className="text-xl font-semibold mb-2">{teams[0].name}</h2>
          <div className="space-y-2">
            {teams[0].slots.map((_, index) => (
              <Card key={index} className="bg-neutral-100 ">
                <CardContent className="p-2 h-12 flex items-center justify-center">
                  <span className="text-neutral-500">Empty Slot</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Middle Column - Available Players */}
        <ScrollArea className="h-[calc(100vh-10rem)] border border-neutral-200 rounded-md dark:border-neutral-800">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 sticky top-0 bg-white pt-2 dark:bg-neutral-950">Available Players</h2>
            <div className="space-y-2">
              {availablePlayers.map((player) => (
                <Card key={player.id}>
                  <CardContent className="p-2 flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={player.avatar} alt={player.name} />
                      <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{player.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* Right Team Column */}
        <div>
          <h2 className="text-xl font-semibold mb-2">{teams[1].name}</h2>
          <div className="space-y-2">
            {teams[1].slots.map((_, index) => (
              <Card key={index} className="bg-neutral-100 dark:bg-neutral-800">
                <CardContent className="p-2 h-12 flex items-center justify-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Empty Slot</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}