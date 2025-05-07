import { SignupForm } from "@/components/signup-form"
import { Layout } from "@/components/layout"

export default function SignupPage() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Create an account</h1>
          <SignupForm />
        </div>
      </div>
    </Layout>
  )
}
