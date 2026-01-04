import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface KeywordsThatWorkProps {
  onBack: () => void;
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function KeywordsThatWork({ onBack, onNavigateToBlogPost }: KeywordsThatWorkProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relatedArticles = [
    {
      id: 'ats-truth',
      title: 'The Truth About ATS Systems',
      excerpt: 'Understand how ATS systems actually process and rank your resume keywords.',
      category: 'ATS Insights',
      readTime: '12 min',
    },
    {
      id: 'ats-formatting-rules',
      title: 'ATS-Friendly Formatting: The Complete Checklist',
      excerpt: 'Ensure your keywords are properly formatted for ATS parsing.',
      category: 'ATS Insights',
      readTime: '6 min',
    },
    {
      id: 'ai-resume-mistakes',
      title: '5 Critical Mistakes When Using AI Resume Builders',
      excerpt: 'Avoid keyword stuffing and other common AI-generated resume mistakes.',
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
            <Badge className="mb-4">Resume Writing</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Resume Keywords That Actually Get You Hired
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                David Park
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 8, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                7 min read
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Keywords can make or break your resume's chances of getting past ATS systems and catching a recruiter's attention. But not all keywords are created equal. Some are essential, some are helpful, and some are just noise that clutters your resume without adding value.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This guide reveals which keywords actually matter to recruiters and ATS systems, how to identify the right ones for your target role, and how to incorporate them naturally without keyword stuffing. Based on analysis of thousands of job postings and recruiter feedback, here's what really works.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">The Three Types of Resume Keywords</h2>
              <p className="leading-relaxed text-muted-foreground">
                Understanding the different categories of keywords helps you prioritize what to include and where to place them on your resume.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">1. Hard Skills Keywords (Highest Priority)</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    These are specific, measurable technical skills and tools. They're the most important for ATS filtering and recruiter searches.
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">Examples:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Programming languages: Python, JavaScript, Java, SQL</li>
                    <li>Software tools: Salesforce, Adobe Creative Suite, AutoCAD</li>
                    <li>Certifications: PMP, CPA, AWS Certified, Google Analytics</li>
                    <li>Technical methods: Agile, Six Sigma, SEO, Data Analysis</li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">2. Industry-Specific Keywords (High Priority)</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Terms and concepts specific to your field that demonstrate industry knowledge.
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">Examples:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Healthcare: HIPAA compliance, EHR systems, patient care protocols</li>
                    <li>Finance: Financial modeling, risk assessment, regulatory compliance</li>
                    <li>Marketing: Content strategy, conversion optimization, brand positioning</li>
                    <li>Engineering: CAD design, quality assurance, product lifecycle</li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">3. Soft Skills Keywords (Medium Priority)</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Interpersonal and transferable skills. Important, but only when demonstrated through specific examples.
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">Examples:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Leadership, team collaboration, project management</li>
                    <li>Communication, presentation, stakeholder management</li>
                    <li>Problem-solving, critical thinking, analytical skills</li>
                    <li>Time management, organization, attention to detail</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">How to Find the Right Keywords for Your Target Role</h2>
              <p className="leading-relaxed text-muted-foreground">
                Don't guess at keywords—extract them directly from job postings in your target field. Here's a systematic approach:
              </p>
              <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h3 className="mb-2 font-semibold">Step-by-Step Keyword Research:</h3>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li><strong>Collect 10-15 job postings</strong> for your target role from different companies</li>
                  <li><strong>Highlight repeated terms</strong> that appear in multiple postings—these are your priority keywords</li>
                  <li><strong>Note exact phrasing</strong>—if most postings say "project management," use that instead of "managed projects"</li>
                  <li><strong>Identify required vs. preferred</strong> skills—required skills are must-have keywords</li>
                  <li><strong>Look for variations</strong>—include both "SEO" and "Search Engine Optimization"</li>
                  <li><strong>Check the qualifications section</strong>—this often contains the most important keywords</li>
                </ol>
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
                    Read More: Keyword Placement & Industry Examples
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Where to Place Keywords on Your Resume</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Strategic placement matters. Some sections carry more weight with ATS systems and recruiters than others.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">1. Professional Summary (Top Priority)</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        This is prime real estate. Include your most important keywords here, especially job titles and core skills.
                      </p>
                      <p className="text-xs italic text-muted-foreground">
                        Example: "Senior Data Analyst with 5+ years experience in Python, SQL, and Tableau. Specialized in predictive modeling, data visualization, and business intelligence for e-commerce companies."
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">2. Skills Section (High Priority)</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        List technical skills and tools explicitly. This is where ATS systems often look first for keyword matches.
                      </p>
                      <p className="text-xs italic text-muted-foreground">
                        Organize by category: Technical Skills, Tools & Software, Certifications, Languages
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">3. Work Experience (High Priority)</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        Incorporate keywords naturally into your bullet points. Show how you've used these skills in context.
                      </p>
                      <p className="text-xs italic text-muted-foreground">
                        Example: "Developed Python scripts to automate data processing, reducing analysis time by 40%"
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">4. Education & Certifications (Medium Priority)</h3>
                      <p className="text-sm text-muted-foreground">
                        Include relevant coursework, certifications, and training that contain important keywords.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Industry-Specific Keyword Examples</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Here are high-value keywords for common career fields. Use these as starting points, then customize based on your specific target roles.
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Software Development</h3>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Must-Have Keywords:</p>
                      <p className="text-sm text-muted-foreground">
                        Programming languages (Python, Java, JavaScript, C++), frameworks (React, Angular, Django), version control (Git, GitHub), Agile/Scrum, API development, database management (SQL, MongoDB), cloud platforms (AWS, Azure, GCP), CI/CD, unit testing
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Digital Marketing</h3>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Must-Have Keywords:</p>
                      <p className="text-sm text-muted-foreground">
                        SEO/SEM, Google Analytics, content marketing, social media marketing, email marketing, PPC campaigns, conversion rate optimization, A/B testing, marketing automation, Google Ads, Facebook Ads, content strategy, brand management
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Project Management</h3>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Must-Have Keywords:</p>
                      <p className="text-sm text-muted-foreground">
                        PMP certification, Agile methodology, Scrum Master, stakeholder management, budget management, risk assessment, project lifecycle, resource allocation, JIRA, Microsoft Project, cross-functional teams, deliverables, KPIs
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Data Analysis</h3>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Must-Have Keywords:</p>
                      <p className="text-sm text-muted-foreground">
                        Python, R, SQL, Excel, Tableau, Power BI, data visualization, statistical analysis, machine learning, predictive modeling, data mining, business intelligence, ETL processes, big data, data warehousing
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Sales</h3>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Must-Have Keywords:</p>
                      <p className="text-sm text-muted-foreground">
                        B2B/B2C sales, CRM (Salesforce, HubSpot), lead generation, pipeline management, quota attainment, account management, client relationships, sales forecasting, negotiation, closing deals, territory management, revenue growth
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Common Keyword Mistakes to Avoid</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #1: Keyword Stuffing</h3>
                      <p className="text-sm text-muted-foreground">
                        Repeating the same keywords excessively or listing skills you don't actually have. This makes your resume unreadable and can get you rejected even if you pass ATS screening.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #2: Using Only Soft Skills</h3>
                      <p className="text-sm text-muted-foreground">
                        Focusing on vague terms like "team player" or "hard worker" without including specific technical skills and tools. Hard skills are what get you through ATS filters.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #3: Ignoring Variations</h3>
                      <p className="text-sm text-muted-foreground">
                        Only using acronyms (SEO) or only spelling out terms (Search Engine Optimization). Include both to cover different search approaches.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #4: Using Outdated Keywords</h3>
                      <p className="text-sm text-muted-foreground">
                        Including obsolete technologies or methods that are no longer relevant in your field. This dates your resume and suggests you're not keeping up with industry trends.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">How to Naturally Incorporate Keywords</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    The goal is to include keywords in a way that sounds natural and demonstrates actual experience, not just a list of buzzwords.
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold text-destructive">❌ Poor Example (Keyword Stuffing):</h3>
                      <p className="text-sm italic text-muted-foreground">
                        "Experienced in leadership, teamwork, communication, problem-solving, and time management. Skilled in Python, Java, JavaScript, SQL, React, Angular, AWS, Azure, and GCP."
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Problem: Just a list with no context or proof of actual experience.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold text-primary">✓ Good Example (Natural Integration):</h3>
                      <p className="text-sm italic text-muted-foreground">
                        "Led a cross-functional team of 8 developers to build a React-based web application, utilizing Python and SQL for backend services. Deployed on AWS infrastructure, resulting in 99.9% uptime and 50% faster load times."
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Strength: Keywords integrated into specific achievements with measurable results.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Testing Your Keyword Strategy</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Before submitting your resume, verify that your keyword strategy is working:
                  </p>
                  <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      <li><strong>Use an ATS checker tool</strong> to see how well your resume parses and which keywords are detected</li>
                      <li><strong>Compare against job descriptions</strong>—do you include at least 70-80% of the required skills?</li>
                      <li><strong>Read it aloud</strong>—does it sound natural, or like a robot wrote it?</li>
                      <li><strong>Get feedback</strong> from someone in your industry—do they recognize the keywords as relevant and current?</li>
                      <li><strong>Check for balance</strong>—you should have a mix of hard skills, industry terms, and demonstrated soft skills</li>
                    </ul>
                  </div>
                </section>
              </div>
            )}

            <section className="mt-12 rounded-lg bg-primary/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Final Takeaway</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Effective keyword optimization isn't about gaming the system—it's about clearly communicating your relevant skills and experience in the language that recruiters and ATS systems understand. Focus on hard skills and industry-specific terms extracted directly from job postings, incorporate them naturally into your actual accomplishments, and avoid keyword stuffing.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Remember: keywords get you past the ATS and into the recruiter's hands, but substance and achievements are what get you the interview. Use keywords strategically to ensure your qualifications are properly recognized, then let your real experience speak for itself.
              </p>
            </section>

            <section className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Optimize Your Resume Keywords</h3>
              <p className="mb-4 text-muted-foreground">
                Use our AI-powered tools to identify the right keywords for your target role and ensure they're properly integrated into your resume.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Keyword Optimizer Tool</Button>
                <Button variant="outline">Check ATS Score</Button>
                <Button variant="outline">Build Resume</Button>
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
