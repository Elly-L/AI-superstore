"use client"

import { useState, useEffect } from "react"
import { ToolCard } from "@/components/tool-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams, useRouter } from "next/navigation"

export function ToolTabs() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setActiveTab(category)
    } else {
      setActiveTab("all")
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (value === "all") {
      router.push("/tools")
    } else {
      router.push(`/tools?category=${value}`)
    }
  }

  const imageTools = [
    {
      id: "dalle",
      name: "DALL·E",
      description: "Create realistic images and art from text descriptions",
      logo: "/placeholder.svg?key=ebldl",
      category: "image",
      rating: 4.8,
      users: "2.3M+",
    },
    {
      id: "leonardo",
      name: "Leonardo.AI",
      description: "Generate and fine-tune images with advanced AI models",
      logo: "/placeholder.svg?key=p1t8i",
      category: "image",
      rating: 4.6,
      users: "950K+",
    },
  ]

  const codeTools = [
    {
      id: "github-copilot",
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster",
      logo: "/placeholder.svg?key=wykw3",
      category: "code",
      rating: 4.9,
      users: "1.8M+",
    },
    {
      id: "replit",
      name: "Replit",
      description: "AI-powered coding platform with real-time collaboration",
      logo: "/placeholder.svg?key=tpn33",
      category: "code",
      rating: 4.7,
      users: "1.5M+",
    },
  ]

  const audioTools = [
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      description: "Generate realistic and expressive text-to-speech",
      logo: "/placeholder.svg?key=khrk1",
      category: "audio",
      rating: 4.8,
      users: "1.1M+",
    },
    {
      id: "whisper",
      name: "OpenAI Whisper",
      description: "Advanced speech recognition system",
      logo: "/placeholder.svg?height=200&width=320&query=OpenAI%20Whisper%20speech%20recognition",
      category: "audio",
      rating: 4.5,
      users: "850K+",
    },
  ]

  const dataTools = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      description: "Conversational AI assistant for text generation",
      logo: "/placeholder.svg?height=200&width=320&query=ChatGPT%20AI%20assistant",
      category: "data",
      rating: 4.9,
      users: "5.2M+",
    },
    {
      id: "chatgpt-ada",
      name: "ChatGPT with ADA",
      description: "Accessible AI assistant for everyone",
      logo: "/placeholder.svg?height=200&width=320&query=ChatGPT%20accessibility",
      category: "data",
      rating: 4.8,
      users: "1.2M+",
    },
    {
      id: "tableau",
      name: "Tableau",
      description: "Interactive data visualization software",
      logo: "/placeholder.svg?height=200&width=320&query=Tableau%20data%20visualization",
      category: "data",
      rating: 4.7,
      users: "1.9M+",
    },
  ]

  const allTools = [...imageTools, ...codeTools, ...audioTools, ...dataTools]

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
      <TabsList className="mb-4">
        <TabsTrigger value="all">All Tools</TabsTrigger>
        <TabsTrigger value="image">Images</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="audio">Audio</TabsTrigger>
        <TabsTrigger value="data">Data</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="image">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="code">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codeTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="audio">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audioTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="data">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
