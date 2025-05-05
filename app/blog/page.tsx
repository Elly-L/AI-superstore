import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">AI Superstore Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and updates about AI tools and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/10 hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">Featured Image</span>
              </div>
              <CardTitle className="text-xl">Getting Started with AI Image Generation</CardTitle>
              <CardDescription>May 1, 2025 • 5 min read</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">
                Learn how to create stunning visuals using DALL·E 3 and other image generation tools. This
                beginner-friendly guide covers prompts, styles, and best practices.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/getting-started-with-ai-image-generation">
                <Button variant="ghost" className="text-primary hover:text-primary-dark">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-primary/10 hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="h-48 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-md mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">Featured Image</span>
              </div>
              <CardTitle className="text-xl">The Future of Voice Synthesis</CardTitle>
              <CardDescription>April 25, 2025 • 7 min read</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">
                Explore the latest advancements in AI voice technology and how tools like ElevenLabs are revolutionizing
                content creation, accessibility, and entertainment.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/future-of-voice-synthesis">
                <Button variant="ghost" className="text-primary hover:text-primary-dark">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-primary/10 hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="h-48 bg-gradient-to-r from-accent/10 to-primary/10 rounded-md mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">Featured Image</span>
              </div>
              <CardTitle className="text-xl">Coding with AI: Tips and Tricks</CardTitle>
              <CardDescription>April 18, 2025 • 10 min read</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">
                Discover how to leverage GitHub Copilot and other AI coding assistants to boost your productivity, learn
                new programming languages, and solve complex problems.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/coding-with-ai-tips-and-tricks">
                <Button variant="ghost" className="text-primary hover:text-primary-dark">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </Layout>
  )
}
