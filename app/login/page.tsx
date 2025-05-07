import { LoginForm } from "@/components/login-form"
import { Layout } from "@/components/layout"

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Log in to AI Superstore</h1>
          <LoginForm />
        </div>
      </div>
    </Layout>
  )
}
