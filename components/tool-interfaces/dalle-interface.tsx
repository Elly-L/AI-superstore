"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ImageIcon, Loader2, RefreshCw, Sparkles } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function DalleInterface() {
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [size, setSize] = useState("1024x1024")
  const [quality, setQuality] = useState("standard")
  const [style, setStyle] = useState("vivid")
  const [numImages, setNumImages] = useState(1)
  const { toast } = useToast()

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "You need to provide a description of the image you want to generate.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Generate placeholder images
      const newImages = Array(numImages)
        .fill(0)
        .map(() => `/placeholder.svg?height=512&width=512&text=DALL-E+Image`)

      setImages(newImages)
      setLoading(false)

      toast({
        title: "Images generated!",
        description: `Successfully generated ${numImages} image${numImages > 1 ? "s" : ""}.`,
      })
    }, 3000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Image Description</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the image you want to generate..."
                  className="min-h-[120px]"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Image Size</Label>
                <RadioGroup value={size} onValueChange={setSize} className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                    <RadioGroupItem value="1024x1024" id="square" />
                    <Label htmlFor="square" className="cursor-pointer">
                      Square (1024×1024)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                    <RadioGroupItem value="1792x1024" id="landscape" />
                    <Label htmlFor="landscape" className="cursor-pointer">
                      Landscape (1792×1024)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                    <RadioGroupItem value="1024x1792" id="portrait" />
                    <Label htmlFor="portrait" className="cursor-pointer">
                      Portrait (1024×1792)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Quality</Label>
                <RadioGroup value={quality} onValueChange={setQuality} className="flex gap-2">
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="cursor-pointer">
                      Standard
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                    <RadioGroupItem value="hd" id="hd" />
                    <Label htmlFor="hd" className="cursor-pointer">
                      HD
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Style</Label>
                <RadioGroup value={style} onValueChange={setStyle} className="flex gap-2">
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                    <RadioGroupItem value="vivid" id="vivid" />
                    <Label htmlFor="vivid" className="cursor-pointer">
                      Vivid
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                    <RadioGroupItem value="natural" id="natural" />
                    <Label htmlFor="natural" className="cursor-pointer">
                      Natural
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Number of Images</Label>
                  <span className="text-sm text-gray-500">{numImages}</span>
                </div>
                <Slider
                  value={[numImages]}
                  min={1}
                  max={4}
                  step={1}
                  onValueChange={(value) => setNumImages(value[0])}
                />
              </div>

              <Button className="w-full" onClick={handleGenerate} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Images
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h3 className="font-medium">Example Prompts</h3>
              <div className="space-y-2">
                <div
                  className="cursor-pointer rounded-md border p-3 hover:bg-gray-50"
                  onClick={() =>
                    setPrompt("A photorealistic image of a futuristic city with flying cars and neon lights")
                  }
                >
                  A photorealistic image of a futuristic city with flying cars and neon lights
                </div>
                <div
                  className="cursor-pointer rounded-md border p-3 hover:bg-gray-50"
                  onClick={() => setPrompt("A watercolor painting of a serene mountain landscape at sunset")}
                >
                  A watercolor painting of a serene mountain landscape at sunset
                </div>
                <div
                  className="cursor-pointer rounded-md border p-3 hover:bg-gray-50"
                  onClick={() =>
                    setPrompt(
                      "A detailed digital illustration of a magical forest with glowing plants and mythical creatures",
                    )
                  }
                >
                  A detailed digital illustration of a magical forest with glowing plants and mythical creatures
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Tabs defaultValue="generated">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generated">Generated Images</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="generated" className="pt-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gray-50">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-gray-500">Generating your images...</p>
                <p className="text-sm text-gray-400 mt-2">This may take a few seconds</p>
              </div>
            ) : images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((src, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Generated image ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-lg border"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 hover:text-white"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gray-50">
                <ImageIcon className="h-8 w-8 text-gray-400 mb-4" />
                <p className="text-gray-500">No images generated yet</p>
                <p className="text-sm text-gray-400 mt-2">Enter a prompt and click Generate</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="history" className="pt-4">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">A cyberpunk cityscape at night</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Image+1"
                    alt="History image"
                    className="w-full aspect-square object-cover rounded-md"
                  />
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Image+2"
                    alt="History image"
                    className="w-full aspect-square object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">A watercolor painting of mountains</p>
                    <p className="text-sm text-gray-500">Yesterday</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Image+1"
                    alt="History image"
                    className="w-full aspect-square object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
