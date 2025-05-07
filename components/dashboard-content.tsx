"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Layout } from "@/components/layout"
import { BarChart3, Code, ImageIcon, Mic, Play, Star, Clock, Zap } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function DashboardContent() {
  const { user } = useAuth()
  const firstName = user?.displayName?.split(" ")[0] || "User"

  return (
    <Layout>
      <div className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">👋 Welcome back, {firstName}!</h1>
          <p className="text-gray-500">Here's what's happening with your AI tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Active Pass
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-green-800">3-Day Pass</p>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-500">Time Remaining</span>
                      <span className="font-medium">36 hours</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/checkout" className="w-full">
                <Button variant="outline" className="w-full">
                  Extend Pass
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                Credits Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-sm text-gray-500">Free credits remaining</p>
                </div>
                <Link href="/pricing">
                  <Button size="sm">Top Up</Button>
                </Link>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>5/10 credits used</span>
                  <span>50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-yellow-400" />
                Your Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <ImageIcon className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Generated 3 images</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Mic className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">2 minutes of voice synthesis</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Code className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Used code assistance</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="my-tools" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="my-tools">My Tools</TabsTrigger>
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="my-tools">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">DALL·E 3</CardTitle>
                    <Badge>Image</Badge>
                  </div>
                  <CardDescription>Create realistic images from text descriptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Nch9eJ1T8wivxMA3Y3LnM7HVdE82M.png"
                      alt="DALL·E logo"
                      className="object-contain max-w-full max-h-full p-4"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span>4.8/5</span>
                    <span className="text-gray-300">|</span>
                    <span>Last used: 2h ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/tools/dalle" className="w-full">
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Use Tool
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">ElevenLabs</CardTitle>
                    <Badge>Audio</Badge>
                  </div>
                  <CardDescription>Generate realistic and expressive text-to-speech</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="ElevenLabs logo"
                      className="object-contain max-w-full max-h-full p-4"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span>4.7/5</span>
                    <span className="text-gray-300">|</span>
                    <span>Last used: 1d ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/tools/elevenlabs" className="w-full">
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Use Tool
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">GitHub Copilot</CardTitle>
                    <Badge>Code</Badge>
                  </div>
                  <CardDescription>AI pair programmer that helps you write code faster</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wr6OGHB1dMMsxVHJIEZeTp37AHpc8y.png"
                      alt="GitHub Copilot logo"
                      className="object-contain max-w-full max-h-full p-4"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span>4.9/5</span>
                    <span className="text-gray-300">|</span>
                    <span>Last used: 3d ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/tools/github-copilot" className="w-full">
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Use Tool
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-4 text-center">
              <Link href="/tools">
                <Button variant="outline">View All Tools</Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="workflows">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blog to Voiceover</CardTitle>
                  <CardDescription>Convert blog text to natural voice narration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span>4.8</span>
                    </div>
                    <span>•</span>
                    <span>Used 28 times</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs font-bold">
                        1
                      </div>
                      <span className="text-sm">Text to Summary (ChatGPT)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs font-bold">
                        2
                      </div>
                      <span className="text-sm">Summary to Voice (ElevenLabs)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/workflow-composer?workflow=blog-to-voiceover">
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-1" /> Run
                    </Button>
                  </Link>
                  <div className="flex space-x-2">
                    <Link href="/workflow-composer?workflow=blog-to-voiceover&edit=true">
                      <Button variant="ghost" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Image + Caption Generator</CardTitle>
                  <CardDescription>Create images with matching social captions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span>4.6</span>
                    </div>
                    <span>•</span>
                    <span>Used 15 times</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs font-bold">
                        1
                      </div>
                      <span className="text-sm">Generate Image (DALL·E)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs font-bold">
                        2
                      </div>
                      <span className="text-sm">Create Caption (ChatGPT)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/workflow-composer?workflow=image-caption">
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-1" /> Run
                    </Button>
                  </Link>
                  <div className="flex space-x-2">
                    <Link href="/workflow-composer?workflow=image-caption&edit=true">
                      <Button variant="ghost" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
              <Link href="/workflows/create" className="block">
                <Card className="h-full border-dashed border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center h-full py-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-1">Create New Workflow</h3>
                    <p className="text-sm text-gray-500 text-center">
                      Combine multiple AI tools for powerful automations
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="recommendations">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended for You</CardTitle>
                  <CardDescription>Based on your recent activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <ImageIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Try Leonardo AI</p>
                        <p className="text-sm text-gray-500">Generate fine-tuned images with advanced AI models</p>
                      </div>
                      <Link href="/tools/leonardo">
                        <Button size="sm" variant="outline">
                          Try
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Explore Tableau</p>
                        <p className="text-sm text-gray-500">Interactive data visualization software</p>
                      </div>
                      <Link href="/tools/tableau">
                        <Button size="sm" variant="outline">
                          Try
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Try This Workflow</CardTitle>
                  <CardDescription>Boost your productivity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-medium text-lg mb-2">Content Creation Combo</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Generate blog content, create matching images, and convert to audio - all in one workflow!
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-2 text-xs font-bold">
                          1
                        </div>
                        <span className="text-sm">Generate blog post (ChatGPT)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-2 text-xs font-bold">
                          2
                        </div>
                        <span className="text-sm">Create featured image (DALL·E)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-2 text-xs font-bold">
                          3
                        </div>
                        <span className="text-sm">Convert to podcast (ElevenLabs)</span>
                      </div>
                    </div>
                    <Button className="w-full">Try This Workflow</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
