import { Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 1, 2026
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe in being straightforward about how we handle your information. This privacy policy explains what data we collect, how we use it, and your rights regarding your personal information. We've written this in plain language to make it easy to understand.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect minimal information to provide and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Basic Analytics:</strong> We use analytics tools to understand how visitors use our site, including pages viewed, time spent, and general location (country/region level only).</li>
                <li><strong>Cookies:</strong> Small text files stored on your device that help us remember your preferences and improve your experience.</li>
                <li><strong>User Account Data:</strong> If you create an account, we store your name, email, and the resumes you create using our tools.</li>
                <li><strong>Technical Information:</strong> Browser type, device information, and IP address for security and performance purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and maintain our resume building and career tools</li>
                <li>Improve our content and user experience based on usage patterns</li>
                <li>Understand which features are most helpful to our users</li>
                <li>Ensure the security and proper functioning of our platform</li>
                <li>Communicate important updates about our services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties. We do not use your resume content for any purpose other than providing the service to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We work with trusted third-party services to operate our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google AdSense:</strong> We display ads through Google AdSense, which may use cookies to show relevant advertisements. Google's privacy policy applies to their ad services.</li>
                <li><strong>Analytics Providers:</strong> We use analytics services to understand site usage. These services may collect information about your visits to our site and other websites.</li>
                <li><strong>Internet Computer Protocol:</strong> Our platform is built on the Internet Computer blockchain, which provides decentralized authentication and data storage.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These third parties have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies Explained</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small files that websites store on your device. We use them to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Remember your login status and preferences</li>
                <li>Understand how you use our site to make improvements</li>
                <li>Provide relevant content and advertisements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect some features of our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Data Control</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have control over your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> You can view and download your resume data at any time through your account.</li>
                <li><strong>Edit:</strong> You can update your profile information and resume content whenever you want.</li>
                <li><strong>Delete:</strong> You can delete your resumes or close your account by contacting us.</li>
                <li><strong>Opt-Out:</strong> You can opt out of analytics tracking using browser extensions or privacy settings.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to protect your information from unauthorized access, loss, or misuse. Your resume data is stored securely on the Internet Computer blockchain with encryption. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We'll notify you of significant changes by posting a notice on our site or updating the "Last updated" date above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or how we handle your information, please reach out through our contact page. We're here to help and will respond to your privacy concerns promptly.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
