import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, ImageIcon, Star } from "lucide-react"
import { Layout } from "@/components/layout"

export default function DallEPage() {
  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>DALL·E 3</CardTitle>
                  <Badge>Image</Badge>
                </div>
                <CardDescription>OpenAI's advanced image generation model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8t96OnzYhj2TdWeT0OJbo4YE3EVmYt.png"
                    alt="DALL-E logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>4.8/5</span>
                  <span className="text-gray-300">|</span>
                  <span>2 credits per image</span>
                </div>
                <div className="text-sm">
                  <p>
                    DALL·E 3 is OpenAI's most advanced text-to-image generation model, capable of creating detailed and
                    accurate images from natural language descriptions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-2/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Generate Images</CardTitle>
                <CardDescription>Describe what you want to create</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe the image you want to generate... (e.g., 'A futuristic city with flying cars and neon lights')"
                  className="min-h-[100px]"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Image Size</label>
                    <Select defaultValue="1024x1024">
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1024x1024">1024 x 1024 (Square)</SelectItem>
                        <SelectItem value="1792x1024">1792 x 1024 (Landscape)</SelectItem>
                        <SelectItem value="1024x1792">1024 x 1792 (Portrait)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Quality</label>
                    <Select defaultValue="standard">
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (2 credits)</SelectItem>
                        <SelectItem value="hd">HD (3 credits)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Style Guidance</label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>More Accurate</span>
                    <span>More Creative</span>
                  </div>
                </div>
                <Button className="w-full">Generate Image (2 Credits)</Button>
              </CardContent>
              <CardFooter className="flex-col space-y-4 border-t pt-6">
                <div className="text-sm font-medium">Generated Images</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 hover:text-white"
                      >
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="aspect-square rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20 hover:text-white"
                      >
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
