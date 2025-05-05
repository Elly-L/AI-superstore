import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Lock } from "lucide-react"

export default function Checkout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              AI Superstore
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="text-gray-500 mt-1">Complete your purchase to start using AI tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Choose Your Pass</CardTitle>
                  <CardDescription>Select the option that works best for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="3-day" className="space-y-4">
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="1-day" id="1-day" />
                      <Label htmlFor="1-day" className="flex-1 cursor-pointer">
                        <div className="font-medium">1-Day Pass</div>
                        <div className="text-sm text-gray-500">Access to selected tools for 24 hours</div>
                      </Label>
                      <div className="font-bold">$1.99</div>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer">
                      <RadioGroupItem value="3-day" id="3-day" />
                      <Label htmlFor="3-day" className="flex-1 cursor-pointer">
                        <div className="font-medium">3-Day Pass</div>
                        <div className="text-sm text-gray-500">Access to ALL tools for 72 hours</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">Most Popular</div>
                      </Label>
                      <div className="font-bold">$4.99</div>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="credits" id="credits" />
                      <Label htmlFor="credits" className="flex-1 cursor-pointer">
                        <div className="font-medium">50 Credits</div>
                        <div className="text-sm text-gray-500">Pay per use, credits never expire</div>
                      </Label>
                      <div className="font-bold">$9.99</div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                  <CardDescription>Enter your payment details securely</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="save-card" />
                    <Label htmlFor="save-card" className="text-sm">
                      Save card for future purchases
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">3-Day Pass</span>
                    <span>$4.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tax</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$4.99</span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-500 mt-4">
                    <div className="font-medium mb-1">What's included:</div>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Access to ALL tools for 72 hours</li>
                      <li>Generate up to 50 images</li>
                      <li>30 minutes of voice synthesis</li>
                      <li>Unlimited code assistance</li>
                      <li>Access to all workflow templates</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <div className="flex items-center space-x-2 w-full">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-xs">
                      I agree to the{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  <Button className="w-full">
                    <Lock className="h-4 w-4 mr-2" /> Complete Purchase
                  </Button>
                  <div className="text-xs text-center text-gray-500">
                    Secured by Stripe. Your payment information is encrypted.
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <p className="text-sm text-gray-500">© 2025 AI Superstore. All rights reserved. A product of Eltek.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
