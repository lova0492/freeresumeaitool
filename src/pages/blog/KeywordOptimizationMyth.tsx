import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, User, Clock, XCircle, CheckCircle2, Search } from 'lucide-react';

interface KeywordOptimizationMythProps {
  onBack: () => void;
}

export default function KeywordOptimizationMyth({ onBack }: KeywordOptimizationMythProps) {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="mb-8">
            <Badge className="mb-4">Resume Writing</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              The Keyword Optimization Myth: What Really Works
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Debunking common misconceptions about resume keywords and revealing evidence-based strategies that actually get results
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Sarah Johnson
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 5, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-8">
            <img
              src="/assets/generated/blog-header.dim_1000x300.png"
              alt="Keyword Optimization Myth"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-foreground">
            <section>
              <p>
                "Just add more keywords to your resume and you'll get past the ATS!" If you've heard this advice, you're not 
                alone. The internet is flooded with keyword optimization tips that promise to unlock interview opportunities. 
                But here's the uncomfortable truth: most of what you've been told about resume keywords is either outdated, 
                oversimplified, or flat-out wrong.
              </p>
              <p>
                As someone who's analyzed thousands of resumes and spoken with recruiters who actually use ATS systems, I'm 
                here to separate myth from reality. The good news? Effective keyword optimization is simpler than you think—
                but it requires understanding how modern ATS systems actually work, not following outdated "hacks."
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">The Biggest Keyword Myths Debunked</h2>
              <p className="mb-6">
                Let's start by dismantling the most persistent myths that lead job seekers astray. Understanding what doesn't 
                work is just as important as knowing what does.
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #1: "More Keywords = Better Results"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Reality:</strong> Modern ATS systems don't just count keywords—they analyze context, 
                        relevance, and natural language usage. Stuffing your resume with keywords makes it read poorly to 
                        humans and can actually hurt your ATS score. A 2024 study by Jobscan found that resumes with 
                        "keyword density" above 3-4% (meaning keywords appear too frequently) were flagged as spam by 
                        advanced ATS systems.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Focus on strategic keyword placement in relevant contexts. 
                        Use keywords naturally within descriptions of your actual work. Quality and context matter far more 
                        than quantity.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #2: "Copy-Paste Job Description Keywords"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Reality:</strong> Simply copying keywords from the job description and pasting them into 
                        your resume is a red flag. Recruiters can spot this immediately, and sophisticated ATS systems can 
                        detect when keywords appear without supporting context or relevant experience. You'll pass the initial 
                        scan but fail the human review.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Use job description keywords as a guide, but integrate them 
                        authentically. If the job requires "stakeholder management," don't just list it—describe a specific 
                        instance where you "managed relationships with 15+ stakeholders across 3 departments to deliver a 
                        $2M project on time."
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #3: "ATS Only Looks for Exact Keyword Matches"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Reality:</strong> Modern ATS systems use semantic search and natural language processing. 
                        They understand synonyms, related terms, and context. If a job description mentions "customer service" 
                        and your resume says "client support," most systems will recognize the connection. The myth that you 
                        need exact matches is outdated by about 5-7 years.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Use natural variations of keywords. Include both acronyms and 
                        full terms (e.g., "Search Engine Optimization (SEO)"), but don't obsess over matching every single 
                        word exactly. Focus on demonstrating the actual skills and experience the keywords represent.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-destructive">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Myth #4: "Keywords in a 'Skills' Section Are Enough"</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>The Reality:</strong> While a skills section is important, simply listing keywords there 
                        without demonstrating them in your work experience is insufficient. ATS systems and recruiters look 
                        for evidence that you've actually used these skills. A laundry list of skills without context suggests 
                        superficial knowledge.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>What Actually Works:</strong> Include a skills section for easy scanning, but also weave 
                        those same skills throughout your work experience with specific examples. Show how you applied each 
                        skill and what results you achieved.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">Evidence-Based Keyword Strategies That Work</h2>
              <p className="mb-6">
                Now that we've cleared up misconceptions, let's focus on strategies backed by research and real-world testing. 
                These approaches have been proven to improve both ATS scores and human recruiter engagement.
              </p>

              <div className="space-y-4">
                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. The 70-30 Rule for Keyword Integration</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Research shows that the most successful resumes match approximately 70-80% of the key requirements 
                        from the job description. But here's the critical part: these keywords should appear naturally within 
                        context, not forced or listed without substance.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>How to Apply:</strong> Identify the 10-15 most important keywords from the job description 
                        (usually found in the "requirements" and "qualifications" sections). Aim to naturally incorporate 
                        70-80% of these into your resume through authentic descriptions of your experience. The remaining 
                        20-30% might be skills you're still developing—and that's okay.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Context-Rich Keyword Placement</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Instead of just listing keywords, embed them in achievement-focused bullet points that demonstrate 
                        impact. This satisfies both ATS algorithms and human readers. A Jobscan analysis of 10,000+ successful 
                        resumes found that keywords appearing in context-rich sentences scored 40% higher than those in simple 
                        lists.
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Poor Example:</strong> "Proficient in project management, Agile, Scrum, stakeholder communication"
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Strong Example:</strong> "Led Agile project management for 5 cross-functional teams using Scrum 
                        methodology, coordinating stakeholder communication across 3 departments and delivering 12 projects 
                        with 95% on-time completion rate"
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Strategic Keyword Layering</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        The most effective resumes layer keywords across multiple sections: professional summary, skills 
                        section, work experience, and even education/certifications. This creates multiple "touchpoints" 
                        for ATS systems to identify your qualifications without appearing repetitive.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Example for "Data Analysis":</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1 mt-2">
                        <li><strong>Summary:</strong> "Data analyst with 5 years of experience..."</li>
                        <li><strong>Skills:</strong> "Data Analysis, SQL, Python, Tableau"</li>
                        <li><strong>Experience:</strong> "Conducted data analysis on customer behavior..."</li>
                        <li><strong>Education:</strong> "Certificate in Data Analytics"</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Industry-Specific Terminology</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Use the specific terminology common in your target industry. Different industries use different terms 
                        for similar concepts. Research shows that using industry-standard language increases ATS match rates 
                        by 25-35% compared to generic terms.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Example:</strong> In tech, say "sprint planning" not "meeting scheduling." In healthcare, 
                        use "patient outcomes" not "customer results." In finance, reference "regulatory compliance" not 
                        "following rules." These nuances matter.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">5. Quantified Keywords</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Combine keywords with specific metrics and numbers. This approach satisfies ATS keyword requirements 
                        while providing the concrete evidence that human recruiters crave. Research indicates that resumes 
                        with quantified achievements receive 40% more interview requests.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Formula:</strong> [Action Verb] + [Keyword] + [Specific Metric/Outcome]
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Examples:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1 mt-2">
                        <li>"Optimized SEO strategy, increasing organic traffic by 150% in 6 months"</li>
                        <li>"Managed budget of $2.5M for digital marketing campaigns across 5 platforms"</li>
                        <li>"Implemented Python automation scripts, reducing data processing time by 60%"</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">6. Natural Language Optimization</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Write for humans first, ATS second. The best keyword optimization happens when you describe your 
                        actual work clearly and specifically. If you're genuinely qualified for a role, the relevant keywords 
                        will naturally appear in authentic descriptions of your experience.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Test:</strong> Read your resume aloud. If it sounds robotic, keyword-stuffed, or unnatural, 
                        revise it. Your resume should tell a compelling story of your professional journey while naturally 
                        incorporating relevant terminology.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">The Keyword Research Process</h2>
              <p className="mb-6">
                Effective keyword optimization starts with thorough research. Here's a systematic approach to identifying 
                the right keywords for your target roles:
              </p>

              <Card className="p-6 mb-4 bg-muted/50">
                <div className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Analyze Multiple Job Descriptions</h3>
                    <p className="text-sm text-muted-foreground">
                      Don't optimize for just one job posting. Collect 5-10 job descriptions for your target role and identify 
                      keywords that appear consistently across multiple postings. These recurring terms are the most important 
                      to include. Create a spreadsheet tracking keyword frequency—terms appearing in 70%+ of postings are 
                      critical.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-muted/50">
                <div className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Categorize Keywords by Type</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Organize keywords into categories:
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li><strong>Hard Skills:</strong> Technical abilities, software, tools, methodologies</li>
                      <li><strong>Soft Skills:</strong> Leadership, communication, problem-solving</li>
                      <li><strong>Industry Terms:</strong> Sector-specific jargon and concepts</li>
                      <li><strong>Certifications:</strong> Required or preferred credentials</li>
                      <li><strong>Action Verbs:</strong> Common verbs describing responsibilities</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-muted/50">
                <div className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Prioritize Based on Your Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Not all keywords are equally relevant to you. Prioritize keywords where you have genuine experience. 
                      Mark keywords as: (1) Strong match - extensive experience, (2) Moderate match - some experience, 
                      (3) Weak match - limited or no experience. Focus on incorporating strong and moderate matches; don't 
                      force weak matches.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/50">
                <div className="flex items-start gap-3">
                  <Search className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 4: Test and Refine</h3>
                    <p className="text-sm text-muted-foreground">
                      Use free ATS scanning tools to test your resume against job descriptions. Look for keyword match 
                      percentages and missing critical terms. But remember: these tools are guides, not gospel. A 70-80% 
                      match rate is excellent; don't obsess over reaching 100%.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-bold mb-4">The Bottom Line: Authenticity Wins</h2>
              <p>
                The biggest keyword optimization myth is that it's about gaming the system. It's not. It's about clearly 
                communicating your relevant qualifications using the language employers understand and search for.
              </p>
              <p>
                Modern ATS systems are sophisticated enough to detect keyword stuffing, irrelevant keyword usage, and 
                inauthentic content. The resumes that succeed are those that genuinely demonstrate relevant experience 
                using appropriate industry terminology.
              </p>
              <p>
                Stop thinking about keyword optimization as a trick to fool ATS systems. Instead, think of it as translation—
                taking your authentic experience and presenting it in the language your target employers use. When you 
                approach it this way, keyword optimization becomes natural, effective, and honest.
              </p>
              <p>
                Your goal isn't to have the most keywords. It's to have the right keywords in the right context, supported 
                by genuine experience and quantifiable achievements. That's what gets you past ATS systems and impresses 
                human recruiters.
              </p>
            </section>

            <Separator className="my-8" />

            <section className="rounded-lg bg-primary/5 p-8">
              <h2 className="text-2xl font-bold mb-4">Optimize Your Resume the Right Way</h2>
              <p className="mb-6">
                Our AI-powered keyword optimizer analyzes job descriptions and provides intelligent, context-aware keyword 
                suggestions—no stuffing, no tricks, just strategic optimization that works for both ATS and humans.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={onBack}>
                  Try Keyword Optimizer
                </Button>
                <Button size="lg" variant="outline" onClick={onBack}>
                  Check ATS Compatibility
                </Button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
