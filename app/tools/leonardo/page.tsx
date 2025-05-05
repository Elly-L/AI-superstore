import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, ImageIcon, Star, Sparkles } from "lucide-react"
import { Layout } from "@/components/layout"

export default function LeonardoAIPage() {
  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Leonardo AI</CardTitle>
                  <Badge className="bg-blue-500">Image</Badge>
                </div>
                <CardDescription>Advanced AI image generation for creative professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ey5XK465nHscADwnyNjm2f5J7ZStnY.png"
                    alt="Leonardo AI logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>4.7/5</span>
                  <span className="text-gray-300">|</span>
                  <span>3 credits per image</span>
                </div>
                <div className="text-sm">
                  <p>
                    Leonardo AI is a powerful image generation platform that specializes in high-quality, artistic
                    outputs. Perfect for designers, marketers, and creative professionals looking to generate unique
                    visuals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-2/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Generate Images</CardTitle>
                <CardDescription>Describe what you want to create with detailed prompts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe the image you want to generate... (e.g., 'A futuristic cityscape with neon lights, flying vehicles, and towering skyscrapers, cinematic lighting, detailed, 8k resolution')"
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
                        <SelectItem value="2048x2048">2048 x 2048 (HD Square - Premium)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Model</label>
                    <Select defaultValue="leonardo-creative">
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leonardo-creative">Leonardo Creative (3 credits)</SelectItem>
                        <SelectItem value="leonardo-signature">Leonardo Signature (4 credits)</SelectItem>
                        <SelectItem value="leonardo-expressive">Leonardo Expressive (3 credits)</SelectItem>
                        <SelectItem value="leonardo-realistic">Leonardo Realistic (3 credits)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Style Guidance</label>
                    <span className="text-xs text-gray-500">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>More Accurate</span>
                    <span>More Creative</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Number of Images</label>
                    <span className="text-xs text-gray-500">4 images (12 credits)</span>
                  </div>
                  <Slider defaultValue={[4]} max={8} min={1} step={1} />
                </div>
                <div className="bg-primary/5 p-3 rounded-lg flex items-center gap-2 text-sm">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>
                    <span className="font-medium">Pro Tip:</span> Add details like lighting, camera angle, and art style
                    for better results
                  </span>
                </div>
                <Button className="w-full">Generate Images (12 Credits)</Button>
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
