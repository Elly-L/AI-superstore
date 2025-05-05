import { Layout } from "@/components/layout"
import { ToolTabs } from "@/components/tool-tabs"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"

export default function ToolsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AI Tools Marketplace</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Discover and use the latest AI tools without expensive subscriptions. Pay only for what you need, when you
          need it.
        </p>

        <ErrorBoundary>
          <Suspense fallback={<div>Loading tools...</div>}>
            <ToolTabs />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Layout>
  )
}
