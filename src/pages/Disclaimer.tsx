import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">
            <AlertTriangle className="h-8 w-8 text-amber-500" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Disclaimer</h1>
          <p className="text-lg text-muted-foreground">
            Important information about using our platform
          </p>
        </div>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Please read this disclaimer carefully before using our services. By using this website, you acknowledge and agree to these terms.
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Informational Purpose Only</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, tools, and resources provided on this website are for informational and educational purposes only. While we strive to provide accurate and helpful information about resume building, career development, and AI tools, we make no guarantees about the completeness, reliability, or accuracy of this information.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The resume tools, templates, and suggestions provided are meant to assist you in your job search, but they do not guarantee employment or interview success. Your individual results will vary based on many factors including your qualifications, experience, and the job market.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Not Professional Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information and tools on this website do not constitute professional career counseling, legal advice, or employment consulting. We are not career counselors, lawyers, or certified professional resume writers. For specific career guidance tailored to your situation, please consult with qualified professionals in those fields.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our AI-powered tools provide automated suggestions based on common best practices, but they cannot replace human judgment or professional expertise. Always review and customize any AI-generated content to ensure it accurately represents your experience and qualifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Tool Updates and Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The AI tools and third-party services we review are constantly evolving. Features, pricing, and capabilities may change without notice. While we make reasonable efforts to keep our reviews and information current, we cannot guarantee that all details are up-to-date at the time you read them.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We recommend verifying important information directly with the tool providers before making decisions based on our reviews. Tool performance and results may vary based on individual use cases and circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">External Links and Third-Party Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to external websites and third-party tools that are not under our control. We are not responsible for the content, privacy practices, or availability of these external sites. The inclusion of any link does not imply our endorsement of the site or its content.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                When you click on external links, you leave our website and are subject to the terms and privacy policies of those third-party sites. We encourage you to review their policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Affiliate Relationships</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some links on our website may be affiliate links, meaning we may earn a commission if you make a purchase through these links at no additional cost to you. These affiliate relationships do not influence our reviews or recommendations, which are based on our honest assessment of the tools.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We only recommend tools and services that we believe provide genuine value to our users. Our primary goal is to help you find the best free AI tools for your resume and career needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">No Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website and all its content are provided "as is" without any warranties, express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>The website will be available at all times or free from errors</li>
                <li>The information provided is complete, accurate, or current</li>
                <li>The tools will meet your specific requirements or expectations</li>
                <li>Any defects or errors will be corrected</li>
                <li>The website or its servers are free from viruses or harmful components</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of this website or reliance on its content. This includes, but is not limited to, damages for lost employment opportunities, data loss, or business interruption.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You use this website and its tools at your own risk. We are not responsible for any decisions you make based on the information or tools provided here.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Verifying the accuracy of your resume content before submitting it to employers</li>
                <li>Ensuring your resume complies with applicable laws and regulations</li>
                <li>Protecting your account credentials and personal information</li>
                <li>Using the tools and services in accordance with our Terms of Use</li>
                <li>Making your own informed decisions about your career and job applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes your acceptance of the updated disclaimer.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If you have questions about this disclaimer, please contact us through our contact page. We're happy to clarify any points or address your concerns.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
