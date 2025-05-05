import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Star, Clock, Users, Code, Share2, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ReplitPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/tools" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Replit</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 relative rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iDfeyV7eCiVlWVj0ZBa4agIq7f547t.png"
                      alt="Replit Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle>Replit</CardTitle>
                    <CardDescription>Collaborative browser-based IDE</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="font-medium">4.7</span>
                    <span className="text-gray-500 ml-1">(1.8k reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-1" />
                    <span>950K+ users</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-500 mr-1" />
                    <span>Updated 1 week ago</span>
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
                        Replit is a collaborative browser-based IDE that makes it easy to code in 50+ languages without
                        spending time on setup. Build, run, test, and deploy applications directly from your browser.
                      </p>

                      <h3 className="text-xl font-semibold mt-4">Key Benefits</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Zero setup required - start coding instantly</li>
                        <li>Real-time collaboration with team members</li>
                        <li>Built-in hosting and deployment</li>
                        <li>Support for 50+ programming languages</li>
                        <li>Integrated AI coding assistance</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="features">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <Code className="h-5 w-5 mr-2 text-primary" />
                              Multiplayer Coding
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Collaborate in real-time with teammates, just like Google Docs but for code.</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <Share2 className="h-5 w-5 mr-2 text-primary" />
                              Instant Sharing
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Share your code with a simple link - no downloads or installations required.</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <Zap className="h-5 w-5 mr-2 text-primary" />
                              Ghostwriter AI
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>AI-powered coding assistant that helps you write, debug, and explain code.</p>
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
                            <CardDescription>For hobbyists and learners</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Unlimited public repls</li>
                              <li>Basic collaboration features</li>
                              <li>Limited compute resources</li>
                              <li>Community support</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <p className="text-2xl font-bold">0 credits</p>
                          </CardFooter>
                        </Card>

                        <Card className="border-primary">
                          <CardHeader className="bg-primary/10">
                            <CardTitle>Pro Access</CardTitle>
                            <CardDescription>For professionals and teams</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Unlimited private repls</li>
                              <li>Advanced collaboration tools</li>
                              <li>Boosted compute resources</li>
                              <li>Priority support</li>
                              <li>Ghostwriter AI assistance</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <p className="text-2xl font-bold">15 credits/hour</p>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews">
                    <div className="space-y-4">
                      {/* Reviews would go here */}
                      <p>See what our users are saying about Replit.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Launch Replit</Button>
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

                  <Link href="/tools/chatgpt" className="block">
                    <Card className="hover:bg-accent transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">ChatGPT</CardTitle>
                        <CardDescription>Advanced conversational AI</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>

                  <Link href="/tools/tableau" className="block">
                    <Card className="hover:bg-accent transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Tableau</CardTitle>
                        <CardDescription>Data visualization platform</CardDescription>
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
          <Link href="/tools/whisper">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Whisper
            </Button>
          </Link>
          <Link href="/tools/tableau">
            <Button variant="outline">
              Next: Tableau
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
