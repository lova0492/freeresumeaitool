import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface AIResumeMistakesProps {
  onBack: () => void;
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function AIResumeMistakes({ onBack, onNavigateToBlogPost }: AIResumeMistakesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relatedArticles = [
    {
      id: 'ats-truth',
      title: 'The Truth About ATS Systems',
      excerpt: 'Discover the reality behind Applicant Tracking Systems and learn what truly matters.',
      category: 'ATS Insights',
      readTime: '12 min',
    },
    {
      id: 'keywords-that-work',
      title: 'Resume Keywords That Actually Get You Hired',
      excerpt: 'Not all keywords are created equal. Discover which terms recruiters prioritize.',
      category: 'Resume Writing',
      readTime: '7 min',
    },
    {
      id: 'job-search-automation',
      title: 'Smart Job Search: Using AI Tools Beyond Resume Building',
      excerpt: 'Discover how AI can streamline your entire job search process.',
      category: 'Job Search',
      readTime: '11 min',
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
            <Badge className="mb-4">AI Tools</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              5 Critical Mistakes When Using AI Resume Builders
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Michael Chen
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 12, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                AI resume builders have revolutionized how job seekers create professional resumes. These tools can save hours of formatting work and provide helpful suggestions. However, they're not magic solutions, and relying on them blindly can actually hurt your job search.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                After analyzing thousands of AI-generated resumes and speaking with recruiters, we've identified five critical mistakes that job seekers make when using these tools. Avoid these pitfalls to ensure your AI-assisted resume actually helps you land interviews.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Mistake #1: Accepting AI Suggestions Without Verification</h2>
              <p className="leading-relaxed text-muted-foreground">
                AI tools generate content based on patterns in their training data, but they don't know your specific experience or the nuances of your industry. Blindly accepting every suggestion can lead to generic, inaccurate, or even misleading content on your resume.
              </p>
              <div className="mt-4 rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                <h3 className="mb-2 font-semibold text-destructive">What Goes Wrong:</h3>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>AI might exaggerate your responsibilities or achievements</li>
                  <li>Generated bullet points may not accurately reflect your actual work</li>
                  <li>Industry-specific terminology might be used incorrectly</li>
                  <li>Dates, numbers, or technical details could be fabricated</li>
                </ul>
              </div>
              <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h3 className="mb-2 font-semibold">How to Fix It:</h3>
                <p className="text-sm text-muted-foreground">
                  Treat AI suggestions as drafts, not final content. Review every line carefully. Verify that all information is accurate and truthful. Customize the language to match your actual experience and communication style. Remember: you're responsible for everything on your resume, regardless of who or what wrote it.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Mistake #2: Using the Same AI-Generated Resume for Every Application</h2>
              <p className="leading-relaxed text-muted-foreground">
                One of the biggest advantages of AI tools is the ability to quickly customize your resume for different positions. Yet many job seekers create one AI-generated resume and send it everywhere, missing opportunities to tailor their application.
              </p>
              <div className="mt-4 rounded-lg border bg-card p-4">
                <h3 className="mb-2 font-semibold">Why This Matters:</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Different roles emphasize different skills and experiences. A generic resume won't highlight what's most relevant for each specific position, reducing your chances of getting noticed by both ATS systems and human recruiters.
                </p>
                <h3 className="mb-2 font-semibold">The Smart Approach:</h3>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>Use AI to create a master resume with all your experience</li>
                  <li>For each application, ask the AI to emphasize relevant skills</li>
                  <li>Adjust your summary to match the specific role requirements</li>
                  <li>Reorder bullet points to prioritize what matters most for that job</li>
                  <li>Incorporate keywords from the job description naturally</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Mistake #3: Ignoring the Human Element</h2>
              <p className="leading-relaxed text-muted-foreground">
                AI-generated content often sounds polished but impersonal. Resumes that read like they were written by a robot can fail to connect with human recruiters, even if they're technically well-formatted and keyword-optimized.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">Signs Your Resume Sounds Too Robotic:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Every bullet point follows the exact same structure</li>
                    <li>Overuse of buzzwords like "synergy," "leverage," "optimize"</li>
                    <li>Descriptions that could apply to anyone in your field</li>
                    <li>No personality or unique perspective comes through</li>
                    <li>Achievements sound impressive but vague</li>
                  </ul>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold">How to Add Authenticity:</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    After AI generates content, read it aloud. Does it sound like something you would actually say? Add specific details that only you would know. Include concrete examples and real numbers. Let your unique perspective and voice come through while maintaining professionalism.
                  </p>
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
                    Read More: Mistakes #4 & #5 + Best Practices
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Mistake #4: Overlooking Formatting and Design Issues</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    AI tools excel at generating content, but they can sometimes create formatting that looks good on screen but causes problems when parsed by ATS systems or printed by recruiters.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Common Formatting Problems:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li>Overly complex layouts that confuse ATS parsers</li>
                        <li>Inconsistent spacing or alignment</li>
                        <li>Fonts that don't display correctly across different systems</li>
                        <li>Color schemes that look unprofessional or don't print well</li>
                        <li>Margins that are too narrow or wide</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Quality Control Checklist:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li>Export your resume as PDF and review it carefully</li>
                        <li>Check how it looks when printed in black and white</li>
                        <li>Test it with an ATS checker tool</li>
                        <li>Ensure all text is selectable (not embedded in images)</li>
                        <li>Verify that contact information is clearly visible</li>
                        <li>Confirm consistent formatting throughout</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Mistake #5: Failing to Update and Maintain Your Resume</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Many people use an AI tool once to create a resume, then never update it. As you gain new skills, complete projects, or achieve milestones, your resume should evolve. AI tools make updates easier, but you still need to do them.
                  </p>
                  <div className="mt-4 rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Why Regular Updates Matter:</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Your most recent and relevant experiences should always be front and center. Outdated resumes miss opportunities to showcase your growth and current capabilities. Plus, it's easier to update your resume while experiences are fresh in your mind.
                    </p>
                    <h3 className="mb-2 font-semibold">Maintenance Best Practices:</h3>
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      <li>Set a reminder to review your resume quarterly</li>
                      <li>Add new achievements as they happen, not months later</li>
                      <li>Remove or condense older, less relevant experience</li>
                      <li>Update your skills section as you learn new tools or technologies</li>
                      <li>Refresh your summary to reflect your current career goals</li>
                      <li>Use AI to help rephrase or improve new additions</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Best Practices for Using AI Resume Builders Effectively</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    When used correctly, AI resume builders are powerful tools. Here's how to get the best results:
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">1. Start with Accurate Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Provide the AI with detailed, truthful information about your experience. The better your input, the better the output. Include specific achievements, metrics, and responsibilities.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">2. Use AI as a Writing Assistant, Not a Replacement</h3>
                      <p className="text-sm text-muted-foreground">
                        Think of AI as a skilled editor who helps you articulate your experience better. You provide the substance; AI helps with the presentation. Never let AI completely replace your own judgment and knowledge.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">3. Iterate and Refine</h3>
                      <p className="text-sm text-muted-foreground">
                        Don't accept the first version AI generates. Ask for alternatives, try different phrasings, and combine the best elements from multiple suggestions. Good resumes are refined through multiple iterations.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">4. Get Human Feedback</h3>
                      <p className="text-sm text-muted-foreground">
                        Have someone in your industry review your AI-generated resume. They can catch inaccuracies, suggest improvements, and confirm that it accurately represents your experience and capabilities.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">5. Combine AI Tools with Traditional Best Practices</h3>
                      <p className="text-sm text-muted-foreground">
                        AI doesn't replace fundamental resume principles: clear structure, quantified achievements, relevant keywords, error-free writing, and honest representation of your skills. Use AI to enhance these elements, not bypass them.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Real-World Example: Before and After AI Optimization</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold text-destructive">❌ Poor AI Usage (Mistake-Filled):</h3>
                      <p className="mb-2 text-sm italic text-muted-foreground">
                        "Leveraged synergistic methodologies to optimize cross-functional deliverables and drive stakeholder engagement through innovative solutions."
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Problems: Buzzword overload, no specific information, could apply to anyone, sounds robotic.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold text-primary">✓ Good AI Usage (Properly Refined):</h3>
                      <p className="mb-2 text-sm italic text-muted-foreground">
                        "Led a team of 5 developers to redesign the customer checkout process, reducing cart abandonment by 23% and increasing conversion rates by 15% over 6 months."
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Strengths: Specific role, concrete metrics, clear impact, authentic voice, relevant details.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            <section className="mt-12 rounded-lg bg-primary/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Final Takeaway</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                AI resume builders are valuable tools that can significantly improve your job search—when used correctly. The key is to maintain control over your content, verify everything, and add your unique perspective. AI should enhance your resume, not replace your judgment or authenticity.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Avoid these five critical mistakes, follow best practices, and you'll create a resume that combines the efficiency of AI with the authenticity and accuracy that only you can provide. Remember: the goal isn't just to create a resume quickly—it's to create one that effectively represents you and helps you land interviews.
              </p>
            </section>

            <section className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Try Our AI Resume Tools</h3>
              <p className="mb-4 text-muted-foreground">
                Use our AI-powered tools to create, optimize, and check your resume while avoiding these common mistakes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Build Your Resume</Button>
                <Button variant="outline">Check ATS Score</Button>
                <Button variant="outline">Optimize Keywords</Button>
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
