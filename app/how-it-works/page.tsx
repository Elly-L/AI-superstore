import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CreditCard, Zap, PenToolIcon as Tool } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">How AI Superstore Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get access to premium AI tools without expensive subscriptions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Choose Your Pass</h2>
              <p className="text-gray-600 mb-6">
                Select a 1-Day Pass ($1.99) or 3-Day Pass ($4.99) based on your needs. Alternatively, purchase credit
                packs that never expire for maximum flexibility.
              </p>
              <Link href="/pricing">
                <Button className="bg-primary hover:bg-primary-dark">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">1-Day Pass</h3>
                        <p className="text-sm text-gray-500">Access for 24 hours</p>
                      </div>
                      <span className="font-bold text-primary">$1.99</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-primary">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">3-Day Pass</h3>
                        <p className="text-sm text-gray-500">Access for 72 hours</p>
                      </div>
                      <span className="font-bold text-primary">$4.99</span>
                    </div>
                    <div className="mt-2 text-xs text-green-600 font-medium">Most Popular</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">50 Credits</h3>
                        <p className="text-sm text-gray-500">Never expires</p>
                      </div>
                      <span className="font-bold text-primary">$9.99</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <Card className="bg-gradient-to-r from-secondary/5 to-accent/5 border-none shadow-lg md:order-1 order-2">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium">DALL·E 3</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-purple-600"
                      >
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium">ElevenLabs</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-green-600"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium">GitHub Copilot</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-amber-600"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M9 21V9"></path>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium">Tableau</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="md:order-2 order-1">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Tool className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Access Premium Tools</h2>
              <p className="text-gray-600 mb-6">
                Instantly gain access to over 15 premium AI tools across categories like image generation, voice
                synthesis, code assistance, and data analysis. No installations or complex setup required.
              </p>
              <Link href="/tools">
                <Button className="bg-secondary hover:bg-secondary-dark text-white">
                  Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. Create Amazing Content</h2>
              <p className="text-gray-600 mb-6">
                Use the tools individually or chain them together in workflows to create images, generate voice overs,
                write code, analyze data, and more. Your pass gives you access to all features with generous usage
                limits.
              </p>
              <Link href="/workflow-composer">
                <Button className="bg-accent hover:bg-accent-dark text-white">
                  Try Workflow Composer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2">Blog to Voiceover Workflow</h3>
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
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2">Image + Caption Generator</h3>
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-6 text-primary">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Sign up now and get 5 free credits to try any tool. No credit card required for your first experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Sign Up Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
