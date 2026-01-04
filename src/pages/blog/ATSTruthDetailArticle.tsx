import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface ATSTruthDetailArticleProps {
  onBack: () => void;
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function ATSTruthDetailArticle({ onBack, onNavigateToBlogPost }: ATSTruthDetailArticleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relatedArticles = [
    {
      id: 'ats-formatting-rules',
      title: 'ATS-Friendly Formatting: The Complete Checklist',
      excerpt: 'Your resume content might be perfect, but poor formatting can get you rejected instantly.',
      category: 'ATS Insights',
      readTime: '6 min',
    },
    {
      id: 'keywords-that-work',
      title: 'Resume Keywords That Actually Get You Hired',
      excerpt: 'Not all keywords are created equal. Discover which terms recruiters and ATS systems prioritize.',
      category: 'Resume Writing',
      readTime: '7 min',
    },
    {
      id: 'ai-resume-mistakes',
      title: '5 Critical Mistakes When Using AI Resume Builders',
      excerpt: 'AI tools can transform your resume, but only if you avoid these common pitfalls.',
      category: 'AI Tools',
      readTime: '8 min',
    },
  ];

  const handleRelatedArticleClick = (articleId: string) => {
    if (onNavigateToBlogPost) {
      onNavigateToBlogPost(articleId);
    }
  };

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-6">
            <Badge className="mb-4">ATS Insights</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              The Truth About ATS Systems
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Sarah Johnson
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 15, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Introduction */}
            <section className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                If you've applied to jobs online, your resume has likely been screened by an Applicant Tracking System (ATS) before any human ever saw it. These systems are now used by over 98% of Fortune 500 companies and countless smaller organizations. Yet most job seekers don't truly understand how they work—or what really matters when your resume gets scanned.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This article cuts through the myths and marketing hype to reveal the reality of ATS systems, based on research, recruiter insights, and technical documentation. No guarantees, no exaggerations—just practical information to help you make informed decisions about your resume.
              </p>
            </section>

            {/* What Are ATS Systems */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">What Are ATS Systems and Why Do They Exist?</h2>
              <p className="leading-relaxed text-muted-foreground">
                An Applicant Tracking System is software that helps companies manage their hiring process. Think of it as a database that stores, organizes, and filters job applications. When you submit your resume online, it typically goes into an ATS first.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Companies use ATS for practical reasons: a single job posting can generate hundreds or thousands of applications. Without automation, recruiters would spend weeks just opening files and organizing candidates. The ATS handles the initial sorting, allowing recruiters to focus on qualified candidates.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Popular ATS platforms include Workday, Greenhouse, Lever, Taleo, and iCIMS. Each has different features, but they all serve the same basic purpose: making hiring more efficient.
              </p>
            </section>

            {/* How ATS Really Works */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">How ATS Really Works Behind the Scenes</h2>
              <p className="leading-relaxed text-muted-foreground">
                Here's what actually happens when you submit your resume through an ATS:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">1. Parsing and Data Extraction</h3>
                  <p className="text-sm text-muted-foreground">
                    The ATS attempts to read your resume and extract key information: your name, contact details, work history, education, and skills. It converts your formatted document into structured data fields in its database.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">2. Keyword Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    The system compares your resume content against the job description. It looks for specific terms, skills, job titles, and qualifications that the employer specified as important.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">3. Ranking and Filtering</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on the matches found, the ATS may assign a relevance score or ranking. Recruiters can then filter candidates by these scores, specific keywords, years of experience, education level, or other criteria.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">4. Human Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Contrary to popular belief, ATS systems don't automatically reject resumes. They organize and rank them. A human recruiter still makes the final decision about who moves forward in the hiring process.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Misconceptions */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Common Misconceptions About ATS</h2>
              <p className="leading-relaxed text-muted-foreground">
                Let's address some widespread myths that cause unnecessary anxiety and poor resume decisions:
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Myth 1: "ATS automatically rejects 75% of resumes"</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> ATS systems don't reject resumes—they organize them. That "75% rejection" statistic refers to resumes that recruiters don't select after reviewing the ATS results. The system itself is just a database and search tool. Poor resume content, not the ATS, is usually the real problem.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Myth 2: "You need to stuff your resume with keywords"</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> Keyword stuffing makes your resume unreadable for humans and doesn't fool modern ATS. Instead, naturally incorporate relevant terms from the job description into your actual work experience and skills. If you don't have the required skills, adding the words won't help.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Myth 3: "Creative formatting will get you rejected"</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> Modern ATS can handle most standard formatting. The issue isn't creativity—it's readability. Tables, text boxes, headers/footers, and images can confuse parsing. Stick to standard sections with clear headings, and your resume will parse correctly while still looking professional.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Myth 4: "ATS can't read PDF files"</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> Most modern ATS can parse PDFs just fine, especially if they're created from Word or similar programs (not scanned images). However, some older systems prefer .docx files. When in doubt, check the application instructions or use .docx for maximum compatibility.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Myth 5: "You need a different resume for every single job"</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> You should tailor your resume to match the job requirements, but this doesn't mean rewriting everything from scratch. Focus on adjusting your summary, highlighting relevant experience, and ensuring key skills from the job description appear naturally in your content.
                  </p>
                </div>
              </div>
            </section>

            {/* Read More Section - Collapsible */}
            <div className="my-8">
              <Button
                variant="outline"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    Read More: Practical Tips & Common Mistakes
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <div className="space-y-8">
                {/* Practical Tips */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Practical Tips to Optimize for ATS</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Here are evidence-based strategies that actually improve your chances:
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Use Standard Section Headings</h3>
                      <p className="text-sm text-muted-foreground">
                        Stick to conventional headings like "Work Experience," "Education," "Skills," and "Certifications." Creative titles like "My Journey" or "What I Bring to the Table" confuse the parser.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Match Job Description Language</h3>
                      <p className="text-sm text-muted-foreground">
                        If the job posting says "project management," use that exact phrase rather than "managed projects." ATS search for specific terms, and exact matches rank higher.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Include Both Acronyms and Full Terms</h3>
                      <p className="text-sm text-muted-foreground">
                        Write "Search Engine Optimization (SEO)" instead of just "SEO." Different recruiters search different ways, and this covers both.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Use Simple, Clean Formatting</h3>
                      <p className="text-sm text-muted-foreground">
                        Standard fonts (Arial, Calibri, Times New Roman), clear section breaks, and bullet points work best. Avoid text boxes, tables for layout, and graphics.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Quantify Your Achievements</h3>
                      <p className="text-sm text-muted-foreground">
                        Numbers stand out to both ATS and humans. "Increased sales by 35%" is more searchable and impressive than "Improved sales performance."
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Keep Contact Information Simple</h3>
                      <p className="text-sm text-muted-foreground">
                        Put your name, phone, email, and LinkedIn at the top in plain text. Don't hide contact details in headers or footers where some ATS might miss them.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Critical Mistakes */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Critical Mistakes to Avoid</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    These common errors can cause parsing problems or make your resume less searchable:
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Using Images or Graphics for Text</h3>
                      <p className="text-sm text-muted-foreground">
                        ATS can't read text embedded in images. If your name or job titles are in graphic form, the system won't capture that information.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Submitting Scanned PDFs</h3>
                      <p className="text-sm text-muted-foreground">
                        A scanned resume is just an image file. The ATS can't extract any data from it. Always submit digitally-created documents.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Unusual File Names</h3>
                      <p className="text-sm text-muted-foreground">
                        Name your file clearly: "John_Smith_Resume.pdf" not "final_version_3_updated.pdf." Some systems use file names for organization.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Ignoring Job Requirements</h3>
                      <p className="text-sm text-muted-foreground">
                        If the job requires 5 years of experience and you have 2, the ATS will surface that gap when recruiters filter. Be honest and focus on jobs where you meet the core requirements.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Overusing Buzzwords Without Context</h3>
                      <p className="text-sm text-muted-foreground">
                        Listing "leadership, teamwork, communication" without examples doesn't help. Show these skills through your actual accomplishments and responsibilities.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Real Examples */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold">How Resumes Are Actually Filtered</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Let's look at a realistic example of how an ATS helps recruiters filter candidates:
                  </p>
                  <div className="rounded-lg border bg-card p-6">
                    <h3 className="mb-3 font-semibold">Job Posting: Senior Software Engineer</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Requirements: 5+ years experience, Python, React, AWS, Bachelor's degree in Computer Science
                    </p>
                    <div className="space-y-3">
                      <div className="rounded bg-muted p-3">
                        <p className="mb-1 text-sm font-medium">Recruiter searches ATS for:</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                          <li>"Python" AND "React" AND "AWS"</li>
                          <li>Minimum 5 years experience</li>
                          <li>Bachelor's degree or higher</li>
                        </ul>
                      </div>
                      <div className="rounded bg-muted p-3">
                        <p className="mb-1 text-sm font-medium">ATS returns:</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                          <li>47 candidates match all criteria</li>
                          <li>123 candidates match 2 out of 3 technical skills</li>
                          <li>89 candidates have less than 5 years experience</li>
                        </ul>
                      </div>
                      <div className="rounded bg-muted p-3">
                        <p className="mb-1 text-sm font-medium">Recruiter reviews:</p>
                        <p className="text-sm text-muted-foreground">
                          The 47 exact matches first, then expands to partial matches if needed. Your resume needs to clearly show you meet the requirements to appear in that first group.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Final Takeaway */}
            <section className="mt-12 rounded-lg bg-primary/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Final Takeaway</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                ATS systems are tools that help recruiters manage large volumes of applications—they're not mysterious gatekeepers designed to reject you. The key to "beating" an ATS isn't gaming the system with tricks; it's creating a clear, well-organized resume that accurately represents your qualifications and matches the job requirements.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Focus on these fundamentals: use standard formatting, include relevant keywords naturally, match your experience to the job description, and make your accomplishments easy to find and understand. If you're qualified for the role and your resume clearly shows it, the ATS will help you get noticed, not rejected.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Remember: the ATS is just the first step. Even if your resume ranks highly, you still need to impress the human recruiter and hiring manager. A resume optimized for ATS but lacking substance won't get you hired. Balance technical optimization with genuine, compelling content about your skills and achievements.
              </p>
            </section>

            {/* Call to Action */}
            <section className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Ready to Optimize Your Resume?</h3>
              <p className="mb-4 text-muted-foreground">
                Explore our free AI-powered tools to help you create an ATS-friendly resume that stands out to both systems and recruiters.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Try Resume Builder</Button>
                <Button variant="outline">Check ATS Compatibility</Button>
                <Button variant="outline">Optimize Keywords</Button>
              </div>
            </section>
          </div>
        </article>

        <Separator className="my-12" />

        {/* Related Articles */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <Card key={article.id} className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold">{article.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 font-semibold text-primary hover:bg-transparent"
                      onClick={() => handleRelatedArticleClick(article.id)}
                    >
                      Read <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
