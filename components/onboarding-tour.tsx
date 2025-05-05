"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X, ChevronRight, ChevronLeft, CreditCard, ImageIcon, Mic, Code, Zap } from "lucide-react"

interface TourStep {
  title: string
  content: string
  icon: React.ReactNode
  position: "top" | "right" | "bottom" | "left" | "center"
  element?: string
}

export function OnboardingTour() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [hasSeenTour, setHasSeenTour] = useState(false)

  const tourSteps: TourStep[] = [
    {
      title: "Welcome to AI Superstore!",
      content: "Let's take a quick tour to help you get started with our platform.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      position: "center",
    },
    {
      title: "Explore AI Tools",
      content:
        "Browse our collection of premium AI tools across categories like image generation, voice synthesis, and code assistance.",
      icon: <ImageIcon className="h-6 w-6 text-blue-500" />,
      position: "bottom",
      element: ".tools-section",
    },
    {
      title: "Day Passes & Credits",
      content:
        "Choose between day passes for short-term access or credit packs that never expire. Pay only for what you need.",
      icon: <CreditCard className="h-6 w-6 text-green-500" />,
      position: "bottom",
      element: ".pricing-section",
    },
    {
      title: "Create with Voice",
      content: "Convert text to natural-sounding speech with our voice synthesis tools like ElevenLabs.",
      icon: <Mic className="h-6 w-6 text-purple-500" />,
      position: "right",
      element: ".voice-section",
    },
    {
      title: "Code Assistance",
      content: "Get help with coding tasks using GitHub Copilot, Replit, and other AI coding tools.",
      icon: <Code className="h-6 w-6 text-green-500" />,
      position: "left",
      element: ".code-section",
    },
  ]

  useEffect(() => {
    // Check if user has seen the tour before
    const tourSeen = localStorage.getItem("tourSeen")
    if (!tourSeen) {
      // Wait a moment before showing the tour
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setHasSeenTour(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("tourSeen", "true")
    setHasSeenTour(true)
  }

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleClose()
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isOpen) return null

  const currentTourStep = tourSteps[currentStep]

  // Position the tour card based on the current step
  const getPositionStyles = () => {
    if (currentTourStep.position === "center") {
      return "fixed inset-0 flex items-center justify-center z-50 bg-black/50"
    }

    // For other positions, we would calculate based on the element
    // This is simplified for the example
    return "fixed bottom-4 right-4 z-50"
  }

  return (
    <div className={getPositionStyles()}>
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {currentTourStep.icon}
              <CardTitle>{currentTourStep.title}</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{currentTourStep.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {tourSteps.length}
          </div>
          <div className="flex gap-2">
            {currentStep > 0 && (
              <Button variant="outline" size="sm" onClick={handlePrev}>
                <ChevronLeft className="h-4 w-4 mr-1" /> Back
              </Button>
            )}
            <Button size="sm" onClick={handleNext}>
              {currentStep < tourSteps.length - 1 ? (
                <>
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </>
              ) : (
                "Get Started"
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
