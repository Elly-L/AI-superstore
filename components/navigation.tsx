"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-primary">AI Superstore</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button
                    variant={isActive("/") ? "default" : "ghost"}
                    className={isActive("/") ? "bg-primary hover:bg-primary-dark" : ""}
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button
                    variant={isActive("/tools") ? "default" : "ghost"}
                    className={isActive("/tools") ? "bg-primary hover:bg-primary-dark" : ""}
                  >
                    All Tools
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    variant={isActive("/pricing") ? "default" : "ghost"}
                    className={isActive("/pricing") ? "bg-primary hover:bg-primary-dark" : ""}
                  >
                    Pricing
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant={isActive("/about") ? "default" : "ghost"}
                    className={isActive("/about") ? "bg-primary hover:bg-primary-dark" : ""}
                  >
                    About
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant={isActive("/contact") ? "default" : "ghost"}
                    className={isActive("/contact") ? "bg-primary hover:bg-primary-dark" : ""}
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/") ? "bg-primary text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tools"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/tools") ? "bg-primary text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              All Tools
            </Link>
            <Link
              href="/pricing"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/pricing") ? "bg-primary text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/about") ? "bg-primary text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/contact") ? "bg-primary text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">U</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">User</div>
                <div className="text-sm font-medium text-gray-500">user@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
