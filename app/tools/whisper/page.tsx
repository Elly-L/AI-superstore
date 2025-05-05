import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, Clock, Users, Mic, Upload, Play } from "lucide-react"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"

export default function WhisperPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/tools" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">OpenAI Whisper</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 relative rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src="/images/whisper-logo.png"
                      alt="OpenAI Whisper Logo"
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div>
                    <CardTitle>OpenAI Whisper</CardTitle>
                    <CardDescription>Advanced speech recognition system</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="font-medium">4.5</span>
                    <span className="text-gray-500 ml-1">(1.2k reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-1" />
                    <span>850K+ users</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-500 mr-1" />
                    <span>Updated 1 week ago</span>
                  </div>
                </div>

                <Tabs defaultValue="transcribe">
                  <TabsList className="mb-4">
                    <TabsTrigger value="transcribe">Transcribe</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>

                  <TabsContent value="transcribe">
                    <div className="space-y-6">
                      <div className="bg-gray-50 border rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Upload Audio for Transcription</h3>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                          <div className="flex flex-col items-center">
                            <Upload className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600 mb-2">
                              Drag and drop an audio file here, or click to browse
                            </p>
                            <p className="text-xs text-gray-500 mb-4">Supports MP3, WAV, M4A (Max 25MB)</p>
                            <Button variant="outline" size="sm">
                              Browse Files
                            </Button>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Model</span>
                            <span className="text-primary">Whisper Large v3</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" size="sm" className="text-xs">
                              Whisper Small
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs">
                              Whisper Medium
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs bg-primary/10 border-primary">
                              Whisper Large
                            </Button>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Language</span>
                            <span className="text-primary">Auto-detect</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" size="sm" className="text-xs bg-primary/10 border-primary">
                              Auto-detect
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs">
                              English
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs">
                              Spanish
                            </Button>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button variant="outline" className="flex items-center gap-2">
                            <Mic className="h-4 w-4" />
                            Record Audio
                          </Button>
                          <Button className="bg-primary">Transcribe</Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Transcription Results</h3>
                        <div className="bg-gray-50 rounded-lg p-4 min-h-[200px] mb-4">
                          <p className="text-gray-400 italic">Transcription will appear here...</p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Play className="h-4 w-4" />
                            </Button>
                            <div className="w-32">
                              <Slider defaultValue={[0]} max={100} step={1} />
                            </div>
                            <span className="text-xs text-gray-500">00:00</span>
                          </div>
                          <div>
                            <Button variant="outline" size="sm">
                              Copy Text
                            </Button>
                            <Button variant="outline" size="sm" className="ml-2">
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features">
                    <div className="space-y-4">
                      <p>
                        Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual
                        and multitask supervised data collected from the web. It is designed to transcribe speech in
                        multiple languages and translate it to English.
                      </p>

                      <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Multilingual speech recognition with support for 99 languages</li>
                        <li>Robust to accents, background noise, and technical language</li>
                        <li>Translation capabilities from multiple languages to English</li>
                        <li>Timestamps and word-level confidence scores</li>
                        <li>Flexible deployment options from tiny to large models</li>
                      </ul>

                      <h3 className="text-xl font-semibold mt-6 mb-3">Use Cases</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Transcribe meetings, interviews, and lectures</li>
                        <li>Create subtitles for videos in multiple languages</li>
                        <li>Document audio content for accessibility</li>
                        <li>Build voice-controlled applications</li>
                        <li>Analyze call center conversations</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="pricing">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Whisper Small</CardTitle>
                            <CardDescription>Basic transcription needs</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold mb-2">2 credits</div>
                            <div className="text-sm text-gray-500 mb-4">per minute of audio</div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Up to 25MB files
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Basic language support
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Standard accuracy
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-primary">
                          <CardHeader>
                            <CardTitle>Whisper Medium</CardTitle>
                            <CardDescription>Enhanced accuracy</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold mb-2">4 credits</div>
                            <div className="text-sm text-gray-500 mb-4">per minute of audio</div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Up to 50MB files
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Expanded language support
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Higher accuracy
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Whisper Large</CardTitle>
                            <CardDescription>Professional quality</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold mb-2">8 credits</div>
                            <div className="text-sm text-gray-500 mb-4">per minute of audio</div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Up to 100MB files
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Full language support (99 languages)
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Highest accuracy
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">✓</span> Translation to English
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="mt-6 text-center">
                        <Link href="/pricing">
                          <Button variant="outline">View All Pricing Plans</Button>
                        </Link>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Podcast Transcription</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Automatically transcribe podcast episodes and create searchable archives.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Meeting Minutes</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Record and transcribe meetings to create automated meeting minutes.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Video Subtitles</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Generate accurate subtitles for videos in multiple languages.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Voice Search</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Implement voice search functionality in your applications.
                          </p>
                          <Button variant="outline" size="sm">
                            View Example
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Related Tools</CardTitle>
                <CardDescription>Other tools you might like</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link href="/tools/elevenlabs">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src="/images/elevenlabs-logo.png"
                          alt="ElevenLabs Logo"
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">ElevenLabs</h4>
                        <p className="text-sm text-gray-600">Text-to-speech synthesis</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/tools/chatgpt">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img src="/images/chatgpt-logo.png" alt="ChatGPT Logo" className="max-w-full max-h-full" />
                      </div>
                      <div>
                        <h4 className="font-semibold">ChatGPT</h4>
                        <p className="text-sm text-gray-600">Conversational AI assistant</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/tools/github-copilot">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src="/images/github-copilot-logo.png"
                          alt="GitHub Copilot Logo"
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">GitHub Copilot</h4>
                        <p className="text-sm text-gray-600">AI pair programmer</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Get Help</CardTitle>
                <CardDescription>Resources and support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Documentation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Tutorials
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Community Forum
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
