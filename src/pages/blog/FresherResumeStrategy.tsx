import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface FresherResumeStrategyProps {
  onBack: () => void;
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function FresherResumeStrategy({ onBack, onNavigateToBlogPost }: FresherResumeStrategyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relatedArticles = [
    {
      id: 'career-switch-guide',
      title: 'Career Switching in 2025: A Step-by-Step Blueprint',
      excerpt: 'Strategic approach for career transitions with actionable steps.',
      category: 'Career Development',
      readTime: '10 min',
    },
    {
      id: 'keywords-that-work',
      title: 'Resume Keywords That Actually Get You Hired',
      excerpt: 'Learn which keywords matter most for entry-level positions.',
      category: 'Resume Writing',
      readTime: '7 min',
    },
    {
      id: 'ats-formatting-rules',
      title: 'ATS-Friendly Formatting: The Complete Checklist',
      excerpt: 'Ensure your fresher resume passes ATS screening.',
      category: 'ATS Insights',
      readTime: '6 min',
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
            <Badge className="mb-4">Career Tips</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              The Fresher's Guide to Standing Out Without Experience
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Sarah Johnson
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 5, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                9 min read
              </span>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                "You need experience to get a job, but you need a job to get experience." This frustrating catch-22 is something every fresh graduate faces. The good news? Employers hiring entry-level candidates don't expect years of professional experience—they're looking for potential, relevant skills, and the ability to learn quickly.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This guide shows you how to create a compelling resume that showcases your capabilities even without traditional work experience. Based on successful strategies from recent graduates who landed jobs at top companies, here's how to stand out as a fresher.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Reframe Your Mindset: You Have More Than You Think</h2>
              <p className="leading-relaxed text-muted-foreground">
                The biggest mistake freshers make is thinking they have "nothing" to put on their resume. In reality, you have academic projects, internships, volunteer work, extracurricular activities, and personal projects—all of which demonstrate valuable skills.
              </p>
              <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h3 className="mb-2 font-semibold">What Counts as Experience:</h3>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Academic Projects:</strong> Capstone projects, research papers, group assignments</li>
                  <li><strong>Internships:</strong> Even short-term or unpaid internships demonstrate real-world exposure</li>
                  <li><strong>Freelance Work:</strong> Small gigs, even for friends or family, show initiative</li>
                  <li><strong>Volunteer Activities:</strong> Nonprofit work, community service, event organization</li>
                  <li><strong>Personal Projects:</strong> Apps you built, websites you created, content you published</li>
                  <li><strong>Leadership Roles:</strong> Club president, team captain, event coordinator</li>
                  <li><strong>Competitions:</strong> Hackathons, case competitions, academic contests</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Structure Your Fresher Resume Effectively</h2>
              <p className="leading-relaxed text-muted-foreground">
                When you lack extensive work experience, the structure of your resume becomes even more important. Here's the optimal format for freshers:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">1. Contact Information & Professional Summary</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Start with a strong summary that highlights your education, key skills, and career goals. Make it clear what value you bring despite being a fresher.
                  </p>
                  <p className="text-xs italic text-muted-foreground">
                    Example: "Recent Computer Science graduate with strong foundation in Python, Java, and web development. Completed 3 full-stack projects and 6-month internship at tech startup. Seeking software developer role to apply problem-solving skills and contribute to innovative solutions."
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">2. Education (Place This High)</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    As a fresher, your education is your strongest credential. Include your degree, university, GPA (if above 3.0), relevant coursework, and academic achievements.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Don't just list your degree—mention relevant courses, honors, scholarships, or academic projects that relate to your target job.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">3. Skills Section</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    List technical skills, tools, and technologies you've learned. Be honest—only include skills you can actually demonstrate if asked.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Organize by category: Programming Languages, Tools & Software, Soft Skills, Languages
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">4. Projects (This Is Your Secret Weapon)</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Dedicate significant space to projects. Describe what you built, technologies used, challenges solved, and results achieved.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Include links to GitHub repos, live demos, or portfolios where employers can see your work.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">5. Internships & Work Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Even short internships or part-time jobs demonstrate work ethic and professional exposure. Focus on what you learned and contributed.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold">6. Extracurricular Activities & Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Club memberships, volunteer work, and leadership roles show soft skills like teamwork, communication, and initiative.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">How to Describe Projects Like a Professional</h2>
              <p className="leading-relaxed text-muted-foreground">
                Projects are where freshers can truly shine. Here's how to present them in a way that impresses employers:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-destructive">❌ Weak Project Description:</h3>
                  <p className="text-sm italic text-muted-foreground">
                    "Built a website using HTML, CSS, and JavaScript. It has a login page and displays user information."
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Problems: Vague, no context, no impact, sounds like a basic tutorial project.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-primary">✓ Strong Project Description:</h3>
                  <p className="text-sm italic text-muted-foreground">
                    "Developed a full-stack student management system using React, Node.js, and MongoDB. Implemented secure authentication, role-based access control, and real-time data updates. Deployed on AWS, serving 200+ users during university testing phase. Reduced manual record-keeping time by 60%."
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Strengths: Specific technologies, clear functionality, measurable impact, demonstrates real-world application.
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h3 className="mb-2 font-semibold">Project Description Formula:</h3>
                <p className="text-sm text-muted-foreground">
                  [Action Verb] + [What You Built] + [Technologies Used] + [Key Features] + [Impact/Results]
                </p>
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
                    Read More: Skills to Highlight & Common Mistakes
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold">Skills Freshers Should Highlight</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Certain skills are particularly valuable for entry-level candidates. Make sure these are prominent on your resume if you have them:
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Technical Skills (Field-Specific)</h3>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li><strong>Software Development:</strong> Programming languages, frameworks, version control (Git), databases</li>
                        <li><strong>Data Analysis:</strong> Excel, SQL, Python, data visualization tools (Tableau, Power BI)</li>
                        <li><strong>Digital Marketing:</strong> Google Analytics, social media platforms, content creation, SEO basics</li>
                        <li><strong>Design:</strong> Adobe Creative Suite, Figma, UI/UX principles, prototyping tools</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Transferable Soft Skills</h3>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li><strong>Communication:</strong> Presentation skills, technical writing, cross-functional collaboration</li>
                        <li><strong>Problem-Solving:</strong> Analytical thinking, debugging, creative solutions</li>
                        <li><strong>Learning Agility:</strong> Quick to pick up new technologies, self-taught skills</li>
                        <li><strong>Time Management:</strong> Meeting deadlines, juggling multiple projects</li>
                        <li><strong>Teamwork:</strong> Group projects, collaborative development, peer code reviews</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Certifications & Online Courses</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        Completed relevant online courses or certifications? List them! They show initiative and commitment to learning.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Examples: Google Analytics Certification, AWS Cloud Practitioner, Coursera specializations, freeCodeCamp certifications
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Building a Portfolio That Gets Noticed</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    For many fields (especially tech, design, writing, and marketing), a portfolio is as important as your resume. Here's how to create one:
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                      <h3 className="mb-2 font-semibold">Portfolio Essentials:</h3>
                      <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                        <li><strong>Quality Over Quantity:</strong> 3-5 strong projects are better than 10 mediocre ones</li>
                        <li><strong>Show Your Process:</strong> Explain your thinking, challenges faced, and solutions implemented</li>
                        <li><strong>Include Live Demos:</strong> Working links to projects, GitHub repos, or deployed applications</li>
                        <li><strong>Write Case Studies:</strong> For each major project, explain the problem, your approach, and the outcome</li>
                        <li><strong>Keep It Updated:</strong> Add new projects as you complete them, remove outdated work</li>
                        <li><strong>Make It Professional:</strong> Clean design, easy navigation, no broken links</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Portfolio Platforms:</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>Developers:</strong> GitHub, personal website, CodePen<br />
                        <strong>Designers:</strong> Behance, Dribbble, personal portfolio site<br />
                        <strong>Writers:</strong> Medium, personal blog, LinkedIn articles<br />
                        <strong>Marketers:</strong> Personal website showcasing campaigns, case studies
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Common Fresher Resume Mistakes to Avoid</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #1: Generic Objective Statements</h3>
                      <p className="text-sm text-muted-foreground">
                        Avoid: "Seeking a challenging position in a reputed organization to utilize my skills."<br />
                        Instead: Write a specific summary highlighting your education, key skills, and what you're looking for.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #2: Listing Responsibilities Instead of Achievements</h3>
                      <p className="text-sm text-muted-foreground">
                        Don't just say what you were supposed to do—show what you actually accomplished. Use metrics and specific examples whenever possible.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #3: Including Irrelevant Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Your high school achievements, hobbies like "reading and traveling," or personal details like marital status don't belong on a professional resume.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #4: Poor Formatting and Typos</h3>
                      <p className="text-sm text-muted-foreground">
                        Spelling errors, inconsistent formatting, or cluttered layouts make you look careless. Proofread multiple times and have others review your resume.
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
                      <h3 className="mb-2 font-semibold text-destructive">Mistake #5: Underselling Your Projects</h3>
                      <p className="text-sm text-muted-foreground">
                        Don't dismiss your academic or personal projects as "just coursework." If you built something functional and learned valuable skills, it counts as real experience.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">How to Gain Experience as a Fresher</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    While building your resume, actively work on gaining more experience. Here are practical ways to do it:
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">1. Freelance Projects</h3>
                      <p className="text-sm text-muted-foreground">
                        Take on small projects through platforms like Upwork, Fiverr, or Freelancer. Even low-paying gigs build your portfolio and provide real client experience.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">2. Open Source Contributions</h3>
                      <p className="text-sm text-muted-foreground">
                        Contribute to open-source projects on GitHub. This demonstrates collaboration skills, code quality, and initiative—all highly valued by employers.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">3. Volunteer Work</h3>
                      <p className="text-sm text-muted-foreground">
                        Offer your skills to nonprofits or small businesses. They often need help with websites, marketing, data analysis, etc., and it's real experience.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">4. Personal Projects</h3>
                      <p className="text-sm text-muted-foreground">
                        Build something you're passionate about. A well-executed personal project can be more impressive than a mediocre internship.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">5. Competitions and Hackathons</h3>
                      <p className="text-sm text-muted-foreground">
                        Participate in coding competitions, case competitions, or hackathons. Winning or even participating shows initiative and competitive skills.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Real Example: Fresher Resume That Worked</h2>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-3 font-semibold">Computer Science Graduate → Junior Developer at Tech Startup</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong>What Made It Work:</strong>
                      </p>
                      <ul className="list-inside list-disc space-y-1">
                        <li>Strong summary highlighting 3 programming languages and 2 frameworks</li>
                        <li>Detailed descriptions of 4 projects with GitHub links and live demos</li>
                        <li>Quantified achievements: "Optimized database queries, reducing load time by 40%"</li>
                        <li>Listed relevant coursework: Data Structures, Algorithms, Web Development</li>
                        <li>Included 3-month internship with specific contributions</li>
                        <li>Mentioned hackathon participation and open-source contributions</li>
                        <li>Clean, ATS-friendly formatting with clear section headings</li>
                      </ul>
                      <p className="mt-3">
                        <strong>Key Takeaway:</strong> The candidate didn't have years of experience, but demonstrated strong technical skills through projects, showed learning ability through coursework and self-study, and proved initiative through extracurricular activities.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold">Tailoring Your Resume for Different Industries</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Tech/Software Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Emphasize: Programming projects, GitHub profile, technical skills, hackathons, open-source contributions. Include links to your code and deployed applications.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Marketing/Communications</h3>
                      <p className="text-sm text-muted-foreground">
                        Emphasize: Content creation, social media campaigns, analytics skills, writing samples, volunteer marketing work. Include metrics like engagement rates or reach.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Finance/Accounting</h3>
                      <p className="text-sm text-muted-foreground">
                        Emphasize: Relevant coursework, Excel skills, financial modeling projects, certifications (CFA Level 1, etc.), attention to detail, analytical abilities.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="mb-2 font-semibold">Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Emphasize: Portfolio link (most important!), design tools proficiency, client projects, design competitions, understanding of UX principles.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            <section className="mt-12 rounded-lg bg-primary/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Final Takeaway</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Being a fresher doesn't mean you have nothing to offer. You have education, projects, skills, and potential—all of which are valuable to employers hiring entry-level candidates. The key is presenting what you have in a professional, compelling way that demonstrates your capabilities and readiness to contribute.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Focus on quality over quantity, be specific about your achievements, showcase your projects prominently, and continuously build your skills and portfolio. Every expert was once a beginner. Your first job is just the starting point of your career journey—make your resume show that you're ready to begin.
              </p>
            </section>

            <section className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-3 text-xl font-semibold">Build Your Fresher Resume</h3>
              <p className="mb-4 text-muted-foreground">
                Use our AI-powered tools to create a professional resume that highlights your potential and helps you land your first job.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Create Resume</Button>
                <Button variant="outline">View Templates</Button>
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
