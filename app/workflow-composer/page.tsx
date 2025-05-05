import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Code, CreditCard, ImageIcon, Mic, Play, Plus, Save, Settings, Share, Trash } from "lucide-react"

export default function WorkflowComposer() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              AI Superstore
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <CreditCard className="h-4 w-4 mr-1" />
              <span>25 Credits</span>
            </div>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-1" /> Add Credits
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Workflow Composer</h1>
              <p className="text-gray-500">Create and chain AI tools together</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-1" /> Save
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-1" /> Share
              </Button>
              <Button size="sm">
                <Play className="h-4 w-4 mr-1" /> Run Workflow
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tool Library</CardTitle>
                  <CardDescription>Drag tools to the canvas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium text-sm text-gray-500">Image Generation</div>
                    <div className="p-3 bg-white border rounded-lg shadow-sm flex items-center cursor-grab hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <ImageIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">DALL·E 3</p>
                        <p className="text-xs text-gray-500">2 credits/image</p>
                      </div>
                    </div>
                    <div className="p-3 bg-white border rounded-lg shadow-sm flex items-center cursor-grab hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <ImageIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Leonardo AI</p>
                        <p className="text-xs text-gray-500">3 credits/image</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium text-sm text-gray-500">Voice & Audio</div>
                    <div className="p-3 bg-white border rounded-lg shadow-sm flex items-center cursor-grab hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <Mic className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">ElevenLabs</p>
                        <p className="text-xs text-gray-500">1 credit/minute</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium text-sm text-gray-500">Code Generation</div>
                    <div className="p-3 bg-white border rounded-lg shadow-sm flex items-center cursor-grab hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Code className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">GitHub Copilot</p>
                        <p className="text-xs text-gray-500">3 credits/hour</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Workflow Canvas</CardTitle>
                      <CardDescription>Connect tools to create a workflow</CardDescription>
                    </div>
                    <Input placeholder="Workflow Name" className="max-w-[200px]" defaultValue="Blog to Voiceover" />
                  </div>
                </CardHeader>
                <CardContent className="min-h-[500px] relative">
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
                    <div className="w-full max-w-2xl space-y-6">
                      {/* Step 1 */}
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <div className="font-bold text-blue-600 text-sm">1</div>
                            </div>
                            <div>
                              <p className="font-medium">Text to Summary</p>
                              <div className="flex items-center">
                                <Badge variant="outline" className="text-xs">
                                  ChatGPT
                                </Badge>
                                <span className="text-xs text-gray-500 ml-2">1 credit</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Settings className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs font-medium text-gray-500">Input</div>
                          <Textarea placeholder="Paste your blog post here" className="h-20 text-sm" />
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowRight className="h-6 w-6 text-gray-400" />
                      </div>

                      {/* Step 2 */}
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <div className="font-bold text-blue-600 text-sm">2</div>
                            </div>
                            <div>
                              <p className="font-medium">Summary to Voice</p>
                              <div className="flex items-center">
                                <Badge variant="outline" className="text-xs bg-purple-50">
                                  ElevenLabs
                                </Badge>
                                <span className="text-xs text-gray-500 ml-2">2 credits</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Settings className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs font-medium text-gray-500">Voice Settings</div>
                          <div className="flex items-center gap-2">
                            <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                              <option>Rachel (Female)</option>
                              <option>Thomas (Male)</option>
                              <option>Emily (Female)</option>
                            </select>
                            <Button variant="outline" size="sm" className="h-9">
                              <Play className="h-3 w-3 mr-1" /> Preview
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Add Step Button */}
                      <div className="flex justify-center">
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" /> Add Step
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-gray-50 flex justify-between">
                  <div className="text-sm text-gray-500">
                    Total estimated cost: <span className="font-medium">3 credits</span>
                  </div>
                  <Button>
                    <Play className="h-4 w-4 mr-1" /> Run Workflow
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <p className="text-sm text-gray-500">© 2025 AI Superstore. All rights reserved. A product of Eltek.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
