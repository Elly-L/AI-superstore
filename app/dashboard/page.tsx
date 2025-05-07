"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, ImageIcon, Mic, Zap, ChevronRight, Star } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const { user } = useAuth()
  const firstName = user?.displayName?.split(" ")[0] || "there"

  // Mock data for the dashboard
  const activePass = {
    type: "1-Day Pass",
    remaining: "22 hours",
    percentage: 92,
  }

  const usageData = [
    {
      tool: "DALL·E",
      action: "Generated images",
      count: 2,
      icon: <ImageIcon className="h-4 w-4" />,
    },
    {
      tool: "Whisper",
      action: "Transcribed audio",
      count: 1,
      icon: <Mic className="h-4 w-4" />,
    },
    {
      tool: "ElevenLabs",
      action: "Used AI Voice",
      count: "2 mins",
      icon: <Mic className="h-4 w-4" />,
    },
  ]

  const recommendedTools = [
    {
      id: "dalle",
      name: "DALL·E 3",
      description: "Create realistic images from text descriptions",
      category: "image",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Nch9eJ1T8wivxMA3Y3LnM7HVdE82M.png",
    },
    {
      id: "github-copilot",
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster",
      category: "code",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wr6OGHB1dMMsxVHJIEZeTp37AHpc8y.png",
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      description: "Generate realistic and expressive text-to-speech",
      category: "audio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YUpYc8Yz44KjOGPWc9KHs1SyIB1yrY.png",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl">👋 Welcome back, {firstName}!</CardTitle>
                  <CardDescription>Here's what's happening with your AI tools today</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    <span>Active Pass</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">Active Pass</div>
                  <div className="text-lg font-semibold">{activePass.type}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{activePass.remaining} remaining</span>
                  </div>
                  <Progress value={activePass.percentage} className="h-2 mt-2" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">Tools Used Today</div>
                  <div className="text-lg font-semibold">3</div>
                  <div className="text-sm text-gray-600 mt-1">Credits Left: 7</div>
                  <div className="flex items-center gap-1 mt-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      DALL·E
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">
                      Whisper
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">
                      ElevenLabs
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usageData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium">
                        {item.action} ({item.count})
                      </div>
                      <div className="text-sm text-gray-500">Using {item.tool}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-gray-500">
                🔥 <span className="font-medium">Streak: 2 days</span> of creative AI use!
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>Tools you might like based on your usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedTools.map((tool) => (
                <div key={tool.id} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="object-contain h-8 w-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{tool.name}</div>
                    <div className="text-xs text-gray-500 truncate">{tool.description}</div>
                  </div>
                  <Link href={`/tools/${tool.id}`}>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Link href="/tools" className="w-full">
                <Button variant="outline" className="w-full">
                  View All Tools
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-3 text-sm">
                <div className="font-medium text-blue-700 mb-1">Combine Tools for Better Results</div>
                <p className="text-blue-600">
                  Try generating images with DALL·E and then adding voiceovers with ElevenLabs for engaging
                  presentations!
                </p>
              </div>
              <div className="rounded-lg bg-green-50 p-3 text-sm">
                <div className="font-medium text-green-700 mb-1">Save Credits with Day Passes</div>
                <p className="text-green-600">
                  For intensive projects, a 3-day pass offers better value than using individual credits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recently Used Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: "dalle",
              name: "DALL·E 3",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Nch9eJ1T8wivxMA3Y3LnM7HVdE82M.png",
              category: "image",
              rating: 4.8,
            },
            {
              id: "elevenlabs",
              name: "ElevenLabs",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YUpYc8Yz44KjOGPWc9KHs1SyIB1yrY.png",
              category: "audio",
              rating: 4.7,
            },
            {
              id: "whisper",
              name: "OpenAI Whisper",
              logo: "/images/whisper-logo.png",
              category: "audio",
              rating: 4.5,
            },
          ].map((tool) => (
            <Card key={tool.id} className="overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={tool.logo || "/placeholder.svg"}
                  alt={tool.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{tool.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                      {tool.rating}/5
                    </div>
                  </div>
                  <Link href={`/tools/${tool.id}`}>
                    <Button size="sm">Use</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
