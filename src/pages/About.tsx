import { Target, Users, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Honest Reviews',
      description: 'We provide transparent, unbiased reviews of AI resume tools based on thorough research and real-world testing. No marketing fluff, just facts.',
    },
    {
      icon: Users,
      title: 'User-First Approach',
      description: 'Every tool and resource we create is designed with you in mind—whether you\'re a student, job seeker, or career changer.',
    },
    {
      icon: Shield,
      title: 'Independent Research',
      description: 'Our reviews are written independently without influence from tool providers. We test features, assess ATS compatibility, and evaluate real value.',
    },
    {
      icon: Heart,
      title: 'Accessible to All',
      description: 'We believe everyone deserves access to quality career tools. That\'s why we focus on free AI tools and provide clear, beginner-friendly guidance.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Helping job seekers find trustworthy, ATS-friendly AI tools for resumes
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                In a world flooded with AI resume tools making bold promises, we exist to cut through the noise. Our mission is simple: provide honest, human-written reviews of free AI tools that actually help you create ATS-friendly resumes and land interviews.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We're not here to sell you expensive software or make exaggerated claims about AI "writing like a human." Instead, we focus on what matters: helping you understand which tools work, how they work, and whether they're right for your situation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a student creating your first resume, a professional switching careers, or someone re-entering the job market, we're here to guide you with clear, accessible information you can trust.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">How We Review Tools</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our review process is thorough and data-driven. We don't just read marketing materials—we actually use the tools. Here's what we evaluate:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span><strong>ATS Compatibility:</strong> We test how well resumes created with each tool pass through Applicant Tracking Systems.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span><strong>Output Quality:</strong> We assess the relevance, clarity, and professionalism of AI-generated content.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span><strong>User Privacy:</strong> We examine data collection practices and privacy policies to ensure your information is protected.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span><strong>Free Access Reliability:</strong> We verify that free features are genuinely useful, not just teasers for paid plans.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span><strong>Ease of Use:</strong> We consider whether the tool is accessible to beginners and non-technical users.</span>
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every review is written by our team based on hands-on testing and research. We don't accept payment for reviews, and we clearly disclose any affiliate relationships.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-semibold">Who We Serve</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our platform is designed for anyone navigating the modern job market:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Students & Fresh Graduates</h3>
                  <p className="text-muted-foreground">
                    Creating your first resume can be overwhelming. We help you understand what employers look for and which free tools can help you stand out.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Job Seekers at All Levels</h3>
                  <p className="text-muted-foreground">
                    Whether you're applying for entry-level positions or senior roles, we provide guidance on optimizing your resume for ATS systems and human reviewers.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Career Changers</h3>
                  <p className="text-muted-foreground">
                    Transitioning to a new field requires strategic resume positioning. We show you how AI tools can help highlight transferable skills and relevant experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Have questions or suggestions? We'd love to hear from you.{' '}
              <a href="#" className="font-medium text-primary hover:underline">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
