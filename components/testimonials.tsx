import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <Card className="text-left border-primary/10 hover:border-primary/30 transition-all">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
              IK
            </div>
            <div>
              <CardTitle className="text-base">Ian Kahuria</CardTitle>
              <CardDescription>Computer Science Major</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            "I only needed GitHub Copilot for my weekend hackathon. The 3-day pass saved me from paying for a full
            month. Brilliant service that understands student budgets!"
          </p>
        </CardContent>
      </Card>

      <Card className="text-left border-primary/10 hover:border-primary/30 transition-all">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold">
              KM
            </div>
            <div>
              <CardTitle className="text-base">Kimberly Maina</CardTitle>
              <CardDescription>Journalism Student</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            "Generated images for my media project and converted interviews to text, all in one place. AI Superstore
            saved me hours of work and helped me meet my deadline!"
          </p>
        </CardContent>
      </Card>

      <Card className="text-left border-primary/10 hover:border-primary/30 transition-all">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold">
              CM
            </div>
            <div>
              <CardTitle className="text-base">Chris Munene</CardTitle>
              <CardDescription>Data Engineering Student</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            "Used the data analysis tools for my final project. The day pass was perfect - no need to commit to
            expensive subscriptions when I only needed it for a week."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
