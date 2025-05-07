import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About AI Superstore</h1>
            <p className="text-xl text-gray-600">Making powerful AI tools accessible to everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We started building AI Superstore in May 2025 out of a real need we faced as students. We were
                  constantly switching between tools like GPT-4 for writing, Midjourney for visuals, and ElevenLabs for
                  voice—but they were all on separate platforms with expensive monthly plans.
                </p>
                <p>
                  <strong>The problem was clear:</strong> We only needed these tools for occasional tasks, but we were
                  paying full subscription prices.
                </p>
                <p>
                  That's when we had our lightbulb moment: What if there was a single platform that let you use the best
                  AI tools on demand—without needing to subscribe to each one separately?
                </p>
                <p>
                  So we built AI Superstore—a centralized AI marketplace where users can access tools instantly and pay
                  just for what they use (like a $1.99 one-day pass).
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <div className="space-y-4 text-gray-700">
                <p>At AI Superstore, we're on a mission to democratize access to powerful AI tools for everyone.</p>
                <div className="space-y-2 mt-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <p>
                      <strong>For Students:</strong> Access premium AI tools for projects without breaking the bank
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <p>
                      <strong>For Creators:</strong> Use multiple AI tools for your content without multiple
                      subscriptions
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <p>
                      <strong>For Developers:</strong> Experiment with different AI tools before committing to one
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Choose a Pass</h3>
                <p className="text-gray-600">Select a 1-day, 3-day pass, or buy credits based on your needs</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Access All Tools</h3>
                <p className="text-gray-600">Use any AI tool in our marketplace without creating separate accounts</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Create & Combine</h3>
                <p className="text-gray-600">Build workflows that combine multiple AI tools for powerful results</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Our Traction</h2>
              <p className="text-gray-600">We're just getting started, but people are already loving AI Superstore</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">11</div>
                <p className="text-gray-600">Students onboarded in our first 72 hours</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">4.8/5</div>
                <p className="text-gray-600">Average user satisfaction rating</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">9</div>
                <p className="text-gray-600">Premium AI tools available in our marketplace</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Meet the Founder</h2>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ME.jpg-l5sggG8OJ5nw7H6irpiRDXBtPmqiOm.jpeg"
                  alt="Elly Odhiambo"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Elly Odhiambo</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-700 max-w-lg mx-auto">
                Computer Science major with a passion for making AI accessible to everyone. Elly leads the vision and
                product development at AI Superstore.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              We're just getting started, and we'd love for you to be part of our story. Sign up today to get early
              access to AI Superstore and help shape the future of AI accessibility.
            </p>
            <Link href="/signup">
              <Button size="lg">Sign Up for Early Access</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
