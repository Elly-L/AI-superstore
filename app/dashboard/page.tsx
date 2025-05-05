import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Layout } from "@/components/layout"
import { ToolRecommendations } from "@/components/tool-recommendations"
import { BarChart3, Code, CreditCard, History, ImageIcon, Mic, Play, Settings, Star, Trash } from "lucide-react"

export default function Dashboard() {
  return (
    <Layout>
      <div className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-primary">Dashboard</h1>
          <p className="text-gray-500">Manage your tools, workflows, and credits</p>
        </div>
        <Tabs defaultValue="my-tools" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="my-tools">My Tools</TabsTrigger>
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
          </TabsList>
          <TabsContent value="my-tools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Recently Used</CardTitle>
                    <Badge>
                      <History className="h-3 w-3 mr-1" />
                      History
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <ImageIcon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">DALL·E 3</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <Link href="/tools/dalle">
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <Mic className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">ElevenLabs</p>
                          <p className="text-xs text-gray-500">Yesterday</p>
                        </div>
                      </div>
                      <Link href="/tools/elevenlabs">
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <Code className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">GitHub Copilot</p>
                          <p className="text-xs text-gray-500">3 days ago</p>
                        </div>
                      </div>
                      <Link href="/tools/github-copilot">
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Favorite Tools</CardTitle>
                    <Badge variant="outline">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      Saved
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <ImageIcon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Leonardo AI</p>
                          <p className="text-xs text-gray-500">Image Generation</p>
                        </div>
                      </div>
                      <Link href="/tools/leonardo">
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                          <BarChart3 className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium">ChatGPT with ADA</p>
                          <p className="text-xs text-gray-500">Data Analysis</p>
                        </div>
                      </div>
                      <Link href="/tools/chatgpt-ada">
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <Code className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Replit AI</p>
                          <p className="text-xs text-gray-500">Code Generation</p>
                        </div>
                      </div>
                      <Link href="/tools/replit">
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Current Pass Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-green-800">3-Day Pass Active</p>
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
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-500">Image Generation</span>
                            <span className="font-medium">12/50 used</span>
                          </div>
                          <Progress value={24} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-500">Voice Synthesis</span>
                            <span className="font-medium">3/30 mins used</span>
                          </div>
                          <Progress value={10} className="h-2" />
                        </div>
                      </div>
                    </div>
                    <Link href="/checkout">
                      <Button className="w-full">Extend Pass</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <ToolRecommendations />
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
                        <Settings className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Trash className="h-4 w-4" />
                    </Button>
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
                    <Link href="/workflow-composer?workflow=image-caption&amp;edit=true">
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="billing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>You are currently on the Free plan.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Plan Name</span>
                      <span>Free</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Monthly Credits</span>
                      <span>100</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Team Members</span>
                      <span>1</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/pricing">
                    <Button className="w-full">Upgrade Plan</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Update your billing information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Card Number</span>
                      <span>**** **** **** 1234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Expiry Date</span>
                      <span>12/24</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/billing">
                    <Button className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Update Payment Method
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="explore">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Explore Tools</CardTitle>
                  <CardDescription>Discover new tools and integrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Coming soon...</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

// Let's create a search component for the tools page:
