import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react"

export default function CareersPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us democratize access to AI technology and build the future of AI tools
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-600 text-sm">
                    Work with the latest AI models and technologies to solve real-world problems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Inclusive Culture</h3>
                  <p className="text-gray-600 text-sm">
                    Join a diverse team that values different perspectives and fosters collaboration.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-600 text-sm">
                    Develop your skills and advance your career in a fast-growing startup environment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-primary">Open Positions</h2>
          <div className="space-y-6">
            <Card className="border-primary/10 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle>Senior Frontend Developer</CardTitle>
                <CardDescription className="flex flex-wrap gap-4 mt-2">
                  <span className="flex items-center text-sm">
                    <Briefcase className="h-4 w-4 mr-1" /> Full-time
                  </span>
                  <span className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" /> Remote (Kenya-based)
                  </span>
                  <span className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" /> Posted 2 days ago
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We're looking for an experienced frontend developer to help build intuitive, responsive interfaces for
                  our AI tools. You'll work closely with our design and backend teams to create seamless user
                  experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Tailwind CSS</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/careers/senior-frontend-developer">
                  <Button className="bg-primary hover:bg-primary-dark">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-primary/10 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle>Machine Learning Engineer</CardTitle>
                <CardDescription className="flex flex-wrap gap-4 mt-2">
                  <span className="flex items-center text-sm">
                    <Briefcase className="h-4 w-4 mr-1" /> Full-time
                  </span>
                  <span className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
                  </span>
                  <span className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" /> Posted 1 week ago
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our ML team to develop and optimize AI models for our platform. You'll work on integrating
                  cutting-edge models, fine-tuning them for specific use cases, and ensuring they perform efficiently.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">PyTorch</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">TensorFlow</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">LLMs</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/careers/machine-learning-engineer">
                  <Button className="bg-primary hover:bg-primary-dark">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-primary/10 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle>Product Marketing Manager</CardTitle>
                <CardDescription className="flex flex-wrap gap-4 mt-2">
                  <span className="flex items-center text-sm">
                    <Briefcase className="h-4 w-4 mr-1" /> Full-time
                  </span>
                  <span className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" /> Remote (Kenya-based)
                  </span>
                  <span className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" /> Posted 3 days ago
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We're seeking a creative and data-driven Product Marketing Manager to help us reach more users and
                  communicate the value of our AI tools. You'll develop marketing strategies, create compelling content,
                  and analyze campaign performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Marketing</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Content Creation</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Analytics</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">SEO</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/careers/product-marketing-manager">
                  <Button className="bg-primary hover:bg-primary-dark">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Don't see a position that matches your skills?</p>
          <Link href="/contact">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
