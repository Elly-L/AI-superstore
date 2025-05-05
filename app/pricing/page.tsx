import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layout } from "@/components/layout"
import { Check, Info, Calculator, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Simple, Affordable Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pay only for what you use, with no monthly commitments or hidden fees.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-white p-4 rounded-lg shadow-sm md:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">How Our Credit System Works</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Credits are our universal currency across all AI tools. Different tools require different amounts of
                credits based on their computational intensity:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>
                    <span className="font-medium">Image Generation:</span> 2-3 credits per image depending on quality
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>
                    <span className="font-medium">Voice Synthesis:</span> 1 credit per minute of audio
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>
                    <span className="font-medium">Code Assistance:</span> 2-3 credits per hour of usage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>
                    <span className="font-medium">Data Analysis:</span> 3-4 credits per hour of processing
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm md:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Cost Savings Comparison</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                See how much you save compared to traditional monthly subscriptions:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Individual AI Tool Subscriptions</span>
                  <span className="font-medium text-red-500">$49-99/month each</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>DALL·E API Access (100 images)</span>
                  <span className="text-red-500">$18.00</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>GitHub Copilot</span>
                  <span className="text-red-500">$10.00/month</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>ElevenLabs (10k characters)</span>
                  <span className="text-red-500">$5.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>AI Superstore 3-Day Pass</span>
                  <span className="text-green-600">Just $4.99</span>
                </div>
                <div className="bg-green-50 p-2 rounded text-center text-green-700 font-medium">
                  Save up to 80% with our pay-as-you-go model!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="passes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="passes">Day Passes</TabsTrigger>
              <TabsTrigger value="credits">Credit Packs</TabsTrigger>
            </TabsList>

            <TabsContent value="passes" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl">1-Day Pass</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">$1.99</span>
                      <span className="text-gray-500 ml-2">/ day</span>
                    </div>
                    <CardDescription className="mt-2">Perfect for quick projects and one-time needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Access to selected tools for 24 hours</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Generate up to 10 images</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>5 minutes of voice synthesis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>30 minutes of code assistance</span>
                      </li>
                      <li className="flex items-center text-sm text-primary mt-2">
                        <Info className="h-4 w-4 mr-1" />
                        <span>Equivalent to approximately 25 credits</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/checkout?plan=day-pass" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary-dark">Get Day Pass</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-primary/10 hover:border-primary/30 transition-all bg-gradient-to-b from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">3-Day Pass</CardTitle>
                      <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">Popular</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">$4.99</span>
                      <span className="text-gray-500 ml-2">/ 3 days</span>
                    </div>
                    <CardDescription className="mt-2">Best value for weekend projects and hackathons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Access to ALL tools for 72 hours</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Generate up to 50 images</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>30 minutes of voice synthesis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Unlimited code assistance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Access to all workflow templates</span>
                      </li>
                      <li className="flex items-center text-sm text-primary mt-2">
                        <Info className="h-4 w-4 mr-1" />
                        <span>Equivalent to approximately 100 credits</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/checkout?plan=three-day" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary-dark">Get 3-Day Pass</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="credits" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl">20 Credits</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">$4.99</span>
                    </div>
                    <CardDescription className="mt-2">Basic pack for occasional use</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Credits never expire</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Access to all tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>$0.25 per credit</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 mt-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Approx. 10 images or 20 mins of voice</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/checkout?plan=credits-20" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary-dark">Buy Credits</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-primary/10 hover:border-primary/30 transition-all bg-gradient-to-b from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">50 Credits</CardTitle>
                      <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">Popular</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">$9.99</span>
                    </div>
                    <CardDescription className="mt-2">Best value for regular users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Credits never expire</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Access to all tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>$0.20 per credit (20% savings)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 mt-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Approx. 25 images or 50 mins of voice</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/checkout?plan=credits-50" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary-dark">Buy Credits</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl">100 Credits</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">$16.99</span>
                    </div>
                    <CardDescription className="mt-2">Power user pack with maximum savings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Credits never expire</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Access to all tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>$0.17 per credit (32% savings)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>Early access to new tools</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 mt-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Approx. 50 images or 100 mins of voice</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/checkout?plan=credits-100" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary-dark">Buy Credits</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">How do day passes work?</h3>
              <p className="text-gray-600">
                Day passes give you access to AI tools for a fixed period (1 or 3 days). Once activated, you can use the
                tools until the pass expires, with the specified usage limits.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Do credits expire?</h3>
              <p className="text-gray-600">
                No, credits never expire. You can use them whenever you need, making them perfect for occasional users
                or those with varying usage patterns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Can I use multiple tools with one pass?</h3>
              <p className="text-gray-600">
                Yes! Day passes give you access to multiple tools. The 1-Day Pass includes selected tools, while the
                3-Day Pass gives you access to our entire catalog.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">How many credits do I need?</h3>
              <p className="text-gray-600">
                Credit usage varies by tool: typically 2 credits per image generation, 1 credit per minute of voice
                synthesis, and 3 credits per hour of code assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Need a custom plan?</h2>
          <p className="mb-6 text-gray-600">
            For teams, educational institutions, or high-volume users, we offer custom pricing plans tailored to your
            specific needs.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary-dark">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
