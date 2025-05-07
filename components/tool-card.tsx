import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Info } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ToolProps {
  tool: {
    id: string
    name: string
    description: string
    logo: string
    category: string
    rating: number
    users: string
    price?: string
  }
}

export function ToolCard({ tool }: ToolProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "image":
        return "bg-blue-500"
      case "code":
        return "bg-green-500"
      case "audio":
        return "bg-purple-500"
      case "data":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "image":
        return "Image"
      case "code":
        return "Code"
      case "audio":
        return "Audio"
      case "data":
        return "Data"
      default:
        return category
    }
  }

  const getToolLogo = (id: string) => {
    switch (id) {
      case "dalle":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Nch9eJ1T8wivxMA3Y3LnM7HVdE82M.png"
      case "leonardo":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SdjBW9wCXlOSYKgLs0J2v0DE2VQrPR.png"
      case "github-copilot":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wr6OGHB1dMMsxVHJIEZeTp37AHpc8y.png"
      case "replit":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XMkjc232VhHPVcwMYrbrsFWJvkyPV2.png"
      case "chatgpt":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V89uZUTLCrvo9BhRXDNWkbRjU6lFr4.png"
      case "chatgpt-ada":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V89uZUTLCrvo9BhRXDNWkbRjU6lFr4.png"
      case "tableau":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BXBBExzW6Z4XCuQVSqNyB7M7zZReWW.png"
      case "whisper":
        return "/images/whisper-logo.png"
      case "elevenlabs":
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YUpYc8Yz44KjOGPWc9KHs1SyIB1yrY.png"
      default:
        return "/placeholder.svg"
    }
  }

  return (
    <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{tool.name}</CardTitle>
          <div className="flex items-center gap-2">
            {tool.price && (
              <Badge variant="outline" className="bg-green-50 text-green-700">
                {tool.price}
              </Badge>
            )}
            <Badge className={getCategoryColor(tool.category)}>{getCategoryLabel(tool.category)}</Badge>
          </div>
        </div>
        <p className="text-sm text-gray-500">{tool.description}</p>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={getToolLogo(tool.id) || "/placeholder.svg"}
            alt={`${tool.name} logo`}
            className="object-contain max-w-full max-h-full p-4"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span>{tool.rating}/5</span>
            <span className="text-gray-300">|</span>
            <span>{tool.users} users</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{tool.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link href={`/tools/${tool.id}`} className="flex-1">
          <Button className="w-full">Try Now</Button>
        </Link>
        <Link href={`/tools/${tool.id}/info`}>
          <Button variant="outline">Info</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
