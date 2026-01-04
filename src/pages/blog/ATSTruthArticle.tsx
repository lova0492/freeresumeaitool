import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

interface ATSTruthArticleProps {
  onBack: () => void;
}

export default function ATSTruthArticle({ onBack }: ATSTruthArticleProps) {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="mb-8">
            <Badge className="mb-4">ATS Insights</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              The Truth About ATS Systems: What Recruiters Won't Tell You
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Sarah Johnson
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 15, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-8">
            <img
              src="/assets/generated/blog-header.dim_1000x300.png"
              alt="ATS Systems Truth"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction: The ATS Reality Check</h2>
              <p>
                You've spent hours perfecting your resume. Every word is carefully chosen, your experience is presented flawlessly, 
                and you're confident this is the document that will land you your dream job. You hit submit, and then... silence.
              </p>
              <p>
                Here's what likely happened: Your resume never reached human eyes. An Applicant Tracking System (ATS) filtered it 
                out before any recruiter could see your qualifications. This isn't a conspiracy theory—it's the reality of modern 
                hiring. Studies show that over 75% of resumes are rejected by ATS before a human reviews them.
              </p>
              <p>
                But here's the truth recruiters rarely share: ATS systems aren't the enemy. They're tools, and like any tool, 
                understanding how they work gives you a massive advantage. This article reveals exactly how ATS systems operate, 
                debunks common myths, and provides actionable strategies to ensure your resume makes it through.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">How ATS Really Works: Behind the Curtain</h2>
              <p>
                Applicant Tracking Systems are software applications that help companies manage their recruitment process. 
                Think of them as sophisticated filters that organize, scan, and rank resumes based on specific criteria.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">The Three-Stage Process</h3>
              
              <Card className="p-6 mb-4 bg-muted/50">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Parsing and Data Extraction</h4>
                    <p className="text-sm text-muted-foreground">
                      When you submit your resume, the ATS first attempts to parse it—breaking down the document into 
                      structured data fields like name, contact information, work experience, education, and skills. This is 
                      where formatting matters most. Complex layouts, tables, headers, and graphics can confuse the parser, 
                      causing it to misread or skip critical information.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-muted/50">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Keyword Matching and Scoring</h4>
                    <p className="text-sm text-muted-foreground">
                      After parsing, the ATS compares your resume against the job description. It looks for specific keywords, 
                      skills, qualifications, and experience levels. Each match increases your score. However, it's not just 
                      about stuffing keywords—context matters. The system checks if keywords appear in relevant sections and 
                      whether they're used appropriately.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-muted/50">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ranking and Filtering</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your score, the ATS ranks you against other applicants. Recruiters typically set a threshold—
                      only candidates above a certain score make it to human review. This threshold varies by company and role, 
                      but generally, you need to match 70-80% of the key requirements to have a fighting chance.
                    </p>
                  </div>
                </div>
              </Card>

              <p className="mt-4">
                Understanding this process is crucial because it reveals where most candidates fail: not in their qualifications, 
                but in how they present them. Your resume might be excellent, but if the ATS can't parse it correctly or doesn't 
                find the right keywords, you're out of the running before you've even started.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Myths Recruiters Don't Tell You</h2>
              <p className="mb-6">
                The internet is full of advice about beating ATS systems, but much of it is outdated, misleading, or flat-out 
                wrong. Let's debunk the most persistent myths with evidence-based facts.
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #1: "Use White Text to Hide Keywords"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Truth:</strong> This tactic is not only ineffective but can get you blacklisted. Modern ATS 
                        systems easily detect hidden text, and many companies have policies against keyword stuffing. When caught, 
                        you're automatically disqualified—not just from that role, but potentially from future opportunities with 
                        that company.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Naturally incorporate relevant keywords from the job description 
                        throughout your resume in context. If the job requires "project management," mention specific projects 
                        you've managed rather than just listing the term.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #2: "Creative Resumes Stand Out to ATS"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Truth:</strong> While creative resumes might impress humans, they're ATS kryptonite. Graphics, 
                        unusual fonts, text boxes, and complex formatting confuse parsing algorithms. Your beautifully designed 
                        resume might be rendered as gibberish in the ATS database.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Save creativity for your portfolio or personal website. For ATS 
                        submission, stick to clean, simple formatting with standard fonts (Arial, Calibri, Times New Roman), 
                        clear section headings, and bullet points. You can still make it visually appealing without sacrificing 
                        parsability.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #3: "PDFs Are Always Better Than Word Documents"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Truth:</strong> This depends on the ATS. While modern systems handle PDFs well, some older 
                        systems struggle with them, especially if the PDF contains images or complex formatting. Conversely, 
                        Word documents (.docx) are universally parsable but can have formatting issues across different versions.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Check the job posting for file format preferences. If none is 
                        specified, .docx is generally the safest bet. If you use PDF, ensure it's text-based (not a scanned 
                        image) and test it by copying and pasting the content—if the text comes out garbled, the ATS will 
                        struggle too.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #4: "More Keywords = Higher Ranking"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Truth:</strong> Keyword density matters, but context is king. Simply repeating keywords 
                        without substance can actually hurt your score. ATS systems are increasingly sophisticated—they analyze 
                        context, check for relevant experience, and can detect when keywords are used inappropriately.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Focus on quality over quantity. Use keywords naturally in 
                        descriptions of your actual work. Instead of listing "Python, Java, C++," describe projects where you 
                        "developed Python scripts to automate data processing" or "built Java applications for enterprise clients."
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #5: "ATS Automatically Rejects Resumes with Gaps"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Truth:</strong> ATS systems don't automatically reject resumes with employment gaps. They 
                        parse dates and flag gaps, but the decision to reject is made by human recruiters based on company policy. 
                        What matters more is how you address those gaps.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Be honest about gaps but frame them positively. If you took time 
                        for education, caregiving, or freelance work, include it. Use a functional or hybrid resume format that 
                        emphasizes skills over chronology if gaps are significant. The key is ensuring the ATS can still parse 
                        your dates correctly.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Tips to Optimize Your Resume for ATS</h2>
              <p className="mb-6">
                Now that you understand how ATS works and what doesn't work, let's focus on proven strategies that actually 
                improve your chances of getting past the initial screening.
              </p>

              <div className="space-y-4">
                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Mirror the Job Description Language</h3>
                      <p className="text-sm text-muted-foreground">
                        Carefully read the job posting and identify key terms, required skills, and qualifications. Use the 
                        exact same language in your resume. If the job says "customer relationship management," don't write 
                        "client relations"—use their exact terminology. This isn't about being dishonest; it's about speaking 
                        the same language as the ATS and the hiring team.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Use Standard Section Headings</h3>
                      <p className="text-sm text-muted-foreground">
                        Stick to conventional section titles that ATS systems recognize: "Work Experience," "Education," 
                        "Skills," "Certifications." Avoid creative alternatives like "My Journey" or "What I Bring to the Table." 
                        The ATS is programmed to look for standard headings, and using unconventional ones can cause it to 
                        misclassify or skip entire sections.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Include Both Acronyms and Full Terms</h3>
                      <p className="text-sm text-muted-foreground">
                        Different companies use different terminology. Some search for "Search Engine Optimization," others for 
                        "SEO." To cover all bases, include both: "Search Engine Optimization (SEO)" on first mention. This 
                        ensures you're found regardless of which term the recruiter searches for.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Quantify Your Achievements</h3>
                      <p className="text-sm text-muted-foreground">
                        Numbers stand out to both ATS and human reviewers. Instead of "managed a team," write "managed a team 
                        of 12 developers." Instead of "increased sales," write "increased sales by 35% over 6 months." 
                        Quantifiable achievements provide context and make your accomplishments more credible and searchable.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">5. Optimize Your Skills Section</h3>
                      <p className="text-sm text-muted-foreground">
                        Create a dedicated "Skills" section with a clear list of relevant technical and soft skills. This is 
                        prime real estate for keywords. Organize skills by category (e.g., "Technical Skills," "Languages," 
                        "Certifications") to make them easy for the ATS to parse. Include both hard skills (software, tools, 
                        methodologies) and relevant soft skills (leadership, communication, problem-solving).
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">6. Keep Formatting Simple and Consistent</h3>
                      <p className="text-sm text-muted-foreground">
                        Use a single-column layout, standard bullet points, and consistent formatting throughout. Avoid tables, 
                        text boxes, headers, footers, and images. Use standard fonts (10-12pt) and ensure adequate white space. 
                        Bold and italics are fine for emphasis, but use them sparingly. The goal is maximum readability for 
                        both machines and humans.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">7. Tailor Each Resume to the Specific Job</h3>
                      <p className="text-sm text-muted-foreground">
                        This is the most important tip: never send the same resume to every job. Customize your resume for each 
                        application by emphasizing the most relevant experience and skills for that specific role. This doesn't 
                        mean rewriting everything—it means reordering, emphasizing, and adjusting language to match what that 
                        particular employer is seeking.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Critical Mistakes to Avoid</h2>
              <p className="mb-6">
                Even with the best intentions, certain mistakes can sabotage your ATS success. Here are the most common errors 
                and how to avoid them.
              </p>

              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Using Headers and Footers for Important Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Many ATS systems ignore content in headers and footers. If your contact information is only in the 
                        header, the ATS might not capture it. Always include your name, phone number, email, and location in 
                        the main body of the document, preferably at the top.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Inconsistent Date Formatting</h3>
                      <p className="text-sm text-muted-foreground">
                        Use a consistent date format throughout your resume (e.g., "January 2020 - March 2023" or "01/2020 - 
                        03/2023"). Mixing formats confuses the ATS and can lead to parsing errors. Also, clearly indicate if 
                        you're currently employed with "Present" rather than leaving the end date blank.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Overusing Special Characters and Symbols</h3>
                      <p className="text-sm text-muted-foreground">
                        Fancy bullets, symbols, and special characters can cause parsing issues. Stick to standard bullet points 
                        (•, -, or *) and avoid symbols like ©, ®, or decorative elements. If the ATS can't interpret a character, 
                        it might skip that entire line or section.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Submitting a Resume as an Image or Scanned PDF</h3>
                      <p className="text-sm text-muted-foreground">
                        If your resume is essentially an image (scanned document or PDF created from an image), the ATS cannot 
                        read it. Always submit text-based documents. Test by trying to select and copy text from your PDF—if 
                        you can't, neither can the ATS.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Ignoring the Job Description</h3>
                      <p className="text-sm text-muted-foreground">
                        The biggest mistake is not tailoring your resume to the specific job. Generic resumes rarely score high 
                        enough to pass ATS screening. Take the time to analyze the job description, identify key requirements, 
                        and adjust your resume accordingly. This single step can dramatically improve your success rate.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Conclusion: Working With ATS, Not Against It</h2>
              <p>
                Applicant Tracking Systems aren't designed to keep you out—they're designed to help recruiters manage high 
                volumes of applications efficiently. The key to success isn't "beating" the ATS; it's understanding how it works 
                and optimizing your resume accordingly.
              </p>
              <p>
                Remember these core principles:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Keep formatting simple and consistent</li>
                <li>Use keywords naturally and in context</li>
                <li>Mirror the language of the job description</li>
                <li>Tailor each resume to the specific role</li>
                <li>Focus on substance over style</li>
                <li>Test your resume before submitting</li>
              </ul>
              <p>
                The truth is, ATS systems are just the first filter. Your ultimate goal is to create a resume that passes ATS 
                screening AND impresses human recruiters. By following the strategies outlined in this guide, you'll significantly 
                improve your chances of making it to that crucial human review stage.
              </p>
              <p>
                Don't let ATS anxiety paralyze you. With the right approach, you can create a resume that satisfies both the 
                algorithm and the hiring manager. Your qualifications matter—now you know how to present them effectively.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="rounded-lg bg-primary/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Resume?</h2>
              <p className="mb-6">
                Use our free AI-powered tools to ensure your resume is ATS-friendly and optimized for success. Our platform 
                helps you identify keyword gaps, check ATS compatibility, and create professional resumes that get noticed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={onBack}>
                  Explore Our AI Tools
                </Button>
                <Button size="lg" variant="outline" onClick={onBack}>
                  Check Your Resume Now
                </Button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
