import { Layout } from "@/components/layout"

export default function TermsPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: May 4, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to AI Superstore. These Terms of Service ("Terms") govern your use of our website, products, and
              services ("Services"). By using our Services, you agree to these Terms. If you disagree with any part of
              the terms, you may not access the Services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">2. Use of Services</h2>
            <p className="text-gray-600 mb-4">
              Our Services provide access to various AI tools on a pay-as-you-go basis. You may use these tools for
              personal, educational, or commercial purposes, subject to the limitations and restrictions outlined in
              these Terms.
            </p>
            <p className="text-gray-600 mb-4">
              You are responsible for maintaining the confidentiality of your account and password and for restricting
              access to your computer. You agree to accept responsibility for all activities that occur under your
              account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">3. Payment and Billing</h2>
            <p className="text-gray-600 mb-4">
              We offer various payment options, including day passes and credit packs. Prices for our Services are
              subject to change without notice. We reserve the right to modify or discontinue the Services without
              notice at any time.
            </p>
            <p className="text-gray-600 mb-4">
              All purchases are final and non-refundable, except as required by law or at our sole discretion.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">4. User Content</h2>
            <p className="text-gray-600 mb-4">
              Our Services may allow you to create, upload, or share content. You retain ownership of any intellectual
              property rights that you hold in that content. By uploading or sharing content, you grant us a worldwide,
              royalty-free license to use, reproduce, modify, and distribute that content in connection with providing
              our Services.
            </p>
            <p className="text-gray-600 mb-4">
              You are solely responsible for the content you create using our Services and must ensure it does not
              violate any laws or infringe on the rights of others.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">5. Prohibited Uses</h2>
            <p className="text-gray-600 mb-4">
              You may not use our Services for any illegal or unauthorized purpose. You must not, in the use of the
              Services, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>
            <p className="text-gray-600 mb-4">
              Prohibited uses include but are not limited to: creating deepfakes without consent, generating harmful or
              misleading content, attempting to bypass our security measures, or using our Services to develop competing
              products.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall AI Superstore, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">7. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">8. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@aisuperstore.com" className="text-primary hover:underline">
                legal@aisuperstore.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
