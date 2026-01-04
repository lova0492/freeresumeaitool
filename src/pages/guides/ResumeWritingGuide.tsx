import { FileText, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

export default function ResumeWritingGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume Writing Guide for Modern Job Applications</h1>
            <p className="text-xl text-muted-foreground">
              Master the art of creating professional, ATS-friendly resumes that get results
            </p>
          </div>
        </div>
      </section>

      {/* Ad Slot - Below Header */}
      <AdSlot slot="below-header" />

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Your resume is often the first impression you make on potential employers. In today's competitive job market, creating a resume that stands out while meeting technical requirements is essential. This guide provides comprehensive strategies for writing resumes that pass applicant tracking systems and impress hiring managers.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Essential Resume Structure</h2>

              <p className="text-lg leading-relaxed mb-6">
                A well-structured resume follows a logical flow that makes it easy for both ATS systems and human readers to find key information. Start with your contact information at the top, including your full name, phone number, email address, and LinkedIn profile. Follow this with a professional summary that highlights your key qualifications and career objectives in 2-3 sentences.
              </p>

              {/* Ad Slot - In Content */}
              <div className="my-8">
                <AdSlot slot="in-content" />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                The core sections of your resume should include work experience, education, and skills. List your work experience in reverse chronological order, with your most recent position first. For each role, include the company name, your job title, employment dates, and 3-5 bullet points describing your key responsibilities and achievements. Use action verbs to start each bullet point and quantify your accomplishments whenever possible.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pro Tip</h3>
                    <p className="text-muted-foreground">
                      Use the STAR method (Situation, Task, Action, Result) to structure your achievement bullet points. This approach clearly demonstrates your impact and value to potential employers.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Professional Formatting Best Practices</h2>

              <p className="text-lg leading-relaxed mb-6">
                Formatting plays a crucial role in resume readability and ATS compatibility. Use a clean, professional font like Arial, Calibri, or Times New Roman in 10-12 point size. Maintain consistent spacing throughout your document, with clear section headers that are slightly larger or bold. Avoid using tables, text boxes, headers, footers, or graphics, as these can confuse ATS systems.
              </p>

              {/* Ad Slot - Mid Content */}
              <div className="my-8">
                <AdSlot slot="mid-content" />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Keep your resume to one or two pages maximum. Entry-level candidates should aim for one page, while experienced professionals with 10+ years of experience can extend to two pages. Use bullet points rather than paragraphs to make your content scannable. Ensure adequate white space to prevent your resume from appearing cluttered or overwhelming.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">ATS-Friendly Writing Techniques</h2>

              <p className="text-lg leading-relaxed mb-6">
                Applicant tracking systems scan resumes for specific keywords related to the job description. To optimize your resume for ATS, carefully read the job posting and incorporate relevant keywords naturally throughout your resume. Focus on including technical skills, industry-specific terminology, and required qualifications mentioned in the job description.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Use standard section headings like "Work Experience," "Education," and "Skills" rather than creative alternatives. ATS systems are programmed to recognize these common headers. Spell out acronyms on first use, followed by the acronym in parentheses, to ensure the system captures both versions. For example, write "Search Engine Optimization (SEO)" rather than just "SEO."
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Tailoring for Different Experience Levels</h2>

              <div className="space-y-6 my-8">
                <div className="border rounded-lg p-6 bg-card">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Entry-Level Candidates</h3>
                      <p className="text-muted-foreground">
                        Focus on education, relevant coursework, internships, volunteer work, and transferable skills. Highlight academic projects, leadership roles in student organizations, and any part-time work that demonstrates responsibility and work ethic.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-card">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mid-Level Professionals</h3>
                      <p className="text-muted-foreground">
                        Emphasize career progression, key achievements, and specialized skills. Include metrics that demonstrate your impact, such as revenue growth, cost savings, or process improvements. Highlight leadership experience and cross-functional collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-card">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Senior-Level Executives</h3>
                      <p className="text-muted-foreground">
                        Focus on strategic leadership, organizational impact, and high-level accomplishments. Include board memberships, speaking engagements, and industry recognition. Emphasize your ability to drive business transformation and lead large teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Common Resume Mistakes to Avoid</h2>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-3 p-4 bg-destructive/5 border-l-4 border-destructive rounded-r-lg">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Typos and grammatical errors:</strong> Always proofread multiple times and have someone else review your resume before submitting.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-destructive/5 border-l-4 border-destructive rounded-r-lg">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Generic content:</strong> Customize your resume for each application rather than using a one-size-fits-all approach.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-destructive/5 border-l-4 border-destructive rounded-r-lg">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Outdated information:</strong> Remove irrelevant work experience from more than 10-15 years ago unless it's directly relevant to the position.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-destructive/5 border-l-4 border-destructive rounded-r-lg">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Unprofessional email addresses:</strong> Use a professional email address that includes your name rather than nicknames or outdated handles.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Creating an effective resume requires attention to detail, strategic thinking, and continuous refinement. By following these guidelines and tailoring your resume to each opportunity, you'll significantly increase your chances of landing interviews and advancing your career. Remember that your resume is a living document that should evolve as you gain new experiences and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot - Above Footer */}
      <AdSlot slot="above-footer" />
    </div>
  );
}
