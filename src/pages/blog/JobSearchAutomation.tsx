import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface JobSearchAutomationProps {
  onBack: () => void;
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function JobSearchAutomation({ onBack, onNavigateToBlogPost }: JobSearchAutomationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relatedArticles = [
    {
      id: 'ai-resume-mistakes',
      title: '5 Critical Mistakes When Using AI Resume Builders',
      excerpt: 'Learn how to use AI tools effectively throughout your job search.',
      category: 'AI Tools',
      readTime: '8 min',
    },
    {
      id: 'career-switch-guide',
      title: 'Career Switching in 2025: A Step-by-Step Blueprint',
      excerpt: 'Use AI tools to accelerate your career transition process.',
      category: 'Career Development',
      readTime: '10 min',
    },
    {
      id: 'keywords-that-work',
      title: 'Resume Keywords That Actually Get You Hired',
      excerpt: 'Optimize your resume with AI-powered keyword analysis.',
      category: 'Resume Writing',
      readTime: '7 min',
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
            <Badge className="mb-4">Job Search</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Smart Job Search: Using AI Tools Beyond Resume Building
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Emily Rodriguez
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 30, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                11 min read
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Most job seekers know about AI resume builders, but that's just the beginning. AI tools can streamline your entire job search process—from finding relevant opportunities to preparing for interviews. Used strategically, these tools can save you hours every week while improving the quality of your applications.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This guide reveals how to leverage AI throughout your job search journey. We'll cover practical tools and strategies that actually work, based on successful job seekers who've used AI to land roles faster and more efficiently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">The Complete AI-Powered Job Search Workflow</h2>
              <p className="leading-relaxed text-muted-foreground">
                Here's how AI can assist at each stage of your job search:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">Stage 1: Job Discovery & Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    AI tools can scan thousands of job postings, identify roles that match your skills and preferences, and alert you to new opportunities automatically.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">Stage 2: Application Customization</h3>
                  <p className="text-sm text-muted-foreground">
                    AI helps tailor your resume and cover letter for each specific job, ensuring you highlight the most relevant experience and include key keywords.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">Stage 3: Application Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered tools organize your applications, track deadlines, and remind you to follow up at the right times.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">Stage 4: Interview Preparation</h3>
                  <p className="text-sm text-muted-foreground">
                    AI can generate likely interview questions, provide feedback on your answers, and help you research companies efficiently.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">Stage 5: Networking & Outreach</h3>
                  <p className="text-sm text-muted-foreground">
                    AI assists with crafting personalized networking messages, identifying key contacts, and maintaining relationships.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">AI Tools for Job Discovery</h2>
              <p className="leading-relaxed text-muted-foreground">
                Finding the right opportunities is the first challenge. AI can help you discover jobs you might have missed and filter out irrelevant postings.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold">Smart Job Aggregators</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Tools like LinkedIn, Indeed, and specialized platforms use AI to recommend jobs based on your profile, search history, and application patterns.
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">How to Use Them Effectively:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Complete your profile thoroughly—AI recommendations improve with more data</li>
                    <li>Set up job alerts with specific criteria to get daily matches</li>
                    <li>Engage with postings (save, apply, view) to train the algorithm</li>
                    <li>Use advanced filters to narrow down by location, salary, experience level</li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">Company Research Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    AI tools can quickly gather information about companies—culture, recent news, employee reviews, growth trajectory—helping you decide where to apply and what to mention in your application.
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
                    Read More: Application Automation & Interview Prep
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Automating Application Customization</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Customizing each application is crucial, but it's time-consuming. AI can help you personalize applications efficiently without sacrificing quality.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Resume Tailoring</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        AI tools can analyze a job description and suggest which experiences to emphasize, which keywords to include, and how to reorder your bullet points for maximum relevance.
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">Best Practice:</p>
                      <p className="text-sm text-muted-foreground">
                        Create a master resume with all your experience, then use AI to generate customized versions for each application. Review and refine the AI suggestions—don't just accept them blindly.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Cover Letter Generation</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        AI can draft cover letters based on the job description and your resume, saving significant time. The key is providing good input and editing the output.
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">How to Get Good Results:</p>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Provide the full job description and your resume</li>
                        <li>Specify the tone (professional, enthusiastic, formal)</li>
                        <li>Mention specific aspects of the company you're excited about</li>
                        <li>Edit the output to add personal touches and authenticity</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Application Form Auto-Fill</h3>
                      <p className="text-sm text-muted-foreground">
                        Browser extensions can automatically fill in repetitive application forms using information from your profile, saving hours of data entry.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">AI-Powered Application Tracking</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    When you're applying to multiple positions, keeping track becomes challenging. AI tools can organize everything and ensure you never miss a follow-up.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">What AI Tracking Tools Can Do:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li>Automatically log applications from your email or browser</li>
                        <li>Track application status (applied, interview scheduled, rejected, offer)</li>
                        <li>Set reminders for follow-ups at optimal times</li>
                        <li>Analyze your application success rate and identify patterns</li>
                        <li>Store job descriptions and notes for each application</li>
                        <li>Generate reports on your job search progress</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Recommended Approach:</h3>
                      <p className="text-sm text-muted-foreground">
                        Use a spreadsheet or dedicated tool to track: company name, position, application date, status, follow-up dates, contacts, and notes. Many AI tools can automatically populate and update this information.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">AI for Interview Preparation</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Interview prep is where AI can provide tremendous value, helping you practice, get feedback, and research effectively.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Question Generation & Practice</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        AI can generate likely interview questions based on the job description and your background, then provide feedback on your answers.
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">How to Practice:</p>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Input the job description and ask AI to generate relevant questions</li>
                        <li>Practice answering out loud or in writing</li>
                        <li>Use AI to evaluate your answers for clarity, relevance, and structure</li>
                        <li>Refine your responses based on feedback</li>
                        <li>Focus on behavioral questions (STAR method) and technical questions</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Company Research</h3>
                      <p className="text-sm text-muted-foreground">
                        AI can quickly summarize a company's recent news, products, culture, challenges, and competitors—giving you talking points for your interview.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Mock Interview Simulations</h3>
                      <p className="text-sm text-muted-foreground">
                        Some AI tools offer interactive mock interviews with real-time feedback on your responses, body language (via video), and communication style.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Networking & Outreach Automation</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Networking is crucial for job searching, but reaching out to people can be time-consuming. AI can help you network more effectively.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">AI-Assisted Networking Strategies:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li><strong>Connection Identification:</strong> AI can analyze your network and suggest relevant people to connect with based on your target companies or roles</li>
                        <li><strong>Message Personalization:</strong> Generate personalized outreach messages that reference specific details about the recipient</li>
                        <li><strong>Follow-Up Reminders:</strong> AI tools can remind you to follow up with contacts at appropriate intervals</li>
                        <li><strong>Conversation Starters:</strong> Get suggestions for what to discuss based on shared interests or recent activity</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Important Caveat:</h3>
                      <p className="text-sm text-muted-foreground">
                        While AI can draft messages, always personalize them further. Generic, obviously AI-generated outreach is easy to spot and often ignored. Use AI as a starting point, then add genuine personal touches.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Time-Saving AI Workflows</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Here are complete workflows that combine multiple AI tools for maximum efficiency:
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Daily Job Search Routine (30 minutes)</h3>
                      <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                        <li>Check AI-curated job alerts (5 min)</li>
                        <li>Use AI to quickly research 2-3 interesting companies (10 min)</li>
                        <li>Customize resume and cover letter with AI assistance (10 min)</li>
                        <li>Submit applications and log them in tracking system (5 min)</li>
                      </ol>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Interview Prep Workflow (2 hours)</h3>
                      <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                        <li>Use AI to generate likely interview questions (15 min)</li>
                        <li>Research company with AI-powered tools (30 min)</li>
                        <li>Practice answers and get AI feedback (45 min)</li>
                        <li>Prepare questions to ask interviewer (15 min)</li>
                        <li>Review and refine your responses (15 min)</li>
                      </ol>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Weekly Networking Routine (1 hour)</h3>
                      <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                        <li>Identify 5-10 new connections with AI suggestions (15 min)</li>
                        <li>Draft personalized outreach messages with AI (20 min)</li>
                        <li>Send messages and connection requests (10 min)</li>
                        <li>Follow up with existing contacts (15 min)</li>
                      </ol>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Common Pitfalls to Avoid</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Pitfall #1: Over-Automation</h3>
                      <p className="text-sm text-muted-foreground">
                        Don't let AI completely take over. Employers can spot generic, AI-generated applications. Use AI to save time, but add personal touches and genuine thought to everything you submit.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Pitfall #2: Applying to Everything</h3>
                      <p className="text-sm text-muted-foreground">
                        Just because AI makes it easy to apply doesn't mean you should apply to every job. Quality over quantity—focus on roles where you're genuinely qualified and interested.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Pitfall #3: Ignoring Human Connections</h3>
                      <p className="text-sm text-muted-foreground">
                        AI can't replace genuine networking. Use it to facilitate connections, but invest time in building real relationships with people in your field.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Pitfall #4: Not Verifying AI Output</h3>
                      <p className="text-sm text-muted-foreground">
                        Always review and fact-check what AI generates. It can make mistakes, include outdated information, or produce content that doesn't accurately represent you.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Measuring Your AI-Enhanced Job Search Success</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Track these metrics to evaluate whether your AI-powered approach is working:
                  </p>
                  <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      <li><strong>Application-to-Response Rate:</strong> Aim for at least 10-20% of applications resulting in some response</li>
                      <li><strong>Time Spent Per Application:</strong> AI should reduce this significantly while maintaining quality</li>
                      <li><strong>Interview Conversion Rate:</strong> Track how many applications lead to interviews</li>
                      <li><strong>Quality of Opportunities:</strong> Are you getting interviews for roles you actually want?</li>
                      <li><strong>Time to Job Offer:</strong> Compare your timeline to industry averages</li>
                    </ul>
                  </div>
                </section>
              </div>
            )}

            <section className="mt-12 rounded-lg bg-primary/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Final Takeaway</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                AI tools can dramatically improve your job search efficiency, but they're assistants, not replacements for your judgment and effort. The most successful job seekers use AI to handle repetitive tasks and generate starting points, then add their own research, personalization, and authentic voice.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Start by incorporating one or two AI tools into your workflow, master them, then gradually add more. The goal isn't to automate everything—it's to spend less time on busywork and more time on high-value activities like networking, skill development, and thoughtful application customization. Used wisely, AI can help you find better opportunities faster while maintaining the quality and authenticity that employers value.
              </p>
            </section>

            <section className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Start Your AI-Powered Job Search</h3>
              <p className="mb-4 text-muted-foreground">
                Use our AI tools to streamline your job search and land your next role faster.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Build Resume</Button>
                <Button variant="outline">Optimize Keywords</Button>
                <Button variant="outline">Check ATS Score</Button>
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
