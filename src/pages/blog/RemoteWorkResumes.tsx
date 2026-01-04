import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Wifi, Video, MessageSquare } from 'lucide-react';

interface RemoteWorkResumesProps {
  onBack: () => void;
}

export default function RemoteWorkResumes({ onBack }: RemoteWorkResumesProps) {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="mb-8">
            <Badge className="mb-4">Job Search</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Remote Work Resumes: How to Stand Out in 2025
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Essential strategies for showcasing remote work skills and landing your next work-from-anywhere opportunity
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Michael Chen
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 3, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                9 min read
              </span>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-8">
            <img
              src="/assets/generated/blog-header.dim_1000x300.png"
              alt="Remote Work Resumes"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-foreground">
            <section>
              <p>
                Remote work has evolved from a pandemic necessity to a permanent fixture of the modern workplace. As of 2025, 
                over 35% of jobs offer remote or hybrid options, and that number continues to grow. But here's what many job 
                seekers don't realize: applying for remote positions requires a fundamentally different approach than 
                traditional in-office roles.
              </p>
              <p>
                Remote employers aren't just looking for someone who can do the job—they're looking for someone who can do 
                the job independently, communicate effectively across digital channels, and thrive without daily in-person 
                supervision. Your resume needs to prove you have these capabilities before you even get to the interview stage.
              </p>
              <p>
                This guide reveals exactly how to position yourself as an ideal remote candidate, what skills to emphasize, 
                and how to structure your resume to stand out in the competitive remote job market.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">What Makes Remote Resumes Different</h2>
              <p className="mb-6">
                Remote work requires a unique skill set that goes beyond your core job competencies. Understanding these 
                differences is the first step to creating an effective remote-focused resume.
              </p>

              <div className="grid gap-4 md:grid-cols-2 my-6">
                <Card className="p-6 bg-muted/50">
                  <h3 className="text-lg font-semibold mb-3">Traditional Resume Focus</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Technical skills and expertise</li>
                    <li>In-person collaboration</li>
                    <li>Office-based achievements</li>
                    <li>Local market experience</li>
                    <li>Face-to-face communication</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <h3 className="text-lg font-semibold mb-3">Remote Resume Focus</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Technical skills + remote work capabilities</li>
                    <li>Asynchronous collaboration</li>
                    <li>Distributed team achievements</li>
                    <li>Global/timezone flexibility</li>
                    <li>Digital communication mastery</li>
                  </ul>
                </Card>
              </div>

              <p>
                The key difference? Remote employers need confidence that you can work independently, communicate proactively, 
                and deliver results without constant oversight. Your resume must explicitly demonstrate these capabilities.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Essential Remote Work Skills to Highlight</h2>
              <p className="mb-6">
                These are the skills remote employers actively search for. If you have experience with any of these, make 
                them prominent on your resume.
              </p>

              <div className="space-y-4">
                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Wifi className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Self-Management and Autonomy</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Remote work requires exceptional self-discipline and time management. Employers need to know you can 
                        prioritize tasks, meet deadlines, and stay productive without supervision.
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>How to Demonstrate:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>"Independently managed 15+ client projects simultaneously, maintaining 98% on-time delivery rate"</li>
                        <li>"Self-directed research and implementation of new marketing automation system, reducing manual work by 40%"</li>
                        <li>"Proactively identified and resolved technical issues, reducing system downtime by 25% without escalation"</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Digital Communication Excellence</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        In remote work, 90% of communication happens through digital channels. Strong written communication, 
                        clarity in virtual meetings, and proactive updates are critical.
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>How to Demonstrate:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>"Created comprehensive documentation for 20+ processes, reducing onboarding time by 50%"</li>
                        <li>"Led weekly virtual team meetings across 3 time zones, maintaining 95% attendance and engagement"</li>
                        <li>"Developed clear communication protocols that improved cross-team collaboration efficiency by 30%"</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Video className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Remote Collaboration Tools Proficiency</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Familiarity with remote work tools is non-negotiable. Employers want to see you're comfortable with 
                        the digital infrastructure of remote work.
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Key Tools to Mention (if applicable):</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li><strong>Communication:</strong> Slack, Microsoft Teams, Zoom, Google Meet</li>
                        <li><strong>Project Management:</strong> Asana, Trello, Jira, Monday.com, ClickUp</li>
                        <li><strong>Collaboration:</strong> Google Workspace, Microsoft 365, Notion, Confluence</li>
                        <li><strong>Time Tracking:</strong> Toggl, Harvest, Clockify</li>
                        <li><strong>File Sharing:</strong> Dropbox, Google Drive, OneDrive</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3">
                        <strong>Example:</strong> "Utilized Asana for project management and Slack for team communication, 
                        coordinating deliverables across 8 remote team members in 5 countries"
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Results-Oriented Mindset</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Remote employers care about outcomes, not hours logged. Demonstrate that you focus on delivering 
                        measurable results rather than just completing tasks.
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>How to Demonstrate:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>"Increased sales by 35% through strategic outreach campaigns, working independently from home office"</li>
                        <li>"Delivered 12 major projects ahead of schedule while working remotely, exceeding quality benchmarks"</li>
                        <li>"Achieved 120% of quarterly targets through self-directed prospecting and relationship building"</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">5. Adaptability and Problem-Solving</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Remote workers often need to troubleshoot issues independently and adapt to changing circumstances 
                        without immediate support.
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>How to Demonstrate:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>"Quickly adapted to new project management software, creating training materials for 20+ team members"</li>
                        <li>"Resolved technical challenges independently, maintaining productivity during system migrations"</li>
                        <li>"Pivoted strategy mid-project based on data insights, improving campaign performance by 45%"</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Structuring Your Remote-Focused Resume</h2>
              <p className="mb-6">
                The structure of your resume should make your remote work capabilities immediately obvious. Here's how to 
                organize it for maximum impact.
              </p>

              <Card className="p-6 mb-4 bg-muted/50">
                <h3 className="text-lg font-semibold mb-3">Professional Summary: Lead with Remote Experience</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Your summary should immediately establish your remote work credentials. Mention years of remote experience, 
                  distributed team collaboration, and key remote-relevant achievements.
                </p>
                <p className="text-sm text-muted-foreground italic mb-2">
                  <strong>Example:</strong>
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Results-driven Marketing Manager with 5+ years of remote work experience leading distributed teams across 
                  multiple time zones. Proven track record of delivering 20+ successful campaigns while working independently, 
                  utilizing Asana, Slack, and Google Workspace for seamless collaboration. Increased organic traffic by 200% 
                  through self-directed SEO strategy and content optimization."
                </p>
              </Card>

              <Card className="p-6 mb-4 bg-muted/50">
                <h3 className="text-lg font-semibold mb-3">Skills Section: Create a "Remote Work Skills" Category</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  In addition to your technical skills, create a dedicated section for remote work competencies. This makes 
                  it easy for ATS systems and recruiters to identify your remote capabilities.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Example:</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Remote Work Skills:</strong> Asynchronous Communication, Virtual Team Leadership, Zoom/Google Meet, 
                  Slack, Asana, Time Zone Management, Self-Directed Project Management, Digital Documentation
                </p>
              </Card>

              <Card className="p-6 mb-4 bg-muted/50">
                <h3 className="text-lg font-semibold mb-3">Work Experience: Emphasize Remote Context</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For each role, explicitly mention if it was remote, hybrid, or involved distributed team collaboration. 
                  Highlight achievements that demonstrate remote work success.
                </p>
                <p className="text-sm text-muted-foreground italic mb-2">
                  <strong>Example:</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Senior Software Developer (Remote)</strong> | TechCorp Inc. | Jan 2022 - Present
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1 mt-2">
                  <li>Collaborated with distributed team of 12 developers across 6 countries using GitHub, Jira, and Slack</li>
                  <li>Independently architected and deployed 3 major features, reducing load time by 40%</li>
                  <li>Mentored 4 junior developers remotely through pair programming and code reviews</li>
                  <li>Maintained 99.5% sprint completion rate while working asynchronously with global team</li>
                </ul>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h3 className="text-lg font-semibold mb-3">Additional Sections: Showcase Remote Credentials</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If you have certifications, training, or achievements related to remote work, create a dedicated section 
                  to highlight them.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Examples:</strong>
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1 mt-2">
                  <li>Remote Work Professional Certification (Remote-how)</li>
                  <li>Virtual Team Management Course (LinkedIn Learning)</li>
                  <li>Asynchronous Communication Best Practices Workshop</li>
                  <li>Member, Remote Work Association</li>
                </ul>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Keywords for Remote Job Applications</h2>
              <p className="mb-6">
                Remote job postings use specific keywords that you should incorporate into your resume. Here are the most 
                common terms to include (where genuinely applicable):
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-6 bg-primary/5">
                  <h3 className="text-lg font-semibold mb-3">Work Style Keywords</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Remote work</li>
                    <li>Distributed team</li>
                    <li>Virtual collaboration</li>
                    <li>Asynchronous communication</li>
                    <li>Self-directed</li>
                    <li>Independent worker</li>
                    <li>Home office</li>
                    <li>Work from anywhere</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <h3 className="text-lg font-semibold mb-3">Capability Keywords</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Time zone flexibility</li>
                    <li>Digital communication</li>
                    <li>Virtual meetings</li>
                    <li>Online collaboration</li>
                    <li>Remote project management</li>
                    <li>Cloud-based tools</li>
                    <li>Video conferencing</li>
                    <li>Documentation</li>
                  </ul>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <p className="mb-6">
                Even experienced professionals make these errors when applying for remote positions. Avoid them to maximize 
                your chances.
              </p>

              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Assuming Remote Work Experience Is Obvious</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't assume recruiters will infer that you can work remotely. Explicitly state your remote work 
                    experience, even if it seems obvious. Use phrases like "remote," "distributed team," or "virtual 
                    collaboration" throughout your resume.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Focusing Only on Technical Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Technical competence is necessary but not sufficient for remote roles. Employers need to see evidence 
                    of communication skills, self-management, and collaboration abilities. Balance technical and soft skills.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Neglecting to Mention Remote Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Listing tools like Slack, Zoom, Asana, or Trello might seem basic, but it signals to employers that 
                    you're familiar with the remote work ecosystem. Don't skip these—they're often used as ATS keywords.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Using Vague Language</h3>
                  <p className="text-sm text-muted-foreground">
                    Phrases like "team player" or "good communicator" are too generic. Be specific: "Coordinated with 
                    distributed team of 10 across 4 time zones using Slack and Asana" is much more compelling and credible.
                  </p>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Final Thoughts: Remote Work Is a Skill Set</h2>
              <p>
                The ability to work remotely effectively is a valuable, marketable skill set—not just a work arrangement. 
                Treat it as such on your resume. Just as you would highlight proficiency in a programming language or 
                project management methodology, explicitly showcase your remote work capabilities.
              </p>
              <p>
                In 2025's competitive remote job market, the candidates who stand out are those who can demonstrate not 
                just that they can do the job, but that they can do it exceptionally well in a distributed, asynchronous 
                environment. Your resume should leave no doubt that you're one of those candidates.
              </p>
              <p>
                Remember: remote employers are taking a leap of faith by hiring someone they may never meet in person. 
                Your resume is your opportunity to build that trust by providing concrete evidence of your remote work 
                success. Make it count.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="rounded-lg bg-primary/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Build Your Remote-Ready Resume</h2>
              <p className="mb-6">
                Use our AI-powered resume builder to create a remote-optimized resume that highlights your distributed 
                work capabilities and stands out to remote employers. Get started in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={onBack}>
                  Create Remote Resume
                </Button>
                <Button size="lg" variant="outline" onClick={onBack}>
                  Optimize Existing Resume
                </Button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
