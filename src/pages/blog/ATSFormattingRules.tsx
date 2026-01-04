import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface ATSFormattingRulesProps {
  onBack: () => void;
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function ATSFormattingRules({ onBack, onNavigateToBlogPost }: ATSFormattingRulesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relatedArticles = [
    {
      id: 'ats-truth',
      title: 'The Truth About ATS Systems',
      excerpt: 'Understand how ATS systems work before optimizing your formatting.',
      category: 'ATS Insights',
      readTime: '12 min',
    },
    {
      id: 'keywords-that-work',
      title: 'Resume Keywords That Actually Get You Hired',
      excerpt: 'Combine proper formatting with the right keywords for maximum impact.',
      category: 'Resume Writing',
      readTime: '7 min',
    },
    {
      id: 'ai-resume-mistakes',
      title: '5 Critical Mistakes When Using AI Resume Builders',
      excerpt: 'Avoid formatting issues when using AI to create your resume.',
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
        <Button variant="ghost" onClick={onBack} className="mb-6 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="mb-12">
          <div className="mb-6">
            <Badge className="mb-4">ATS Insights</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              ATS-Friendly Formatting: The Complete Checklist
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Michael Chen
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 3, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                6 min read
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Your resume content might be perfect, but poor formatting can get you rejected before a human ever sees it. ATS systems need to parse your resume correctly to extract your information and match it against job requirements. One formatting mistake can cause your qualifications to be missed entirely.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This comprehensive checklist covers everything you need to know about ATS-friendly formatting. Follow these guidelines to ensure your resume is both readable by ATS systems and visually appealing to human recruiters.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">File Format & Structure</h2>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Use .docx or PDF Format</h3>
                      <p className="text-sm text-muted-foreground">
                        Most modern ATS can parse both .docx and PDF files. PDF is generally safer for preserving formatting, but check the job posting—if it specifies a format, use that.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                    <div>
                      <h3 className="mb-1 font-semibold">Avoid Scanned PDFs or Images</h3>
                      <p className="text-sm text-muted-foreground">
                        Never submit a scanned resume or one where text is embedded in images. ATS cannot read text from images—your resume will appear blank to the system.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Use Standard Page Size</h3>
                      <p className="text-sm text-muted-foreground">
                        Stick to standard letter size (8.5" x 11" in US) or A4 (international). Non-standard sizes can cause parsing errors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Keep It to 1-2 Pages</h3>
                      <p className="text-sm text-muted-foreground">
                        One page for early career (0-5 years), two pages for experienced professionals. More than two pages increases the chance of parsing errors and loses recruiter attention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Font & Text Formatting</h2>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Use Standard, Professional Fonts</h3>
                      <p className="text-sm text-muted-foreground">
                        Safe choices: Arial, Calibri, Helvetica, Times New Roman, Georgia. Font size: 10-12pt for body text, 14-16pt for your name.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                    <div>
                      <h3 className="mb-1 font-semibold">Avoid Decorative or Script Fonts</h3>
                      <p className="text-sm text-muted-foreground">
                        Fancy fonts may look nice but can confuse ATS parsers. Stick to simple, clean fonts that are easy to read.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Use Standard Text Formatting</h3>
                      <p className="text-sm text-muted-foreground">
                        Bold and italics are fine for emphasis. Avoid underlining (can be confused with hyperlinks), excessive capitalization, or unusual spacing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Section Headings & Organization</h2>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Use Standard Section Headings</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        ATS systems look for specific section names. Use these conventional headings:
                      </p>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Work Experience (or Professional Experience, Employment History)</li>
                        <li>Education</li>
                        <li>Skills (or Technical Skills, Core Competencies)</li>
                        <li>Certifications</li>
                        <li>Projects (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                    <div>
                      <h3 className="mb-1 font-semibold">Avoid Creative Section Names</h3>
                      <p className="text-sm text-muted-foreground">
                        Don't use "My Journey," "What I Bring," or other non-standard headings. ATS may not recognize these sections, causing your information to be missed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Use Clear Visual Hierarchy</h3>
                      <p className="text-sm text-muted-foreground">
                        Make section headings larger or bold. Use consistent formatting throughout. Clear structure helps both ATS and human readers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
                    Read More: Complete Formatting Checklist
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Place Contact Info at the Top</h3>
                          <p className="text-sm text-muted-foreground">
                            Put your name, phone, email, and LinkedIn at the very top of your resume in plain text. This should be the first thing ATS sees.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">Don't Hide Contact Info in Headers/Footers</h3>
                          <p className="text-sm text-muted-foreground">
                            Many ATS systems skip headers and footers entirely. If your contact information is there, it won't be captured.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Use Standard Formatting for Contact Details</h3>
                          <p className="text-sm text-muted-foreground">
                            Phone: (555) 123-4567 or 555-123-4567<br />
                            Email: yourname@email.com (use a professional email address)<br />
                            LinkedIn: linkedin.com/in/yourprofile (full URL is fine)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Bullet Points & Lists</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Use Simple Bullet Points</h3>
                          <p className="text-sm text-muted-foreground">
                            Standard round bullets (•) work best. Most ATS can handle these without issues.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">Avoid Special Characters or Symbols</h3>
                          <p className="text-sm text-muted-foreground">
                            Don't use arrows (→), stars (★), checkmarks (✓), or other decorative symbols. They may not parse correctly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Keep Bullet Points Concise</h3>
                          <p className="text-sm text-muted-foreground">
                            1-2 lines per bullet point is ideal. Start with action verbs and include specific achievements with metrics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Tables, Columns, and Layout</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">Avoid Tables for Layout</h3>
                          <p className="text-sm text-muted-foreground">
                            Tables can confuse ATS parsers, causing information to be read in the wrong order or missed entirely. Use simple, single-column layouts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">Avoid Multi-Column Layouts</h3>
                          <p className="text-sm text-muted-foreground">
                            Two-column resumes may look modern, but ATS often reads left-to-right across both columns, jumbling your information. Stick to single-column format.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">Avoid Text Boxes</h3>
                          <p className="text-sm text-muted-foreground">
                            Text boxes are often skipped by ATS. Keep all your content in the main document body.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Graphics, Images, and Visual Elements</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">No Photos or Headshots</h3>
                          <p className="text-sm text-muted-foreground">
                            Unless specifically requested (common in some countries), don't include your photo. ATS can't read images, and in many regions, photos can introduce bias.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">Avoid Charts, Graphs, or Infographics</h3>
                          <p className="text-sm text-muted-foreground">
                            Visual representations of skills (like bar charts showing proficiency levels) look nice but ATS can't read them. Use text instead.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        <div>
                          <h3 className="mb-1 font-semibold">No Logos or Icons</h3>
                          <p className="text-sm text-muted-foreground">
                            Company logos, social media icons, or decorative graphics add no value to ATS and can cause parsing issues.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Dates and Formatting</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Use Standard Date Formats</h3>
                          <p className="text-sm text-muted-foreground">
                            Acceptable formats: "January 2020 - March 2023" or "01/2020 - 03/2023" or "2020 - 2023"<br />
                            Be consistent throughout your resume.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">List Experience in Reverse Chronological Order</h3>
                          <p className="text-sm text-muted-foreground">
                            Most recent position first, working backwards. This is what ATS and recruiters expect.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Use "Present" for Current Roles</h3>
                          <p className="text-sm text-muted-foreground">
                            For your current job, use "January 2022 - Present" rather than leaving the end date blank.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Keywords and Skills</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Include a Dedicated Skills Section</h3>
                          <p className="text-sm text-muted-foreground">
                            List your technical skills, tools, and certifications in a clear, scannable format. This makes it easy for ATS to identify your qualifications.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Use Both Acronyms and Full Terms</h3>
                          <p className="text-sm text-muted-foreground">
                            Write "Search Engine Optimization (SEO)" or "SEO (Search Engine Optimization)" to cover both search variations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <div className="mb-3 flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-1 font-semibold">Spell Out Numbers Under 10</h3>
                          <p className="text-sm text-muted-foreground">
                            "Five years of experience" is more ATS-friendly than "5 years." For larger numbers, digits are fine: "Managed team of 15."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Final Checklist Before Submitting</h2>
                  <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                    <h3 className="mb-3 font-semibold">Run Through This Checklist:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>File is .docx or PDF (not scanned)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Contact information is at the top in plain text</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Standard section headings used throughout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Simple, professional font (10-12pt)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Single-column layout, no tables or text boxes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>No images, graphics, or special characters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Consistent date formatting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Keywords from job description included naturally</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>All text is selectable (not in images)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Proofread for typos and errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1">☐</span>
                        <span>Tested with an ATS checker tool</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Testing Your Resume</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Before submitting, test your resume to ensure it parses correctly:
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">1. Copy-Paste Test</h3>
                      <p className="text-sm text-muted-foreground">
                        Copy your resume content and paste it into a plain text editor (Notepad, TextEdit). If the information is readable and in the right order, ATS should handle it fine.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">2. Use an ATS Checker Tool</h3>
                      <p className="text-sm text-muted-foreground">
                        Several free tools can scan your resume and show you how an ATS would parse it. Look for missing information or formatting issues.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">3. Check on Different Devices</h3>
                      <p className="text-sm text-muted-foreground">
                        Open your resume on different computers and devices to ensure formatting stays consistent.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            <section className="mt-12 rounded-lg bg-primary/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Final Takeaway</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                ATS-friendly formatting isn't about making your resume boring—it's about ensuring your qualifications are properly recognized by the systems that screen applications. The good news is that ATS-friendly formatting also tends to be clean, professional, and easy for humans to read.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Follow this checklist, test your resume before submitting, and you'll eliminate formatting as a potential barrier to getting interviews. Remember: the goal is to get your resume into the hands of a human recruiter. Proper formatting ensures that happens, while strong content and relevant experience are what ultimately get you hired.
              </p>
            </section>

            <section className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Check Your Resume's ATS Compatibility</h3>
              <p className="mb-4 text-muted-foreground">
                Use our free ATS checker to scan your resume and identify any formatting issues before you apply.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Check ATS Score</Button>
                <Button variant="outline">Build ATS-Friendly Resume</Button>
                <Button variant="outline">View Templates</Button>
              </div>
            </section>
          </div>
        </article>

        <Separator className="my-12" />

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
