"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Layout } from "@/components/layout"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const whatsappMessage = `New inquiry from ${formData.firstName} ${formData.lastName} (${formData.email})%0A%0ASubject: ${formData.subject}%0A%0A${formData.message}`

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/254719338534?text=${whatsappMessage}`, "_blank")

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need help? We're here for you. Reach out to our team and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide as much detail as possible..."
                      className="min-h-[150px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark flex items-center gap-2 justify-center"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-gray-600 text-sm">Juja, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:ellylog.el@proton.me" className="text-primary hover:underline">
                        ellylog.el@proton.me
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+254719338534" className="text-primary hover:underline">
                        +254 719 338 534
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="https://wa.me/254719338534"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Message us on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">How quickly will I get a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during business days. For urgent support issues,
                please use WhatsApp for faster assistance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Do you offer educational discounts?</h3>
              <p className="text-gray-600">
                Yes! We offer special pricing for educational institutions and students. Please contact us with your
                academic email for more information.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Can I request a new AI tool?</h3>
              <p className="text-gray-600">
                We're always looking to expand our catalog. If there's a specific AI tool you'd like to see on our
                platform, please let us know.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer refunds for unused credits and day passes within 7 days of purchase. Please contact our support
                team for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
