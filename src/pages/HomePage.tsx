import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { FileText, Sparkles, Target, FileCheck, CheckCircle2, ArrowRight, Shield, Zap, Users, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';
import type { View } from '../App';

interface HomePageProps {
  onNavigate: (view: View) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { login, loginStatus, identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const handleGetStarted = async () => {
    if (isAuthenticated) {
      onNavigate('dashboard');
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
      }
    }
  };

  const featuredTools = [
    {
      icon: FileText,
      name: 'AI Resume Builder',
      purpose: 'Creates structured, ATS-compliant resumes using AI-powered content suggestions',
      useCases: [
        'Building your first resume from scratch',
        'Reformatting existing content for better ATS parsing',
        'Generating professional summaries and bullet points',
      ],
      image: '/assets/generated/dashboard-hero.dim_800x400.png',
      view: 'dashboard' as View,
    },
    {
      icon: Target,
      name: 'Resume Keyword Optimizer',
      purpose: 'Analyzes job descriptions to identify missing keywords and optimize resume content',
      useCases: [
        'Tailoring your resume to specific job postings',
        'Identifying industry-standard terminology gaps',
        'Improving keyword density for ATS matching',
      ],
      image: '/assets/generated/keyword-optimizer-preview.dim_600x400.png',
      view: 'keyword-optimizer' as View,
    },
    {
      icon: FileCheck,
      name: 'ATS Compatibility Checker',
      purpose: 'Scans resume formatting and structure to predict how well ATS systems will parse it',
      useCases: [
        'Testing if your resume format is machine-readable',
        'Identifying formatting issues before applying',
        'Comparing your resume against ATS best practices',
      ],
      image: '/assets/generated/ats-checker-preview.dim_600x400.png',
      view: 'ats-checker' as View,
    },
    {
      icon: Sparkles,
      name: 'Cover Letter Generator',
      purpose: 'Generates customized cover letters based on your resume data and job requirements',
      useCases: [
        'Creating personalized cover letters quickly',
        'Matching cover letter tone to company culture',
        'Highlighting relevant experience for specific roles',
      ],
      image: '/assets/generated/cover-letter-generator-preview.dim_600x400.png',
      view: 'cover-letter' as View,
    },
  ];

  const evaluationCriteria = [
    {
      icon: Shield,
      title: 'ATS Compliance',
      description: 'We test each tool against common ATS systems to verify parsing accuracy and keyword recognition.',
    },
    {
      icon: CheckCircle2,
      title: 'User Privacy',
      description: 'Tools are evaluated for data handling practices, storage policies, and transparency about how your information is used.',
    },
    {
      icon: Zap,
      title: 'Output Quality',
      description: 'Generated content is assessed for professionalism, relevance, and alignment with current hiring standards.',
    },
    {
      icon: FileCheck,
      title: 'Free Access Reliability',
      description: 'We verify that free features remain functional without hidden paywalls or feature degradation over time.',
    },
  ];

  const targetUsers = [
    {
      icon: GraduationCap,
      title: 'Students & Fresh Graduates',
      description: 'Learn how to structure your first resume, highlight academic projects and internships, and present limited experience effectively.',
    },
    {
      icon: Users,
      title: 'Active Job Seekers',
      description: 'Optimize existing resumes for specific applications, improve ATS compatibility, and adapt content for different industries.',
    },
    {
      icon: Briefcase,
      title: 'Career Changers',
      description: 'Reframe transferable skills, emphasize relevant experience, and create narratives that bridge different professional fields.',
    },
    {
      icon: TrendingUp,
      title: 'Professionals Seeking Growth',
      description: 'Refine senior-level resumes, quantify achievements effectively, and position yourself for advancement opportunities.',
    },
  ];

  const faqs = [
    {
      question: 'Are AI-generated resumes safe to use for job applications?',
      answer: 'Yes, when used properly. AI tools help structure and optimize content, but you should always review and personalize the output. Treat AI as a writing assistant that suggests improvements rather than a replacement for your own judgment. Ensure all information is accurate and reflects your actual experience. Most importantly, customize AI-generated content to match your voice and the specific job requirements.',
    },
    {
      question: 'What does ATS compatibility actually mean?',
      answer: 'ATS (Applicant Tracking System) compatibility refers to how well automated software can read and parse your resume. These systems scan resumes for keywords, extract information into structured fields, and rank candidates before human review. An ATS-compatible resume uses standard formatting, clear section headers, common fonts, and avoids complex layouts that confuse parsing algorithms. This doesn\'t mean your resume needs to be plain—it means the structure should be machine-readable.',
    },
    {
      question: 'What\'s the real difference between free and paid AI resume tools?',
      answer: 'Free tools typically offer core functionality like basic resume building, keyword suggestions, and ATS checking with some limitations on usage frequency or template variety. Paid versions usually add features like unlimited revisions, premium templates, advanced analytics, cover letter generation, and priority support. For most job seekers, free tools provide sufficient functionality to create effective resumes. Paid tools become valuable if you\'re applying to many positions or need extensive customization options.',
    },
    {
      question: 'How do these tools handle my personal information and privacy?',
      answer: 'Reputable AI resume tools should clearly state their data practices. Look for tools that encrypt your data, don\'t sell information to third parties, and allow you to delete your account and data. Be cautious with tools that require excessive permissions or lack clear privacy policies. Our platform uses Internet Identity for authentication, meaning your personal data stays under your control. We recommend reading privacy policies and avoiding tools that seem unclear about data handling.',
    },
    {
      question: 'Should I use AI suggestions exactly as provided, or modify them?',
      answer: 'Always modify AI suggestions to match your actual experience and voice. AI tools analyze patterns from successful resumes but don\'t know your specific situation. Use suggestions as starting points: they can help with phrasing, structure, and identifying gaps, but you need to verify accuracy, add specific details, and ensure the content genuinely represents you. Think of AI as a brainstorming partner that helps you articulate your experience more effectively.',
    },
    {
      question: 'Can AI tools really improve my chances of getting interviews?',
      answer: 'AI tools can improve your resume\'s technical quality—better formatting, stronger keywords, clearer structure—which helps you pass initial ATS screening. However, they can\'t create qualifications you don\'t have or guarantee interviews. The real value comes from using these tools to present your genuine experience more effectively. Focus on using AI to optimize how you communicate your skills rather than expecting it to transform your candidacy fundamentally.',
    },
    {
      question: 'How often should I update my resume using these tools?',
      answer: 'Update your resume whenever you gain new skills, complete significant projects, or apply for positions in different fields. Use keyword optimization tools each time you apply to a specific job posting, as different roles emphasize different skills. Run ATS compatibility checks after any formatting changes. Regular updates ensure your resume stays current and relevant, but avoid over-editing—sometimes simpler, clearer content performs better than heavily optimized text.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Free • Transparent • ATS-Tested
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Discover Trustworthy Free AI Resume Tools
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  We help you find and use reliable AI-powered resume tools that are genuinely free, respect your privacy, and create ATS-friendly resumes. No hype, just honest guidance for job seekers.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" onClick={handleGetStarted} disabled={loginStatus === 'logging-in'} className="text-base">
                  {loginStatus === 'logging-in' ? 'Connecting...' : isAuthenticated ? 'Go to Dashboard' : 'Start Building Free'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('resume-examples')} className="text-base">
                  View Examples
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Privacy-focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Evidence-based</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <img
                  src="/assets/generated/homepage-hero.dim_1200x600.png"
                  alt="AI Resume Tools Platform"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Helps Section */}
      <section className="border-y border-border bg-muted/30 px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why AI Helps in Resume Creation
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the practical benefits of AI-assisted resume building
            </p>
          </div>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              AI excels at pattern recognition and data analysis—skills directly applicable to resume optimization. These tools have analyzed thousands of successful resumes and job descriptions, learning which keywords, phrases, and structures correlate with positive hiring outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When you use AI for resume creation, you're leveraging this analytical capability. The software can identify gaps between your resume and job requirements, suggest industry-standard terminology you might have missed, and structure your experience in formats that both ATS systems and human recruiters process efficiently.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Importantly, AI doesn't "write like a human"—it helps you write more strategically. It highlights where you need stronger action verbs, where quantifiable achievements would strengthen your case, and where your formatting might confuse automated parsing systems. Think of it as having a career advisor who's reviewed countless resumes in your field and can point out what typically works.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The real value isn't in generating content from scratch, but in optimizing what you already have. AI tools help translate your experience into the language recruiters and ATS systems expect, increasing the likelihood your qualifications get properly recognized and evaluated.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Free AI Resume Tools
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Practical tools for different stages of resume creation and optimization
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredTools.map((tool, index) => (
              <Card key={index} className="group overflow-hidden border-border transition-all hover:shadow-xl cursor-pointer" onClick={() => onNavigate(tool.view)}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription className="text-base">{tool.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Best for:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {tool.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="ghost" className="mt-4 p-0 h-auto font-semibold text-primary hover:bg-transparent">
                    Try this tool <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria Section */}
      <section className="bg-muted/30 px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How We Evaluate Tools
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Transparent, data-driven criteria for assessing AI resume tools
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {evaluationCriteria.map((criterion, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <criterion.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{criterion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{criterion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We prioritize tools that are genuinely free to use, transparent about their limitations, and produce results that align with current hiring practices. Our evaluations are updated regularly as tools evolve and new options emerge.
            </p>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Who This Platform Is For
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Tailored guidance for different career stages and goals
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {targetUsers.map((user, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <user.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{user.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{user.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Honest answers to common questions about AI resume tools
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl">Ready to Build Your Resume?</CardTitle>
              <CardDescription className="text-lg">
                Start using our free AI-powered tools to create an ATS-optimized resume
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg" onClick={handleGetStarted} disabled={loginStatus === 'logging-in'} className="text-base">
                {loginStatus === 'logging-in' ? 'Connecting...' : isAuthenticated ? 'Go to Dashboard' : 'Get Started Free'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
