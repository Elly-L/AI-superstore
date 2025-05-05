import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Play, RefreshCw, Star } from "lucide-react"
import { Layout } from "@/components/layout"

export default function GitHubCopilotPage() {
  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>GitHub Copilot</CardTitle>
                  <Badge className="bg-green-500">Code</Badge>
                </div>
                <CardDescription>AI pair programmer that helps you write code faster</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KWe56PZbfRfIN63rftVtQ58i9Z2DpI.png"
                    alt="GitHub Copilot logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>4.9/5</span>
                  <span className="text-gray-300">|</span>
                  <span>3 credits per hour</span>
                </div>
                <div className="text-sm">
                  <p>
                    GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It
                    draws context from comments and code to suggest individual lines and whole functions instantly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-2/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Code Assistant</CardTitle>
                <CardDescription>Get AI-powered code suggestions and completions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="editor" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="editor">Code Editor</TabsTrigger>
                    <TabsTrigger value="comment">Comment to Code</TabsTrigger>
                    <TabsTrigger value="explain">Explain Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="editor" className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Language</label>
                        <Select defaultValue="javascript">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="typescript">TypeScript</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="csharp">C#</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="relative">
                        <div className="absolute top-0 right-0 p-2">
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="rounded-md border bg-black text-white font-mono text-sm p-4 overflow-auto min-h-[300px]">
                          <div className="text-green-400">
                            // Start typing your code here and Copilot will suggest completions
                          </div>
                          <div className="text-white">function calculateTotal(items) &#123;</div>
                          <div className="text-white"> let total = 0;</div>
                          <div className="text-white"> for (const item of items) &#123;</div>
                          <div className="text-white"> total += item.price * item.quantity;</div>
                          <div className="text-white"> &#125;</div>
                          <div className="text-white"></div>
                          <div className="text-gray-500"> // Apply discount if applicable</div>
                          <div className="text-gray-500"> if (items.length > 5) &#123;</div>
                          <div className="text-gray-500"> total *= 0.9; // 10% discount</div>
                          <div className="text-gray-500"> &#125;</div>
                          <div className="text-gray-500"> </div>
                          <div className="text-gray-500"> return total;</div>
                          <div className="text-gray-500">&#125;</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline">
                        <RefreshCw className="h-4 w-4 mr-1" /> Regenerate
                      </Button>
                      <Button>
                        <Play className="h-4 w-4 mr-1" /> Run Code
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="comment" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Describe what you want to create</label>
                      <textarea
                        className="w-full min-h-[100px] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="E.g., Create a React component that fetches data from an API and displays it in a table with sorting and pagination."
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Language</label>
                        <Select defaultValue="typescript">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="typescript">TypeScript</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="csharp">C#</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full">Generate Code</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="explain" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Paste code to explain</label>
                      <textarea
                        className="w-full min-h-[150px] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                        placeholder="Paste the code you want to understand here..."
                      ></textarea>
                    </div>
                    <Button className="w-full">Explain Code</Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex-col space-y-4 border-t pt-6">
                <div className="text-sm font-medium">Recent Code Snippets</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border hover:bg-gray-100 cursor-pointer">
                    <div>
                      <div className="font-medium">React Data Table Component</div>
                      <div className="text-xs text-gray-500">TypeScript • 2 hours ago</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border hover:bg-gray-100 cursor-pointer">
                    <div>
                      <div className="font-medium">API Authentication Middleware</div>
                      <div className="text-xs text-gray-500">JavaScript • Yesterday</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
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
