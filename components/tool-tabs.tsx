"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToolCard } from "@/components/tool-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const tools = [
  {
    id: "dalle",
    name: "DALL·E",
    description: "Create realistic images and art from text descriptions",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Nch9eJ1T8wivxMA3Y3LnM7HVdE82M.png",
    category: "image",
    rating: 4.8,
    users: "2.5M+",
    price: "1-day pass",
  },
  {
    id: "leonardo",
    name: "Leonardo.AI",
    description: "Generate and fine-tune images with advanced AI models",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SdjBW9wCXlOSYKgLs0J2v0DE2VQrPR.png",
    category: "image",
    rating: 4.6,
    users: "850K+",
    price: "3-day pass",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wr6OGHB1dMMsxVHJIEZeTp37AHpc8y.png",
    category: "code",
    rating: 4.9,
    users: "1.8M+",
    price: "5 credits",
  },
  {
    id: "replit",
    name: "Replit",
    description: "AI-powered coding platform with real-time collaboration",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XMkjc232VhHPVcwMYrbrsFWJvkyPV2.png",
    category: "code",
    rating: 4.7,
    users: "1.5M+",
    price: "3 credits",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "Generate realistic and expressive text-to-speech",
    logo: "/placeholder.svg",
    category: "audio",
    rating: 4.8,
    users: "1.1M+",
    price: "2 credits",
  },
  {
    id: "whisper",
    name: "OpenAI Whisper",
    description: "Advanced speech recognition system",
    logo: "/images/whisper-logo.png",
    category: "audio",
    rating: 4.5,
    users: "850K+",
    price: "1 credit",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Conversational AI assistant for text generation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V89uZUTLCrvo9BhRXDNWkbRjU6lFr4.png",
    category: "text",
    rating: 4.9,
    users: "5.2M+",
    price: "1 credit",
  },
  {
    id: "chatgpt-ada",
    name: "ChatGPT with ADA",
    description: "Accessible AI assistant for everyone",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V89uZUTLCrvo9BhRXDNWkbRjU6lFr4.png",
    category: "text",
    rating: 4.8,
    users: "1.2M+",
    price: "2 credits",
  },
  {
    id: "tableau",
    name: "Tableau",
    description: "Interactive data visualization software",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BXBBExzW6Z4XCuQVSqNyB7M7zZReWW.png",
    category: "data",
    rating: 4.7,
    users: "1.8M+",
    price: "5 credits",
  },
]

export function ToolTabs() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const imageTools = filteredTools.filter((tool) => tool.category === "image")
  const codeTools = filteredTools.filter((tool) => tool.category === "code")
  const audioTools = filteredTools.filter((tool) => tool.category === "audio")
  const textTools = filteredTools.filter((tool) => tool.category === "text")
  const dataTools = filteredTools.filter((tool) => tool.category === "data")

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search for tools..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="all">All Tools</TabsTrigger>
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
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
        <TabsContent value="text">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textTools.map((tool) => (
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
    </div>
  )
}
