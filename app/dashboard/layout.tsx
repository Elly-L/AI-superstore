"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, User } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login")
    } else {
      setLoading(false)
    }
  }, [user, router, loading])

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Failed to log out", error)
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eltek-logo%20-%20Copy.jpg-KWxl0Kulx6CAoOTKyOvymbvHK7Hs4Q.jpeg"
                alt="AI Superstore"
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold">AI Superstore</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <Tabs defaultValue="dashboard">
                <TabsList>
                  <TabsTrigger value="dashboard" asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </TabsTrigger>
                  <TabsTrigger value="tools" asChild>
                    <Link href="/tools">Tools</Link>
                  </TabsTrigger>
                  <TabsTrigger value="settings" asChild>
                    <Link href="/settings">Settings</Link>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <User className="h-4 w-4" />
                </div>
                <span className="font-medium">{user?.displayName?.split(" ")[0] || "User"}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout} className="h-8 w-8">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">{children}</div>
      </main>
    </div>
  )
}
