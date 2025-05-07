import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone } from "lucide-react"
import { Layout } from "@/components/layout"

export default function Checkout() {
  return (
    <Layout>
      <div className="container max-w-4xl py-12">
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
                    <div className="font-bold">
                      $1.99 <span className="text-xs text-gray-500">(KES 259)</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer">
                    <RadioGroupItem value="3-day" id="3-day" />
                    <Label htmlFor="3-day" className="flex-1 cursor-pointer">
                      <div className="font-medium">3-Day Pass</div>
                      <div className="text-sm text-gray-500">Access to ALL tools for 72 hours</div>
                      <div className="text-xs text-blue-600 font-medium mt-1">Most Popular</div>
                    </Label>
                    <div className="font-bold">
                      $4.99 <span className="text-xs text-gray-500">(KES 649)</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="credits" id="credits" />
                    <Label htmlFor="credits" className="flex-1 cursor-pointer">
                      <div className="font-medium">50 Credits</div>
                      <div className="text-sm text-gray-500">Pay per use, credits never expire</div>
                    </Label>
                    <div className="font-bold">
                      $9.99 <span className="text-xs text-gray-500">(KES 1,299)</span>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Enter your M-Pesa phone number</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone-number">M-Pesa Phone Number</Label>
                  <div className="flex">
                    <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0 border-gray-300">
                      <Phone className="h-4 w-4 text-gray-500" />
                    </div>
                    <Input id="phone-number" placeholder="07XX XXX XXX" className="rounded-l-none" />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    You will receive an M-Pesa prompt on this number to complete the payment
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <p className="text-sm text-yellow-800">
                    <strong>How it works:</strong> After clicking "Complete Purchase", you'll receive an M-Pesa prompt
                    on your phone. Enter your PIN to authorize the payment. Your pass will be activated immediately
                    after successful payment.
                  </p>
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
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Total in KES</span>
                  <span>KES 649</span>
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
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                <Button className="w-full">Complete Purchase</Button>
                <div className="text-xs text-center text-gray-500">
                  Secured by M-Pesa. Your payment information is encrypted.
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
