import { Layout } from "@/components/layout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search } from "lucide-react"

export default function FAQPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about AI Superstore, our tools, and pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="what-is-ai-superstore">
                  <AccordionTrigger>What is AI Superstore?</AccordionTrigger>
                  <AccordionContent>
                    AI Superstore is a platform that provides access to premium AI tools without requiring expensive
                    monthly subscriptions. We offer a pay-as-you-go model with day passes and credit packs, allowing you
                    to use powerful AI tools only when you need them.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="how-is-different">
                  <AccordionTrigger>How is AI Superstore different from other AI platforms?</AccordionTrigger>
                  <AccordionContent>
                    Unlike most AI platforms that require monthly subscriptions, AI Superstore offers a pay-as-you-go
                    model. You can purchase day passes for short-term access or credit packs that never expire. This
                    makes it perfect for occasional users, students, and professionals who don't need constant access to
                    AI tools.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="which-tools">
                  <AccordionTrigger>Which AI tools are available on AI Superstore?</AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of AI tools across categories including image generation (DALL·E 3, Leonardo
                    AI), voice synthesis (ElevenLabs, Whisper), code assistance (GitHub Copilot, Replit), and data
                    analysis (Tableau, ChatGPT with ADA). Our catalog is constantly expanding with new tools.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Pricing & Credits</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="day-passes">
                  <AccordionTrigger>How do day passes work?</AccordionTrigger>
                  <AccordionContent>
                    Day passes give you access to AI tools for a fixed period (1 or 3 days). Once activated, you can use
                    the tools until the pass expires, with the specified usage limits. The 1-Day Pass costs $1.99 and
                    includes selected tools, while the 3-Day Pass costs $4.99 and gives you access to our entire
                    catalog.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="credits-expire">
                  <AccordionTrigger>Do credits expire?</AccordionTrigger>
                  <AccordionContent>
                    No, credits never expire. You can use them whenever you need, making them perfect for occasional
                    users or those with varying usage patterns. This ensures you only pay for what you use, with no
                    pressure to consume credits within a specific timeframe.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="credit-cost">
                  <AccordionTrigger>How many credits do different tools cost?</AccordionTrigger>
                  <AccordionContent>
                    <p>Credit usage varies by tool based on computational intensity:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                      <li>Image Generation: 2-3 credits per image depending on quality and size</li>
                      <li>Voice Synthesis: 1 credit per minute of audio</li>
                      <li>Code Assistance: 2-3 credits per hour of usage</li>
                      <li>Data Analysis: 3-4 credits per hour of processing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="refunds">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent>
                    We offer refunds for unused credits and day passes within 7 days of purchase. If you're unsatisfied
                    with a tool's performance, please contact our support team, and we'll work to resolve the issue or
                    provide a refund as appropriate.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Account & Usage</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="create-account">
                  <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you need to create a free account to use AI Superstore. This allows us to track your credits,
                    save your generated content, and provide a personalized experience. Sign-up is quick and comes with
                    5 free credits to try any tool.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="multiple-tools">
                  <AccordionTrigger>Can I use multiple tools with one pass?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Day passes give you access to multiple tools. The 1-Day Pass includes selected tools, while the
                    3-Day Pass gives you access to our entire catalog. You can switch between tools as needed during the
                    validity period of your pass.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="content-ownership">
                  <AccordionTrigger>Who owns the content I create?</AccordionTrigger>
                  <AccordionContent>
                    You retain full ownership of all content created using our tools. AI Superstore does not claim any
                    rights to your generated images, code, text, or other outputs. You're free to use your creations for
                    personal or commercial purposes, subject to the terms of the specific AI models.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Technical Support</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="technical-issues">
                  <AccordionTrigger>What if I encounter technical issues?</AccordionTrigger>
                  <AccordionContent>
                    If you encounter any technical issues, please contact our support team through the Help Center or by
                    emailing support@aisuperstore.com. We aim to respond to all inquiries within 24 hours. For urgent
                    issues, you can use the live chat feature in your dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="browser-compatibility">
                  <AccordionTrigger>Which browsers are supported?</AccordionTrigger>
                  <AccordionContent>
                    AI Superstore works best on modern browsers like Chrome, Firefox, Safari, and Edge. We recommend
                    keeping your browser updated to the latest version for optimal performance. Some advanced features
                    may require WebGL support or other modern web technologies.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary-dark">Contact Support</Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Explore Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
