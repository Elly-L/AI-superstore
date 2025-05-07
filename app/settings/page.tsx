import { Layout } from "@/components/layout"
import { SettingsContent } from "@/components/settings-content"
import { ProtectedRoute } from "@/components/protected-route"

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <Layout>
        <SettingsContent />
      </Layout>
    </ProtectedRoute>
  )
}
