import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-gray-500">
            © 2025 AI Superstore. All rights reserved. A product of{" "}
            <a
              href="https://eltek.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Eltek
            </a>
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link href="/terms" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/tools" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
            Tools
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  )
}
