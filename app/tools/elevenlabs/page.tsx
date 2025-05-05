import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Play, Pause, Star, Volume2 } from "lucide-react"
import { Layout } from "@/components/layout"

export default function ElevenLabsPage() {
  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>ElevenLabs</CardTitle>
                  <Badge className="bg-purple-500">Voice</Badge>
                </div>
                <CardDescription>Premium text-to-speech with natural voices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NQNFFtxd24VGWxVUl265qnkB0yEIly.png"
                    alt="ElevenLabs logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>4.7/5</span>
                  <span className="text-gray-300">|</span>
                  <span>1 credit per minute</span>
                </div>
                <div className="text-sm">
                  <p>
                    ElevenLabs offers state-of-the-art text-to-speech technology with the most natural-sounding AI
                    voices. Perfect for content creation, accessibility, and more.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-2/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Generate Speech</CardTitle>
                <CardDescription>Enter text to convert to natural-sounding speech</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter the text you want to convert to speech... (e.g., 'Welcome to AI Superstore, your one-stop shop for all AI tools.')"
                  className="min-h-[150px]"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Voice</label>
                    <Select defaultValue="rachel">
                      <SelectTrigger>
                        <SelectValue placeholder="Select voice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rachel">Rachel (Female)</SelectItem>
                        <SelectItem value="thomas">Thomas (Male)</SelectItem>
                        <SelectItem value="emily">Emily (Female)</SelectItem>
                        <SelectItem value="james">James (Male)</SelectItem>
                        <SelectItem value="sophia">Sophia (Female)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Language</label>
                    <Select defaultValue="en-US">
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="en-GB">English (UK)</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Voice Settings</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Stability</span>
                        <span>75%</span>
                      </div>
                      <Slider defaultValue={[75]} max={100} step={1} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Clarity</span>
                        <span>80%</span>
                      </div>
                      <Slider defaultValue={[80]} max={100} step={1} />
                    </div>
                  </div>
                </div>
                <Button className="w-full">Generate Speech (1 Credit per minute)</Button>
              </CardContent>
              <CardFooter className="flex-col space-y-4 border-t pt-6">
                <div className="text-sm font-medium">Generated Audio</div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Welcome message.mp3</div>
                      <div className="text-xs text-gray-500">0:32</div>
                    </div>
                    <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div className="absolute inset-y-0 left-0 bg-purple-500 w-1/3 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-3 w-3 bg-white rounded-full shadow"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Volume2 className="h-4 w-4 text-gray-500" />
                        <Slider defaultValue={[80]} max={100} step={1} className="w-24" />
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Product description.mp3</div>
                      <div className="text-xs text-gray-500">1:15</div>
                    </div>
                    <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div className="absolute inset-y-0 left-0 bg-purple-500 w-2/3 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-3 w-3 bg-white rounded-full shadow"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                          <Pause className="h-4 w-4" />
                        </Button>
                        <Volume2 className="h-4 w-4 text-gray-500" />
                        <Slider defaultValue={[80]} max={100} step={1} className="w-24" />
                      </div>
                      <Button variant="outline" size="sm">
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
