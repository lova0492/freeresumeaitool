import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface EntryLevelMistakesProps {
  onBack: () => void;
}

export default function EntryLevelMistakes({ onBack }: EntryLevelMistakesProps) {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="mb-8">
            <Badge className="mb-4">Career Tips</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Entry-Level Resume Mistakes That Cost You Interviews
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Common pitfalls fresh graduates make and how to fix them before hitting submit
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Emily Rodriguez
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 10, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                6 min read
              </span>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-8">
            <img
              src="/assets/generated/blog-header.dim_1000x300.png"
              alt="Entry-Level Resume Mistakes"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-foreground">
            <section>
              <p>
                You've just graduated, diploma in hand, ready to launch your career. You craft what you think is a solid resume, 
                send out dozens of applications, and then... crickets. Sound familiar? You're not alone. Most entry-level 
                candidates make the same preventable mistakes that immediately disqualify them from consideration.
              </p>
              <p>
                The good news? These mistakes are easy to fix once you know what they are. As someone who's reviewed thousands 
                of entry-level resumes and spoken with hiring managers across industries, I'm sharing the most common errors 
                that cost fresh graduates interviews—and exactly how to correct them.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Mistake #1: Generic Objective Statements</h2>
              
              <Card className="p-6 mb-4 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What It Looks Like</h3>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      "Seeking a challenging position in a dynamic organization where I can utilize my skills and grow professionally."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why It Fails:</strong> This tells the employer nothing about you or what you offer. It's vague, 
                      self-focused, and could apply to literally any job. Recruiters see hundreds of these and immediately skip 
                      to the next section—or the next candidate.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">The Fix</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Replace generic objectives with a targeted professional summary that highlights your relevant skills, 
                      education, and what you bring to the specific role. Make it about the employer's needs, not your desires.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      <strong>Better Example:</strong> "Recent Computer Science graduate with hands-on experience in Python 
                      and Java through academic projects and internships. Developed a mobile app with 1,000+ downloads and 
                      contributed to open-source projects. Seeking to apply technical skills and problem-solving abilities 
                      to software development roles at innovative tech companies."
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Mistake #2: Listing Responsibilities Instead of Achievements</h2>
              
              <Card className="p-6 mb-4 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What It Looks Like</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Marketing Intern</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Assisted with social media management</li>
                      <li>Attended team meetings</li>
                      <li>Helped create marketing materials</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Why It Fails:</strong> These are job duties, not accomplishments. They don't show impact, results, 
                      or what made you different from any other intern. Employers want to know what you achieved, not just what 
                      you were supposed to do.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">The Fix</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Transform responsibilities into achievement-focused bullet points using the CAR method: Context, Action, Result. 
                      Include numbers, percentages, or specific outcomes whenever possible.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Better Example:</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Managed company Instagram account, growing followers by 45% (2,000 to 2,900) in 3 months through 
                      targeted content strategy and engagement campaigns</li>
                      <li>Created 15+ marketing materials including brochures and social media graphics, resulting in 20% 
                      increase in event attendance</li>
                      <li>Conducted competitor analysis and presented findings to marketing team, leading to adoption of 
                      2 new campaign strategies</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Mistake #3: Including Irrelevant Information</h2>
              
              <Card className="p-6 mb-4 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What It Looks Like</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Including high school achievements when you have a college degree, listing every job since age 16 
                      (including that summer as a camp counselor), or adding hobbies like "reading" and "traveling" that 
                      don't relate to the job.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why It Fails:</strong> Irrelevant information dilutes your message and wastes valuable resume 
                      space. It makes you look unfocused and suggests you don't understand what employers are looking for. 
                      Recruiters spend an average of 6-7 seconds on initial resume scans—don't waste that time on irrelevant details.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">The Fix</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Apply the "relevance test" to every line on your resume: Does this directly support my candidacy for 
                      this specific job? If not, remove it. Focus on recent, relevant experiences and skills that align with 
                      the position you're applying for.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Keep:</strong> College education, relevant internships, projects that demonstrate applicable 
                      skills, technical proficiencies, and leadership roles in relevant organizations.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Remove:</strong> High school information (unless you're still in college), unrelated part-time 
                      jobs from years ago, generic hobbies, and outdated skills.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Mistake #4: Poor Formatting and Design Choices</h2>
              
              <Card className="p-6 mb-4 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What It Looks Like</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Overly creative designs with multiple colors, unusual fonts, graphics, photos, or text boxes. Alternatively, 
                      walls of text with no white space, inconsistent formatting, or tiny fonts to cram everything onto one page.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why It Fails:</strong> Creative designs often fail to parse correctly through Applicant Tracking 
                      Systems (ATS), meaning your resume never reaches human eyes. Poor formatting makes your resume hard to 
                      read quickly, and recruiters won't struggle through it when they have hundreds of other applications.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">The Fix</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use a clean, professional format with clear section headings, consistent fonts (stick to one or two 
                      standard fonts like Arial, Calibri, or Times New Roman), and plenty of white space. Use bullet points 
                      for easy scanning, and keep font size between 10-12pt for body text.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Best Practices:</strong> Single-column layout, standard margins (0.5-1 inch), clear section 
                      headers in bold, consistent date formatting, and strategic use of bold/italics for emphasis. Save 
                      creativity for your portfolio or personal website.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Mistake #5: Underselling Academic Projects and Coursework</h2>
              
              <Card className="p-6 mb-4 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What It Looks Like</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Either completely omitting academic projects or listing them with minimal detail: "Completed senior 
                      capstone project" or "Relevant coursework: Data Structures, Algorithms, Database Management."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why It Fails:</strong> As an entry-level candidate, your academic work is valuable experience. 
                      Underselling it makes you appear less qualified than you are. Employers understand you're new to the 
                      workforce—they want to see how you've applied your education practically.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">The Fix</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Create a dedicated "Projects" section and treat academic projects like professional work experience. 
                      Describe the problem you solved, technologies you used, your specific contributions, and the outcomes. 
                      Include links to GitHub repositories, live demos, or portfolios when applicable.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Better Example:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      <strong>E-Commerce Website Development (Senior Capstone Project)</strong><br />
                      Designed and developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented 
                      user authentication, shopping cart functionality, and payment processing. Collaborated with 3 team members 
                      using Agile methodology. Achieved 98% test coverage and deployed to AWS. [GitHub link]
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Mistake #6: Typos, Grammar Errors, and Inconsistencies</h2>
              
              <Card className="p-6 mb-4 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What It Looks Like</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Spelling mistakes, grammatical errors, inconsistent verb tenses (mixing past and present), varying date 
                      formats, or incorrect contact information.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why It Fails:</strong> Errors signal carelessness and lack of attention to detail—qualities no 
                      employer wants. A single typo can be the difference between getting an interview and being immediately 
                      rejected. It's harsh, but it's reality.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">The Fix</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Proofread multiple times, use spell-check tools, and have at least two other people review your resume. 
                      Read it aloud to catch awkward phrasing. Check that all dates are formatted consistently, all bullet 
                      points use the same verb tense (past tense for previous roles, present for current), and your contact 
                      information is accurate.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Pro Tip:</strong> After you think your resume is perfect, wait 24 hours and review it again with 
                      fresh eyes. You'll often catch errors you missed before. Also, print it out—errors are easier to spot on 
                      paper than on screen.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Final Thoughts: Your Resume Is Your First Impression</h2>
              <p>
                These mistakes are common, but they're also completely avoidable. The difference between a resume that gets 
                interviews and one that gets ignored often comes down to these fundamental issues. Fix them, and you'll 
                immediately stand out from the majority of entry-level candidates.
              </p>
              <p>
                Remember: your resume isn't just a list of what you've done—it's a marketing document that sells your potential. 
                As an entry-level candidate, you might not have years of experience, but you have education, projects, internships, 
                and transferable skills. Present them professionally, focus on achievements over duties, and tailor everything to 
                the specific role you're applying for.
              </p>
              <p>
                Take the time to get it right. Your future self will thank you when the interview invitations start rolling in.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="rounded-lg bg-primary/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Build a Mistake-Free Resume</h2>
              <p className="mb-6">
                Use our free AI-powered resume builder designed specifically for entry-level candidates. Get instant feedback 
                on common mistakes, ATS optimization, and professional formatting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={onBack}>
                  Start Building Your Resume
                </Button>
                <Button size="lg" variant="outline" onClick={onBack}>
                  Check Your Current Resume
                </Button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
