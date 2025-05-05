import { Layout } from "@/components/layout"

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-4">Last Updated: May 4, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              At AI Superstore, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect several types of information from and about users of our Services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Personal identifiers such as name, email address, and billing information</li>
              <li>Usage data about how you interact with our Services</li>
              <li>Content you create, upload, or generate using our AI tools</li>
              <li>Technical data such as IP address, browser type, and device information</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Service providers who perform services on our behalf</li>
              <li>Partners with whom we offer co-branded services or products</li>
              <li>Law enforcement or other government agencies, as required by law</li>
            </ul>
            <p className="text-gray-600 mb-4">We do not sell your personal information to third parties.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify or update your personal data</li>
              <li>The right to erase your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to track activity on our Services and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@aisuperstore.com" className="text-primary hover:underline">
                privacy@aisuperstore.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
