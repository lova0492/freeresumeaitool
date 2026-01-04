import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { FileText, Sparkles, Download, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const { login, loginStatus } = useInternetIdentity();

  const features = [
    {
      icon: FileText,
      title: 'Professional Templates',
      description: 'Choose from 4 beautifully designed resume templates that stand out',
    },
    {
      icon: Palette,
      title: 'Customizable Design',
      description: 'Personalize colors, fonts, and layouts to match your style',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Writing',
      description: 'Get intelligent suggestions for summaries and bullet points',
    },
    {
      icon: Download,
      title: 'Export Options',
      description: 'Download your resume as PDF or Word document',
    },
  ];

  const handleGetStarted = async () => {
    try {
      await login();
    } catch (error: any) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Build Your Perfect Resume in Minutes
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  Create professional resumes with AI-powered assistance, beautiful templates, and easy customization. Stand out from the crowd.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" onClick={handleGetStarted} disabled={loginStatus === 'logging-in'} className="text-base">
                  {loginStatus === 'logging-in' ? 'Connecting...' : 'Get Started Free'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <a href="#features">Learn More</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Free forever</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <img
                  src="/assets/generated/dashboard-hero.dim_800x400.png"
                  alt="Resume Builder Dashboard"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Create a Winning Resume
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Powerful features designed to help you create professional resumes that get noticed by employers
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="bg-muted/30 px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Professional Templates
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose from our collection of professionally designed templates
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((templateId) => (
              <div key={templateId} className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={`/assets/generated/template-${templateId}-preview.dim_400x600.png`}
                    alt={`Template ${templateId}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary" size="sm">
                    Preview Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl">Ready to Build Your Resume?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of professionals who have created their perfect resume
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg" onClick={handleGetStarted} disabled={loginStatus === 'logging-in'} className="text-base">
                {loginStatus === 'logging-in' ? 'Connecting...' : 'Start Building Now'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
