import { Search, Cpu, CheckSquare, AlertTriangle } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

export default function ATSGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Cpu className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Understanding ATS and Job Application Systems</h1>
            <p className="text-xl text-muted-foreground">
              Learn how applicant tracking systems work and optimize your resume for success
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
                Applicant Tracking Systems (ATS) are software applications that help employers manage the recruitment process by automatically screening, sorting, and ranking resumes. Understanding how these systems work is crucial for modern job seekers, as over 90% of large companies and many small to medium-sized businesses use ATS to filter applications before they reach human recruiters.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">How ATS Systems Work</h2>

              <p className="text-lg leading-relaxed mb-6">
                When you submit your resume through an online application portal, the ATS software parses your document to extract relevant information. The system breaks down your resume into structured data fields, including contact information, work experience, education, skills, and qualifications. This parsing process converts your formatted resume into a standardized format that the system can analyze and compare against job requirements.
              </p>

              {/* Ad Slot - In Content */}
              <div className="my-8">
                <AdSlot slot="in-content" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Keyword Matching</h3>
                      <p className="text-muted-foreground text-sm">
                        ATS systems scan for specific keywords and phrases from the job description, ranking candidates based on keyword relevance and frequency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Qualification Screening</h3>
                      <p className="text-muted-foreground text-sm">
                        The system automatically filters candidates based on minimum requirements like years of experience, education level, and required certifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                After parsing, the ATS assigns each resume a score based on how well it matches the job requirements. Recruiters typically review only the highest-scoring resumes, which means your application must be optimized to rank well in the system. The scoring algorithm considers factors like keyword density, relevant experience, education credentials, and how well your qualifications align with the job description.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Resume Parsing and Common Issues</h2>

              <p className="text-lg leading-relaxed mb-6">
                Resume parsing is the process by which ATS software extracts information from your resume. However, this process isn't perfect, and certain formatting choices can cause parsing errors. Complex layouts, tables, text boxes, headers, footers, and graphics often confuse ATS systems, leading to important information being missed or misinterpreted.
              </p>

              <div className="bg-destructive/5 border-l-4 border-destructive p-6 my-8 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Common Parsing Problems</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Special characters and symbols may not be recognized correctly</li>
                      <li>• Creative section headings can prevent proper categorization</li>
                      <li>• Multiple columns can cause text to be read in the wrong order</li>
                      <li>• Images and logos are typically ignored or cause errors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Optimization Strategies for Better ATS Performance</h2>

              <p className="text-lg leading-relaxed mb-6">
                To improve your ATS compatibility, start by using a simple, clean format with standard fonts like Arial, Calibri, or Times New Roman. Save your resume as a .docx or PDF file, as these formats are most reliably parsed by ATS systems. Use standard section headings like "Work Experience," "Education," and "Skills" rather than creative alternatives that the system might not recognize.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Incorporate relevant keywords from the job description naturally throughout your resume. Focus on including both the full term and common abbreviations for technical skills and certifications. For example, include both "Search Engine Optimization" and "SEO" to ensure the system captures either variation. Place the most important keywords in your professional summary and work experience sections, where they carry more weight in ATS scoring algorithms.
              </p>

              <div className="space-y-4 my-8">
                <div className="p-4 border rounded-lg bg-card">
                  <h3 className="font-semibold mb-2">✓ Use standard bullet points (•, -, or *)</h3>
                  <p className="text-sm text-muted-foreground">Simple bullet points are universally recognized by ATS systems</p>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <h3 className="font-semibold mb-2">✓ Include a skills section with relevant keywords</h3>
                  <p className="text-sm text-muted-foreground">A dedicated skills section helps ATS quickly identify your qualifications</p>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <h3 className="font-semibold mb-2">✓ Use full dates (Month Year format)</h3>
                  <p className="text-sm text-muted-foreground">Write "January 2020" instead of "01/20" for better parsing accuracy</p>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <h3 className="font-semibold mb-2">✓ Spell out acronyms on first use</h3>
                  <p className="text-sm text-muted-foreground">Include both full terms and abbreviations to maximize keyword matching</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Testing and Improving ATS Compatibility</h2>

              <p className="text-lg leading-relaxed mb-6">
                Before submitting your resume, test its ATS compatibility using online tools that simulate how ATS systems parse documents. These tools can identify formatting issues, missing keywords, and parsing errors that might prevent your resume from ranking well. Review the parsed output to ensure all your information is captured correctly and appears in the right sections.
              </p>

              <p className="text-lg leading-relaxed">
                Remember that while optimizing for ATS is important, your resume must also appeal to human readers. Strike a balance between ATS optimization and readability by using clear, concise language and maintaining a professional appearance. Once your resume passes the ATS screening, it needs to impress the recruiter or hiring manager who reviews it, so focus on creating a document that serves both purposes effectively.
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
