import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

interface ToolProps {
  tool: {
    id: string
    name: string
    description: string
    logo: string
    category: string
    rating: number
    users: string
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

  return (
    <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{tool.name}</CardTitle>
          <Badge className={getCategoryColor(tool.category)}>{getCategoryLabel(tool.category)}</Badge>
        </div>
        <p className="text-sm text-gray-500">{tool.description}</p>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={tool.logo || "/placeholder.svg"}
            alt={`${tool.name} logo`}
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span>{tool.rating}/5</span>
          <span className="text-gray-300">|</span>
          <span>{tool.users} users</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/tools/${tool.id}`} className="w-full">
          <Button className="w-full bg-primary hover:bg-primary-dark">Try Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
