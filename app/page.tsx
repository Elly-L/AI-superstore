import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Testimonials } from "@/components/testimonials"
import { OnboardingTour } from "@/components/onboarding-tour"
import { ChevronRight, Code, ImageIcon, Mic, BarChart3, Star, CheckCircle, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      {/* Onboarding Tour */}
      <OnboardingTour />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span className="flex items-center">
                  <Users className="h-3.5 w-3.5 mr-1" />
                  Trusted by 11 students from our WhatsApp group
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
                Use AI Tools Like Midjourney, ElevenLabs, and GPT-4
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl font-medium">
                Pay Only When You Need Them — Just $1.99/day or $4.99/3 days
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/tools">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Try AI Tools Now – $1.99 Day Pass
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tools">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Browse Tools – No Signup Required
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-primary">How It Works in 3 Steps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with AI Superstore in minutes, no subscriptions required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                <span className="text-2xl font-bold text-primary">1</span>
                <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                  <CheckCircle className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Select a Tool or Pass</h3>
              <p className="text-gray-600">
                Choose from our marketplace of premium AI tools or select a day pass for unlimited access.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                <span className="text-2xl font-bold text-primary">2</span>
                <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Use the Tool</h3>
              <p className="text-gray-600">
                Access the tool directly through our platform. No downloads or complex setup required.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download Results</h3>
              <p className="text-gray-600">
                Export your creations in high quality formats ready for your projects and presentations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-primary">Perfect For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI Superstore is designed for anyone who needs powerful AI tools without expensive subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
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
                    className="text-blue-600"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <CardTitle>Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Generate images for presentations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Get coding help for assignments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Create voiceovers for projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
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
                    className="text-purple-600"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <CardTitle>Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Design social media graphics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Generate audio for videos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Create content ideas with AI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
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
                    className="text-green-600"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <CardTitle>Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Debug code with AI assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Generate boilerplate code</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Create UI components quickly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 tools-section">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Featured Categories
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Discover powerful AI tools across categories, all in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Link href="/tools?category=image">
                <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <ImageIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Image Generation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Create stunning visuals from text descriptions with DALL·E, Leonardo AI, and Midjourney.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary-dark">
                      Try Tools
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
              <Link href="/tools?category=voice" className="voice-section">
                <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Mic className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Voice & Audio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Convert text to natural speech or transcribe audio with ElevenLabs and Whisper.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary-dark">
                      Try Tools
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
              <Link href="/tools?category=code" className="code-section">
                <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                      <Code className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Code Assistant</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Get coding help, debug issues, and generate solutions with GitHub Copilot and Replit.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary-dark">
                      Try Tools
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
              <Link href="/tools?category=data">
                <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <BarChart3 className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle>Data Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Analyze data, create visualizations, and extract insights with ChatGPT and Tableau.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary-dark">
                      Try Tools
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Featured Tools
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Explore our most popular AI tools, ready to use instantly.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>DALL·E 3</CardTitle>
                    <Badge className="bg-blue-500">Image</Badge>
                  </div>
                  <CardDescription>OpenAI's advanced image generation model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Nch9eJ1T8wivxMA3Y3LnM7HVdE82M.png"
                      alt="DALL-E logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span>4.8/5</span>
                    <span className="text-gray-300">|</span>
                    <span>2 credits per image</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/tools/dalle" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary-dark">Try Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Leonardo AI</CardTitle>
                    <Badge className="bg-blue-500">Image</Badge>
                  </div>
                  <CardDescription>Advanced AI image generation for creative professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SdjBW9wCXlOSYKgLs0J2v0DE2VQrPR.png"
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
                </CardContent>
                <CardFooter>
                  <Link href="/tools/leonardo" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary-dark">Try Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>GitHub Copilot</CardTitle>
                    <Badge className="bg-green-500">Code</Badge>
                  </div>
                  <CardDescription>AI pair programmer that helps you write code faster</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wr6OGHB1dMMsxVHJIEZeTp37AHpc8y.png"
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
                </CardContent>
                <CardFooter>
                  <Link href="/tools/github-copilot" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary-dark">Try Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <Link href="/tools">
              <Button variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-white">
                View All Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 pricing-section">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Simple, Affordable Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Pay only for what you use, with no monthly commitments.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto mt-8">
              <Tabs defaultValue="day-pass" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="day-pass">Day Pass</TabsTrigger>
                  <TabsTrigger value="three-day">3-Day Pass</TabsTrigger>
                </TabsList>
                <TabsContent value="day-pass" className="mt-4">
                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-center">1-Day Pass</CardTitle>
                      <div className="text-center">
                        <span className="text-4xl font-bold text-primary">$1.99</span>
                        <span className="text-sm text-gray-500 ml-2">/ day</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Access to selected tools for 24 hours
                        </li>
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Generate up to 10 images
                        </li>
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          5 minutes of voice synthesis
                        </li>
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          30 minutes of code assistance
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/checkout?plan=day-pass" className="w-full">
                        <Button className="w-full bg-primary hover:bg-primary-dark">Get Day Pass</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="three-day" className="mt-4">
                  <Card className="border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-center">3-Day Pass</CardTitle>
                        <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">Popular</span>
                      </div>
                      <div className="text-center">
                        <span className="text-4xl font-bold text-primary">$4.99</span>
                        <span className="text-sm text-gray-500 ml-2">/ 3 days</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Access to ALL tools for 72 hours
                        </li>
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Generate up to 50 images
                        </li>
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          30 minutes of voice synthesis
                        </li>
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Unlimited code assistance
                        </li>
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-green-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Access to all workflow templates
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/checkout?plan=three-day" className="w-full">
                        <Button className="w-full bg-primary hover:bg-primary-dark">Get 3-Day Pass</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                What Students Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Hear from students who use AI Superstore for their projects.
              </p>
            </div>
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Sign up now and get 5 free credits to try any tool.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Sign Up Free
                </Button>
              </Link>
              <Link href="/tools">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Explore Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
