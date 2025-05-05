"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { Search, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
        <div className="space-y-6 max-w-md">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-gray-600">Oops! The page you're looking for doesn't exist or has been moved.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary-dark">
                <Home className="mr-2 h-4 w-4" /> Go Home
              </Button>
            </Link>
            <Link href="/tools">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Search className="mr-2 h-4 w-4" /> Explore Tools
              </Button>
            </Link>
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              Looking for something specific? Try searching for tools or check out our{" "}
              <Link href="/faq" className="text-primary hover:underline">
                FAQ page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
