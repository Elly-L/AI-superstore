import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Star, Clock, Users, Code, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChatGPTPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/tools" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">ChatGPT</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 relative rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W69e7eN9tiIXCwj3DmqWSALKa3oPb9.png"
                      alt="ChatGPT Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle>ChatGPT</CardTitle>
                    <CardDescription>Advanced conversational AI by OpenAI</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-500 ml-1">(2.3k reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-1" />
                    <span>1.2M+ users</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-500 mr-1" />
                    <span>Updated 2 days ago</span>
                  </div>
                </div>

                <Tabs defaultValue="overview">
                  <TabsList className="mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview">
                    <div className="space-y-4">
                      <p>
                        ChatGPT is an advanced AI assistant that can engage in natural conversations, answer questions,
                        assist with writing, provide explanations, and help with a wide range of tasks through
                        text-based interaction.
                      </p>

                      <h3 className="text-xl font-semibold mt-4">Key Benefits</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Natural language understanding and generation</li>
                        <li>Contextual awareness in conversations</li>
                        <li>Knowledge across various domains</li>
                        <li>Writing assistance and content creation</li>
                        <li>Code explanation and generation</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="features">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                              Conversational AI
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>
                              Engage in natural, flowing conversations with contextual awareness and memory of previous
                              exchanges.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <Code className="h-5 w-5 mr-2 text-primary" />
                              Code Assistant
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>
                              Get help with coding problems, explanations, and generation of code snippets across
                              multiple programming languages.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pricing">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Free Plan</CardTitle>
                            <CardDescription>Basic access with limitations</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Access to GPT-3.5</li>
                              <li>Standard response speed</li>
                              <li>Limited usage during peak times</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <p className="text-2xl font-bold">0 credits</p>
                          </CardFooter>
                        </Card>

                        <Card className="border-primary">
                          <CardHeader className="bg-primary/10">
                            <CardTitle>Premium Access</CardTitle>
                            <CardDescription>Full featured experience</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Access to GPT-4o</li>
                              <li>Priority access during peak times</li>
                              <li>Faster response speed</li>
                              <li>Higher usage limits</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <p className="text-2xl font-bold">10 credits/hour</p>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews">
                    <div className="space-y-4">
                      {/* Reviews would go here */}
                      <p>See what our users are saying about ChatGPT.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Launch ChatGPT</Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Related Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link href="/tools/github-copilot" className="block">
                    <Card className="hover:bg-accent transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">GitHub Copilot</CardTitle>
                        <CardDescription>AI pair programmer</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>

                  <Link href="/tools/whisper" className="block">
                    <Card className="hover:bg-accent transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Whisper</CardTitle>
                        <CardDescription>Speech recognition system</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>

                  <Link href="/tools/replit" className="block">
                    <Card className="hover:bg-accent transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Replit</CardTitle>
                        <CardDescription>Collaborative coding platform</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/tools" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Tools
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link href="/tools/github-copilot">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: GitHub Copilot
            </Button>
          </Link>
          <Link href="/tools/whisper">
            <Button variant="outline">
              Next: Whisper
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
