import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Star, Clock, Users, BarChart2, PieChart, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TableauPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/tools" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Tableau</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 relative rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZHJcs0AxQ4qkMYsa75yblbnZ7QirIa.png"
                      alt="Tableau Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle>Tableau</CardTitle>
                    <CardDescription>Interactive data visualization platform</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="font-medium">4.8</span>
                    <span className="text-gray-500 ml-1">(3.2k reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-1" />
                    <span>1.5M+ users</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-500 mr-1" />
                    <span>Updated 3 days ago</span>
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
                        Tableau is a powerful data visualization and business intelligence platform that helps people
                        see and understand their data. Connect to almost any database, drag and drop to create
                        visualizations, and share with a click.
                      </p>

                      <h3 className="text-xl font-semibold mt-4">Key Benefits</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Create interactive dashboards without coding</li>
                        <li>Connect to virtually any data source</li>
                        <li>Powerful analytics capabilities</li>
                        <li>Real-time data visualization</li>
                        <li>Collaborative sharing and permissions</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="features">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                              Interactive Dashboards
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>
                              Create interactive, shareable dashboards that update in real-time as your data changes.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <PieChart className="h-5 w-5 mr-2 text-primary" />
                              Visual Analytics
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>
                              Drag and drop interface makes it easy to analyze data visually without technical
                              expertise.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center">
                              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                              Advanced Analytics
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Built-in statistical tools, trend analysis, and forecasting capabilities.</p>
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
                            <CardTitle>Viewer</CardTitle>
                            <CardDescription>For consuming dashboards</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>View and interact with dashboards</li>
                              <li>Basic filtering capabilities</li>
                              <li>Export data to Excel</li>
                              <li>Mobile access</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <p className="text-2xl font-bold">5 credits/hour</p>
                          </CardFooter>
                        </Card>

                        <Card className="border-primary">
                          <CardHeader className="bg-primary/10">
                            <CardTitle>Creator</CardTitle>
                            <CardDescription>For analysts and data professionals</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Create and publish visualizations</li>
                              <li>Connect to all data sources</li>
                              <li>Advanced analytics features</li>
                              <li>Data preparation tools</li>
                              <li>Collaboration capabilities</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <p className="text-2xl font-bold">20 credits/hour</p>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews">
                    <div className="space-y-4">
                      {/* Reviews would go here */}
                      <p>See what our users are saying about Tableau.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Launch Tableau</Button>
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
                  <Link href="/tools/leonardo" className="block">
                    <Card className="hover:bg-accent transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Leonardo AI</CardTitle>
                        <CardDescription>AI image generation</CardDescription>
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

                  <Link href="/tools/dalle" className="block">
                    <Card className="hover:bg-accent transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">DALL-E</CardTitle>
                        <CardDescription>AI image generation</CardDescription>
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
          <Link href="/tools/replit">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Replit
            </Button>
          </Link>
          <Link href="/tools/leonardo">
            <Button variant="outline">
              Next: Leonardo AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
