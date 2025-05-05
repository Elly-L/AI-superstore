import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, Clock, Users, Send } from "lucide-react"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"

export default function ChatGPTADAPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/tools" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">ChatGPT with ADA</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 relative rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src="/images/chatgpt-logo.png"
                      alt="ChatGPT Logo"
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <CardTitle>ChatGPT with ADA</CardTitle>
                    <CardDescription>Accessible AI assistant for everyone</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="font-medium">4.8</span>
                    <span className="text-gray-500 ml-1">(2.3k reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-1" />
                    <span>1.2M+ users</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-500 mr-1" />
                    <span>Updated 3 days ago</span>
                  </div>
                </div>

                <Tabs defaultValue="chat">
                  <TabsList className="mb-4">
                    <TabsTrigger value="chat">Chat</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>

                  <TabsContent value="chat">
                    <div className="space-y-6">
                      <div className="bg-gray-50 border rounded-lg p-4 min-h-[400px] mb-4 overflow-y-auto">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-start">
                            <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                              <p className="text-sm">
                                Hello! I'm ChatGPT with ADA, designed to be accessible for everyone. How can I help you
                                today?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-end gap-2">
                        <Textarea
                          placeholder="Type your message here..."
                          className="min-h-[80px]"
                          aria-label="Your message"
                        />
                        <Button className="bg-primary h-10 px-4 flex-shrink-0">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between text-sm text-gray-500">
                        <div>ADA Compliance: Enabled</div>
                        <div>Screen Reader Optimized</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features">
                    <div className="space-y-4">
                      <p>
                        ChatGPT with ADA is a specialized version of OpenAI's ChatGPT designed to be fully accessible
                        and compliant with the Americans with Disabilities Act (ADA). It provides an inclusive AI
                        experience for all users, including those with disabilities.
                      </p>

                      <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Screen reader compatibility with optimized responses</li>
                        <li>High contrast mode and customizable text sizes</li>
                        <li>Keyboard navigation support</li>
                        <li>Simple and clear language options</li>
                        <li>Audio input and output capabilities</li>
                        <li>Reduced motion settings</li>
                      </ul>

                      <h3 className="text-xl font-semibold mt-6 mb-3">Use Cases</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Accessible customer support for websites</li>
                        <li>Educational assistance for students with disabilities</li>
                        <li>Workplace accommodations</li>
                        <li>Accessible content creation</li>
                        <li>Personal assistant for users with disabilities</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="pricing">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Basic</CardTitle>
                            <CardDescription>Essential accessibility</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold mb-2">3 credits</div>
                            <div className="text-sm text-gray-500 mb-4">per 1000 tokens</div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Screen reader support
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> High contrast mode
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Basic keyboard navigation
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-primary">
                          <CardHeader>
                            <CardTitle>Standard</CardTitle>
                            <CardDescription>Enhanced accessibility</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold mb-2">5 credits</div>
                            <div className="text-sm text-gray-500 mb-4">per 1000 tokens</div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> All Basic features
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Audio input/output
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Simplified language options
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Custom text sizing
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Premium</CardTitle>
                            <CardDescription>Complete accessibility</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold mb-2">8 credits</div>
                            <div className="text-sm text-gray-500 mb-4">per 1000 tokens</div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> All Standard features
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Full ADA compliance audit
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Custom accessibility profiles
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Advanced navigation options
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Accessibility reporting
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 text-center">
                        <Link href="/pricing">
                          <Button variant="outline">View All Pricing Plans</Button>
                        </Link>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Accessible Customer Support</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Implement an accessible chatbot for your website that helps all users navigate and find
                            information.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Educational Assistant</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Create an accessible learning companion for students with various disabilities.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Content Simplification</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Convert complex content into more accessible formats for different cognitive abilities.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Workplace Accommodation</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Provide accessible AI assistance for employees with disabilities in the workplace.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Related Tools</CardTitle>
                <CardDescription>Other tools you might like</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link href="/tools/whisper">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img src="/images/whisper-logo.png" alt="Whisper Logo" className="max-w-full max-h-full" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Whisper</h4>
                        <p className="text-sm text-gray-600">Speech recognition system</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/tools/elevenlabs">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src="/images/elevenlabs-logo.png"
                          alt="ElevenLabs Logo"
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">ElevenLabs</h4>
                        <p className="text-sm text-gray-600">Text-to-speech synthesis</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/tools/github-copilot">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src="/images/github-copilot-logo.png"
                          alt="GitHub Copilot Logo"
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">GitHub Copilot</h4>
                        <p className="text-sm text-gray-600">AI pair programmer</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    High Contrast Mode
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Screen Reader Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Text Size Adjustment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Keyboard Navigation Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Simplified Language Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
