import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface CareerSwitchGuideProps {
  onBack: () => void;
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function CareerSwitchGuide({ onBack, onNavigateToBlogPost }: CareerSwitchGuideProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relatedArticles = [
    {
      id: 'fresher-resume-strategy',
      title: 'The Fresher\'s Guide to Standing Out Without Experience',
      excerpt: 'No work experience? Learn how to showcase your potential through projects and skills.',
      category: 'Career Tips',
      readTime: '9 min',
    },
    {
      id: 'keywords-that-work',
      title: 'Resume Keywords That Actually Get You Hired',
      excerpt: 'Discover which terms recruiters and ATS systems prioritize for career changers.',
      category: 'Resume Writing',
      readTime: '7 min',
    },
    {
      id: 'job-search-automation',
      title: 'Smart Job Search: Using AI Tools Beyond Resume Building',
      excerpt: 'Streamline your career transition with AI-powered job search strategies.',
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
            <Badge className="mb-4">Career Development</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Career Switching in 2025: A Step-by-Step Blueprint
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Emily Rodriguez
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 10, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Thinking about changing careers? You're not alone. Recent studies show that the average person changes careers 5-7 times during their working life, and career transitions are becoming increasingly common in 2025. Whether you're seeking better work-life balance, higher pay, or simply more fulfilling work, a strategic approach can make the difference between a successful transition and a frustrating false start.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This comprehensive guide walks you through every stage of a career switch, from initial assessment to landing your first role in a new field. No fluff, no unrealistic promises—just practical, evidence-based strategies that actually work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Step 1: Assess Your Current Situation and Motivations</h2>
              <p className="leading-relaxed text-muted-foreground">
                Before making any major career move, you need clarity on why you're switching and what you're moving toward. Rushing this step leads to poor decisions and potential regret.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">Ask Yourself These Critical Questions:</h3>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    <li>What specifically am I unhappy with in my current career?</li>
                    <li>Is this a temporary frustration or a fundamental mismatch?</li>
                    <li>What aspects of my current work do I actually enjoy?</li>
                    <li>What are my non-negotiable requirements in a new career?</li>
                    <li>Can I afford the potential pay cut during transition?</li>
                    <li>Am I willing to invest time in learning new skills?</li>
                  </ul>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold">Reality Check:</h3>
                  <p className="text-sm text-muted-foreground">
                    Sometimes the problem isn't your career field—it's your specific job, company culture, or manager. Before committing to a full career change, consider whether a new role in your current field might solve your issues. Career switches require significant time, effort, and often financial sacrifice. Make sure you're solving the right problem.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Step 2: Identify Transferable Skills and Gaps</h2>
              <p className="leading-relaxed text-muted-foreground">
                You have more relevant experience than you think. The key is identifying which of your current skills transfer to your target field and which new skills you need to develop.
              </p>
              <div className="mt-4 rounded-lg border bg-card p-4">
                <h3 className="mb-3 font-semibold">Common Transferable Skills:</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Hard Skills:</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Data analysis and interpretation</li>
                      <li>Project management</li>
                      <li>Technical writing and documentation</li>
                      <li>Budget management</li>
                      <li>Software proficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Soft Skills:</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Communication and presentation</li>
                      <li>Problem-solving and critical thinking</li>
                      <li>Leadership and team collaboration</li>
                      <li>Time management and organization</li>
                      <li>Adaptability and learning agility</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h3 className="mb-2 font-semibold">Action Step:</h3>
                <p className="text-sm text-muted-foreground">
                  Create two lists: (1) Skills you have that are valuable in your target field, and (2) Skills you need to develop. Research 10-15 job postings in your target role to identify the most commonly required qualifications. This gives you a clear roadmap for skill development.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Step 3: Research Your Target Career Thoroughly</h2>
              <p className="leading-relaxed text-muted-foreground">
                Many career switchers have an idealized view of their target field based on limited information. Thorough research prevents costly mistakes and helps you make an informed decision.
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">Essential Research Activities:</h3>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    <li><strong>Informational Interviews:</strong> Talk to 5-10 people currently working in your target role. Ask about daily responsibilities, challenges, career progression, and work-life balance.</li>
                    <li><strong>Job Shadowing:</strong> If possible, spend a day observing someone in your target role. The reality often differs from job descriptions.</li>
                    <li><strong>Industry Analysis:</strong> Research growth trends, salary ranges, required certifications, and typical career paths in your target field.</li>
                    <li><strong>Company Culture:</strong> Different industries have different work cultures. Make sure the typical environment aligns with your preferences.</li>
                  </ul>
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
                    Read More: Steps 4-7 + Success Stories
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Step 4: Build Relevant Skills and Credentials</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Once you've identified skill gaps, it's time to fill them strategically. Focus on credentials and experience that employers in your target field actually value.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Efficient Learning Strategies:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li><strong>Online Courses:</strong> Platforms like Coursera, edX, and LinkedIn Learning offer industry-recognized certificates. Choose courses that result in credentials you can list on your resume.</li>
                        <li><strong>Bootcamps:</strong> For fields like tech, data science, or digital marketing, intensive bootcamps can provide practical skills quickly (typically 3-6 months).</li>
                        <li><strong>Professional Certifications:</strong> Research which certifications are valued in your target field (e.g., PMP for project management, Google Analytics for digital marketing).</li>
                        <li><strong>Side Projects:</strong> Build a portfolio of relevant work. Create projects that demonstrate your new skills in action.</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Time and Budget Considerations:</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        Most successful career switchers spend 6-18 months building new skills before actively job hunting. Budget for courses, certifications, and potentially reduced income during transition. Many people continue their current job while learning new skills in evenings and weekends.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Step 5: Gain Practical Experience</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Employers want to see that you can actually do the work, not just that you've taken courses. Practical experience is often the biggest hurdle for career switchers—and the most important factor in landing your first role.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Ways to Gain Experience:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li><strong>Freelance Projects:</strong> Take on small projects through platforms like Upwork or Fiverr. Even unpaid or low-paid work builds your portfolio.</li>
                        <li><strong>Volunteer Work:</strong> Nonprofits often need help with marketing, web development, data analysis, etc. Volunteer work is real experience.</li>
                        <li><strong>Internal Transitions:</strong> Look for opportunities to take on relevant projects in your current company. This can lead to an internal role change.</li>
                        <li><strong>Contract or Part-Time Roles:</strong> These are often easier to land than full-time positions and provide valuable experience and references.</li>
                        <li><strong>Personal Projects:</strong> Build something relevant to your target field. A well-executed personal project can be as impressive as professional experience.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Step 6: Rebrand Yourself and Your Resume</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Your resume and online presence need to position you as a credible candidate in your new field, not just someone with experience in a different area.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Resume Strategy for Career Switchers:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li><strong>Lead with a Strong Summary:</strong> Explicitly state your career transition and highlight transferable skills. Don't make recruiters guess why you're applying.</li>
                        <li><strong>Emphasize Relevant Experience:</strong> Reframe your previous roles to highlight aspects relevant to your target field. Use industry-specific keywords.</li>
                        <li><strong>Showcase New Skills Prominently:</strong> Create a dedicated section for new certifications, courses, and projects. Make it clear you've invested in developing relevant expertise.</li>
                        <li><strong>Include a Portfolio or Projects Section:</strong> Demonstrate practical application of your new skills through concrete examples.</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Online Presence:</h3>
                      <p className="text-sm text-muted-foreground">
                        Update your LinkedIn headline and summary to reflect your new career direction. Join relevant professional groups, engage with industry content, and connect with people in your target field. Your online presence should tell a coherent story about your career transition.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Step 7: Network Strategically and Apply Tactically</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    For career switchers, networking is even more critical than for traditional job seekers. Many successful transitions happen through connections, not cold applications.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Effective Networking Strategies:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li><strong>Leverage Your Existing Network:</strong> Tell people you know about your career transition. You'd be surprised how many connections can help.</li>
                        <li><strong>Attend Industry Events:</strong> Conferences, meetups, and workshops are opportunities to meet people in your target field and learn about opportunities.</li>
                        <li><strong>Informational Interviews:</strong> Continue having conversations with people in your target roles. Some of these may lead to job opportunities.</li>
                        <li><strong>Join Professional Associations:</strong> Many industries have professional organizations that offer networking events, job boards, and mentorship programs.</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Application Strategy:</h3>
                      <p className="text-sm text-muted-foreground">
                        Target entry-level or junior positions in your new field, even if you were senior in your previous career. Look for companies known for hiring career switchers or that value diverse backgrounds. Customize every application to explain your transition and highlight relevant skills. Consider smaller companies or startups, which are often more flexible about non-traditional backgrounds.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Real Success Stories: Career Switchers Who Made It Work</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">From Teacher to UX Designer (18 months)</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        <strong>Background:</strong> High school teacher for 8 years, wanted better work-life balance and higher earning potential.
                      </p>
                      <p className="mb-2 text-sm text-muted-foreground">
                        <strong>Strategy:</strong> Completed a UX design bootcamp while teaching, built portfolio through volunteer projects for local nonprofits, leveraged communication and presentation skills from teaching.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Outcome:</strong> Landed junior UX designer role at mid-size tech company, 30% salary increase within 2 years.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">From Retail Manager to Data Analyst (12 months)</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        <strong>Background:</strong> 10 years in retail management, interested in more analytical work.
                      </p>
                      <p className="mb-2 text-sm text-muted-foreground">
                        <strong>Strategy:</strong> Took online courses in SQL, Python, and data visualization, created portfolio analyzing retail sales data from previous job, emphasized analytical aspects of management experience.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Outcome:</strong> Started as data analyst at e-commerce company, leveraged retail industry knowledge as unique advantage.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Common Challenges and How to Overcome Them</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Challenge: "You don't have experience in this field"</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solution:</strong> Emphasize transferable skills, showcase relevant projects and certifications, target entry-level positions, and be prepared to explain how your unique background adds value.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Challenge: Taking a pay cut</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solution:</strong> Build financial cushion before switching, consider part-time transition, negotiate based on total compensation package, remember that initial pay cut is often temporary as you gain experience.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Challenge: Imposter syndrome</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solution:</strong> Remember that everyone starts somewhere, focus on continuous learning, seek mentorship, celebrate small wins, and recognize that your diverse background is an asset, not a liability.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            <section className="mt-12 rounded-lg bg-primary/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Final Takeaway</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Career switching is challenging but absolutely achievable with the right approach. Success requires honest self-assessment, strategic skill development, practical experience, and persistent networking. Most successful career switchers spend 6-18 months in transition, so patience and persistence are essential.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                The key is treating your career switch as a project with clear goals, milestones, and action steps. Don't wait for the "perfect" moment—start building skills and making connections now. Your diverse background and fresh perspective can be significant advantages in your new field. Take it one step at a time, and remember that every expert in your target field was once a beginner too.
              </p>
            </section>

            <section className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Tools to Support Your Career Transition</h3>
              <p className="mb-4 text-muted-foreground">
                Use our AI-powered tools to create a compelling resume that highlights your transferable skills and positions you for success in your new career.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Build Career-Switch Resume</Button>
                <Button variant="outline">Optimize for New Field</Button>
                <Button variant="outline">Check ATS Compatibility</Button>
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
