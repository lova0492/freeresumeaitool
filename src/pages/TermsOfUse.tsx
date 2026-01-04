import { FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Terms of Use</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 1, 2026
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for using our AI-powered resume builder and career platform. These Terms of Use outline the rules and guidelines for using our website and services. By accessing or using our platform, you agree to be bound by these terms. If you don't agree with any part of these terms, please don't use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We've written these terms in plain English to make them easy to understand. If you have any questions, feel free to reach out through our contact page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By creating an account, accessing our website, or using any of our tools and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. These terms apply to all visitors, users, and others who access or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights to Use Our Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We grant you a personal, non-commercial, non-exclusive, non-transferable license to use our platform and tools for creating resumes and accessing career resources. This means you can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Create and edit your own resumes using our tools</li>
                <li>Access and read our educational content and resources</li>
                <li>Use our AI-powered features to improve your resume</li>
                <li>Download and use your created resumes for personal job applications</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Your right to use our services is conditional on your compliance with these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Restrictions on Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To maintain a safe and fair environment for all users, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Copy, reproduce, or redistribute our content, templates, or tools without permission</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Upload or transmit viruses, malware, or any harmful code</li>
                <li>Use automated systems (bots, scrapers) to access our services without permission</li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with or disrupt the operation of our services</li>
                <li>Use our platform to spam, harass, or harm others</li>
                <li>Resell or commercially exploit our services without authorization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Content and Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to the resume content you create using our platform. By using our services, you grant us a limited license to store, process, and display your content solely for the purpose of providing our services to you.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You are responsible for the accuracy and legality of the information you provide. You agree not to include false, misleading, or unlawful content in your resumes. We are not responsible for verifying the accuracy of your resume content.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not claim ownership of your resume content, and we will not use it for any purpose other than providing our services to you, unless you give us explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, templates, software, and design elements, is owned by us or our licensors and is protected by copyright and other intellectual property laws. You may not use, copy, or distribute this content without our written permission, except as explicitly allowed by these terms.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our brand name, logo, and trademarks are our property and may not be used without permission. The resume templates we provide are for your personal use in creating your own resumes, not for redistribution or commercial use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">External Links and Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites, tools, and services that we do not own or control. We are not responsible for the content, privacy practices, or terms of these external sites. When you access third-party services, you do so at your own risk and subject to their terms and conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We may integrate with third-party AI services to provide our features. These integrations are subject to the third parties' terms and availability. We are not liable for any issues arising from third-party service interruptions or changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Account Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you create an account, you are responsible for maintaining the security of your account credentials. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Keep your login information confidential</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Use a secure authentication method when available</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We are not liable for any loss or damage arising from your failure to protect your account credentials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service Availability and Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to keep our services available and running smoothly, but we cannot guarantee uninterrupted access. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Modify, suspend, or discontinue any part of our services at any time</li>
                <li>Update features, tools, and content without prior notice</li>
                <li>Perform maintenance that may temporarily affect service availability</li>
                <li>Change these terms as needed to reflect service updates or legal requirements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We will make reasonable efforts to notify users of significant changes, but we are not obligated to do so.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of your data</li>
                <li>Any interruption or cessation of our services</li>
                <li>Any bugs, viruses, or harmful code transmitted through our services</li>
                <li>Any errors or omissions in content or tools</li>
                <li>Any conduct or content of third parties on our platform</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our total liability to you for all claims arising from your use of our services shall not exceed the amount you paid us in the past twelve months, or $100, whichever is greater.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold us harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Your use of our services</li>
                <li>Your violation of these terms</li>
                <li>Your violation of any rights of another person or entity</li>
                <li>Any content you submit or create using our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, if we believe you have violated these terms or engaged in conduct that we deem inappropriate or harmful.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may stop using our services at any time. If you wish to delete your account and data, please contact us through our contact page.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, your right to use our services will immediately cease. Provisions of these terms that by their nature should survive termination will remain in effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have a dispute with us, we encourage you to contact us first to try to resolve it informally. We're committed to working with you to find a fair solution.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms or your use of our services shall be resolved through good faith negotiation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">General Provisions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A few additional important points:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Entire Agreement:</strong> These terms, along with our Privacy Policy and Disclaimer, constitute the entire agreement between you and us regarding our services.</li>
                <li><strong>Severability:</strong> If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full effect.</li>
                <li><strong>No Waiver:</strong> Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.</li>
                <li><strong>Assignment:</strong> You may not assign or transfer these terms or your account without our written consent. We may assign our rights and obligations without restriction.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Use, please contact us through our contact page. We're here to help clarify any points and address your concerns.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Thank you for using our platform. We're committed to helping you create professional resumes and advance your career!
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
