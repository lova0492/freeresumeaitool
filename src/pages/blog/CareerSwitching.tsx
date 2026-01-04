import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, User, Clock, TrendingUp, Target, Lightbulb } from 'lucide-react';

interface CareerSwitchingProps {
  onBack: () => void;
}

export default function CareerSwitching({ onBack }: CareerSwitchingProps) {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="mb-8">
            <Badge className="mb-4">Career Development</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Career Switching at 30+: A Data-Driven Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Evidence-based strategies for successful mid-career transitions backed by real statistics and examples
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                David Park
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 8, 2025
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
              alt="Career Switching at 30+"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-foreground">
            <section>
              <p>
                You're in your 30s or 40s, established in your career, but something's missing. Maybe you've outgrown your 
                industry, discovered a new passion, or simply realized your current path isn't sustainable long-term. The 
                thought of starting over feels both exciting and terrifying. Is it too late to switch careers?
              </p>
              <p>
                The data says no—and it's more common than you think. According to a 2024 study by the Bureau of Labor 
                Statistics, the average person changes careers 3-7 times during their working life, with a significant 
                portion of these transitions happening after age 30. A LinkedIn survey found that 49% of professionals 
                have made a major career change, and 32% of those did so after turning 30.
              </p>
              <p>
                But successful career transitions don't happen by accident. They require strategy, preparation, and realistic 
                expectations. This guide provides a data-driven roadmap for making your career switch successful, based on 
                research and real-world examples from professionals who've done it.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">The Reality of Career Switching: What the Data Shows</h2>
              <p>
                Before diving into strategies, let's establish what the research tells us about mid-career transitions. 
                Understanding these statistics helps set realistic expectations and identify potential challenges.
              </p>

              <div className="grid gap-4 md:grid-cols-2 my-6">
                <Card className="p-6 bg-muted/50">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">73%</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Of career changers report being happier in their new field, according to a 2023 Indeed survey
                  </p>
                </Card>

                <Card className="p-6 bg-muted/50">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">6-12 months</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average time to secure a new role in a different field, with preparation starting 12-18 months before
                  </p>
                </Card>

                <Card className="p-6 bg-muted/50">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">15-20%</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Initial salary decrease is common, but 65% reach or exceed their previous salary within 2-3 years
                  </p>
                </Card>

                <Card className="p-6 bg-muted/50">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">82%</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Of successful career changers leveraged transferable skills from their previous roles
                  </p>
                </Card>
              </div>

              <p>
                These numbers tell an important story: career switching is challenging but achievable, often requires 
                short-term sacrifice for long-term gain, and success depends heavily on strategic planning and leveraging 
                existing strengths.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Phase 1: Self-Assessment and Research (Months 1-3)</h2>
              <p className="mb-6">
                The foundation of a successful career switch is thorough self-assessment and market research. Rushing this 
                phase is the #1 reason career transitions fail.
              </p>

              <Card className="p-6 mb-4 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Identify Your Transferable Skills</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      List every skill you've developed in your current career—both technical and soft skills. Then research 
                      which of these are valuable in your target field. A study by Harvard Business Review found that 
                      professionals who successfully identified and articulated 5-7 transferable skills were 3x more likely 
                      to secure interviews in new fields.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> A marketing manager transitioning to UX design might highlight: data analysis, 
                      user research, project management, stakeholder communication, and A/B testing—all directly applicable 
                      to UX roles.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Conduct Informational Interviews</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Talk to at least 10-15 people currently working in your target field. Ask about daily responsibilities, 
                      required skills, career progression, and industry challenges. Research shows that 70% of successful 
                      career changers conducted extensive informational interviews before making their move.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Key Questions:</strong> What does a typical day look like? What skills are most valuable? 
                      What do you wish you'd known before entering this field? How did you break in? What's the realistic 
                      salary range for someone with my experience level?
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Analyze Job Market Demand</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use data from LinkedIn, Indeed, and Glassdoor to understand demand in your target field. Look at job 
                      posting frequency, required qualifications, salary ranges, and growth projections. The Bureau of Labor 
                      Statistics projects that healthcare, technology, and renewable energy sectors will see the highest 
                      growth through 2030.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Red Flags:</strong> Declining job postings, stagnant salaries, or industries facing disruption. 
                      Don't switch into a field that's already contracting unless you have a very specific niche.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Calculate Your Financial Runway</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Be realistic about finances. Most career changers experience a temporary income reduction. Calculate 
                      how long you can sustain yourself during the transition, including potential training costs, reduced 
                      income, and job search expenses. Financial advisors recommend having 6-12 months of expenses saved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Budget Considerations:</strong> Training/certification costs ($500-$5,000+), reduced income 
                      during transition, networking expenses, and emergency fund for unexpected delays.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Phase 2: Skill Development and Credentialing (Months 4-9)</h2>
              <p className="mb-6">
                Once you've validated your target field, it's time to build the specific skills and credentials you'll need. 
                This phase requires the most time and investment but is crucial for credibility.
              </p>

              <Card className="p-6 mb-4 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Strategic Upskilling</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Focus on the 3-5 most in-demand skills in your target field. According to LinkedIn Learning's 2024 
                      Workplace Learning Report, professionals who focused on mastering a few key skills rather than 
                      superficially learning many were 2.5x more likely to successfully transition.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Effective Learning Paths:</strong> Online courses (Coursera, Udemy, LinkedIn Learning), 
                      bootcamps for intensive training, professional certifications, and hands-on projects. Prioritize 
                      programs that offer portfolio-building opportunities and industry-recognized credentials.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Build a Portfolio of Evidence</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Create tangible proof of your new skills. This is especially critical for career changers because you 
                      lack traditional experience. A 2023 study found that 68% of hiring managers for career changers 
                      prioritized portfolios and project work over formal credentials.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Portfolio Ideas:</strong> Personal projects, freelance work, volunteer projects, open-source 
                      contributions, case studies, or pro bono work for nonprofits. Document your process, challenges, and 
                      results—not just the final product.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Gain Practical Experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Find ways to get hands-on experience while still employed. This might mean taking on relevant projects 
                      at your current job, freelancing on weekends, or volunteering your new skills. Research shows that 
                      candidates with even 3-6 months of practical experience in their new field are 4x more likely to be 
                      hired than those with only theoretical knowledge.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Real Example:</strong> Sarah, a 35-year-old accountant transitioning to data analytics, spent 
                      6 months building dashboards for her current employer's finance team, creating a portfolio of real 
                      business analytics projects that helped her land a data analyst role.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Network Strategically</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Start building relationships in your target industry immediately. Attend industry events, join 
                      professional associations, participate in online communities, and connect with people on LinkedIn. 
                      Studies consistently show that 70-80% of jobs are filled through networking, and this is even more 
                      critical for career changers.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Networking Strategy:</strong> Aim for 5-10 meaningful connections per month. Focus on quality 
                      over quantity—build genuine relationships by offering value, asking thoughtful questions, and staying 
                      engaged with your network's content and activities.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Phase 3: Job Search and Positioning (Months 10-15)</h2>
              <p className="mb-6">
                With skills and experience in place, it's time to position yourself effectively and launch your job search. 
                This phase requires a different approach than traditional job hunting.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Craft Your Career Change Narrative</h3>
              <p className="mb-4">
                Your story is your most powerful tool. Employers need to understand why you're changing careers and why 
                you're a good bet despite lacking traditional experience. A compelling narrative addresses three questions:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Why are you leaving your current field?</strong> (Focus on what you're moving toward, not away from)</li>
                <li><strong>Why this new field?</strong> (Show genuine passion backed by research and preparation)</li>
                <li><strong>Why should they take a chance on you?</strong> (Highlight transferable skills and new competencies)</li>
              </ul>

              <Card className="p-6 mb-6 bg-muted/50">
                <h4 className="font-semibold mb-3">Example Career Change Narrative:</h4>
                <p className="text-sm text-muted-foreground italic">
                  "After 8 years in corporate finance, I discovered my passion for user experience while leading a project 
                  to redesign our internal financial tools. I realized that my analytical skills, combined with my newfound 
                  interest in human-centered design, could create more impact in UX. Over the past year, I've completed a 
                  UX certification, built a portfolio of 5 projects including a redesign that improved user task completion 
                  by 40%, and conducted user research for a local nonprofit. I bring a unique combination of business acumen, 
                  data-driven decision making, and fresh UX skills that can help your team create products that are both 
                  user-friendly and financially viable."
                </p>
              </Card>

              <h3 className="text-xl font-semibold mt-6 mb-3">Optimize Your Resume for Career Change</h3>
              <p className="mb-4">
                Your resume needs to bridge your old career and new direction. Use a hybrid format that emphasizes skills 
                and relevant projects over chronological work history.
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Lead with a strong summary</strong> that explicitly states your career transition and value proposition</li>
                <li><strong>Create a "Relevant Skills" section</strong> highlighting transferable and newly acquired skills</li>
                <li><strong>Include a "Projects" section</strong> showcasing your work in the new field</li>
                <li><strong>Reframe past experience</strong> to emphasize relevant aspects of previous roles</li>
                <li><strong>Add certifications and training</strong> prominently to demonstrate commitment</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Target the Right Opportunities</h3>
              <p className="mb-4">
                Not all roles are equally accessible to career changers. Strategic targeting increases your success rate:
              </p>

              <Card className="p-6 mb-4 bg-primary/5">
                <h4 className="font-semibold mb-2">Best Opportunities for Career Changers:</h4>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Smaller companies and startups (more flexible, value diverse backgrounds)</li>
                  <li>Roles that explicitly value transferable skills</li>
                  <li>Entry to mid-level positions in your new field (not senior roles initially)</li>
                  <li>Companies known for hiring career changers</li>
                  <li>Roles at the intersection of your old and new fields</li>
                </ul>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold mb-2">Real Success Story:</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>James, 38, Teacher → Software Developer:</strong> After 12 years teaching high school math, James 
                  completed a coding bootcamp and spent 6 months building educational apps. He targeted ed-tech companies 
                  where his teaching experience was an asset, not a liability. His unique perspective on how students learn 
                  helped him land a developer role at an online learning platform, where he now builds features informed by 
                  his classroom experience. His salary started 10% lower than his teaching income but increased 35% within 
                  two years.
                </p>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
              <p className="mb-6">
                Learning from others' mistakes can save you months of frustration. Here are the most common pitfalls that 
                derail career transitions:
              </p>

              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Switching Too Quickly</h3>
                  <p className="text-sm text-muted-foreground">
                    Rushing the transition without adequate preparation is the #1 reason career changes fail. Give yourself 
                    12-18 months minimum to build skills, gain experience, and network before actively job searching.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Underestimating Financial Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Many career changers face temporary income reduction. Plan for this reality rather than hoping to maintain 
                    your current salary immediately. Build a financial cushion and adjust your lifestyle expectations.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Ignoring Transferable Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't dismiss your previous experience as irrelevant. Your unique background is an asset that differentiates 
                    you from traditional candidates. Frame it as a strength, not a weakness.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-lg font-semibold mb-2">Pursuing Passion Without Market Research</h3>
                  <p className="text-sm text-muted-foreground">
                    Passion is important, but it must align with market demand. Research job availability, salary potential, 
                    and growth prospects before committing to a new field. Passion + practicality = sustainable career change.
                  </p>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Final Thoughts: It's Never Too Late</h2>
              <p>
                Career switching at 30+ is challenging, but the data and countless success stories prove it's absolutely 
                achievable. The key is approaching it strategically: thorough research, systematic skill-building, strategic 
                networking, and realistic expectations.
              </p>
              <p>
                Yes, you'll face obstacles. You'll compete with younger candidates who have traditional backgrounds. You 
                might take a temporary step back financially. But you'll also bring maturity, diverse experience, and proven 
                professional skills that many traditional candidates lack.
              </p>
              <p>
                The professionals who successfully switch careers share common traits: they're patient, strategic, persistent, 
                and willing to invest in themselves. They don't expect overnight success, but they're committed to the journey.
              </p>
              <p>
                If you're considering a career change, start today. Not by quitting your job, but by taking the first small 
                step: research, informational interviews, or enrolling in an introductory course. The best time to plant a 
                tree was 20 years ago. The second best time is now.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="rounded-lg bg-primary/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Make Your Career Switch?</h2>
              <p className="mb-6">
                Start building your career change resume today. Our AI-powered tools help you identify transferable skills, 
                optimize your resume for new industries, and position yourself effectively for your next chapter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={onBack}>
                  Build Your Career Change Resume
                </Button>
                <Button size="lg" variant="outline" onClick={onBack}>
                  Explore Career Resources
                </Button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
