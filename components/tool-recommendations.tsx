"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Mic, BarChart3, ThumbsUp, ThumbsDown } from "lucide-react"
import Link from "next/link"

export function ToolRecommendations() {
  const [feedback, setFeedback] = useState<Record<string, boolean | null>>({})

  const handleFeedback = (toolId: string, isHelpful: boolean) => {
    setFeedback((prev) => ({
      ...prev,
      [toolId]: isHelpful,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended for You</CardTitle>
        <CardDescription>Tools that match your interests and usage patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
            <TabsTrigger value="voice">Voice</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <ImageIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium">Leonardo AI</p>
                      <Badge className="ml-2 bg-blue-500 text-xs">Image</Badge>
                    </div>
                    <p className="text-xs text-gray-500">
                      Based on your DALL·E usage - try this alternative for artistic styles
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {feedback["leonardo"] === undefined ? (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback("leonardo", true)}
                      >
                        <ThumbsUp className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback("leonardo", false)}
                      >
                        <ThumbsDown className="h-4 w-4 text-gray-500" />
                      </Button>
                    </>
                  ) : (
                    <span className="text-xs text-gray-500">Thanks for your feedback!</span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Mic className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium">OpenAI Whisper</p>
                      <Badge className="ml-2 bg-purple-500 text-xs">Voice</Badge>
                    </div>
                    <p className="text-xs text-gray-500">Transcribe your audio files with high accuracy</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {feedback["whisper"] === undefined ? (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback("whisper", true)}
                      >
                        <ThumbsUp className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback("whisper", false)}
                      >
                        <ThumbsDown className="h-4 w-4 text-gray-500" />
                      </Button>
                    </>
                  ) : (
                    <span className="text-xs text-gray-500">Thanks for your feedback!</span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                    <BarChart3 className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium">Tableau</p>
                      <Badge className="ml-2 bg-amber-500 text-xs">Data</Badge>
                    </div>
                    <p className="text-xs text-gray-500">Visualize your data with interactive dashboards</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {feedback["tableau"] === undefined ? (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback("tableau", true)}
                      >
                        <ThumbsUp className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback("tableau", false)}
                      >
                        <ThumbsDown className="h-4 w-4 text-gray-500" />
                      </Button>
                    </>
                  ) : (
                    <span className="text-xs text-gray-500">Thanks for your feedback!</span>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="image" className="mt-4">
            {/* Image recommendations content */}
          </TabsContent>

          <TabsContent value="voice" className="mt-4">
            {/* Voice recommendations content */}
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            {/* Code recommendations content */}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Link href="/tools" className="w-full">
          <Button variant="outline" className="w-full">
            View All Tools
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
