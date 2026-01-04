import { FileText, BookOpen, CheckSquare, TrendingUp, ExternalLink, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import AdSlot from '@/components/AdSlot';
import { useGetAllCareerResources } from '@/hooks/useQueries';
import type { CareerResources } from '@/backend';

export default function CareerResourcesPage() {
  const { data: resources = [], isLoading, error, isFetched } = useGetAllCareerResources();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent-orange/10 py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Resources</h1>
            <p className="text-xl text-muted-foreground">
              Essential tools and materials to support your professional development journey
            </p>
          </div>
        </div>
      </section>

      {/* Ad Slot - Below Header */}
      <AdSlot slot="below-header" />

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Career resources are practical tools designed to help professionals at every stage of their journey. From resume templates and interview checklists to skill assessment frameworks and career planning guides, these resources provide structured support for your professional development. Having access to quality career resources can significantly accelerate your progress and help you make informed decisions about your career path.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Resume Templates and Examples</h2>

              <p className="text-lg leading-relaxed mb-6">
                Professional resume templates provide a solid foundation for creating polished, ATS-friendly resumes. These templates are designed with proper formatting, appropriate section organization, and clean layouts that work well with applicant tracking systems. Using a proven template saves time and ensures your resume meets industry standards while allowing you to focus on crafting compelling content that showcases your unique qualifications.
              </p>

              {/* Ad Slot - In Content */}
              <div className="my-8">
                <AdSlot slot="in-content" />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Resume examples from various industries and experience levels serve as valuable references when writing your own resume. These examples demonstrate how to effectively present different types of experience, from entry-level positions to executive roles. By studying successful resumes in your field, you can identify effective language, formatting choices, and ways to highlight achievements that resonate with hiring managers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Templates</h3>
                      <p className="text-muted-foreground text-sm">
                        Pre-formatted documents with professional layouts optimized for ATS compatibility and visual appeal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Examples</h3>
                      <p className="text-muted-foreground text-sm">
                        Real-world resume samples showing effective ways to present experience and achievements across industries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Career Planning Checklists and Frameworks</h2>

              <p className="text-lg leading-relaxed mb-6">
                Career planning checklists help you organize and track your professional development activities. These structured tools break down complex career goals into manageable action items, ensuring you don't overlook important steps in your job search or career advancement process. Checklists cover everything from resume preparation and networking activities to interview follow-up and salary negotiation preparation.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Career planning frameworks provide strategic approaches to long-term professional development. These frameworks help you assess your current position, identify your career goals, and create actionable plans to bridge the gap. They often include self-assessment tools, goal-setting templates, and milestone tracking systems that keep you accountable and focused on your objectives.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Skill Assessment and Development Resources</h2>

              <p className="text-lg leading-relaxed mb-6">
                Skill assessment tools help you identify your strengths, weaknesses, and areas for improvement. These resources range from technical skill evaluations to soft skill assessments, providing objective feedback on your capabilities. Understanding your skill profile allows you to make informed decisions about which competencies to develop and how to position yourself in the job market.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Professional development resources include online courses, certification programs, industry publications, and learning platforms that help you acquire new skills and stay current in your field. These resources are essential for maintaining competitiveness in rapidly evolving industries and demonstrating commitment to continuous learning to potential employers.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Regularly updating your skills and knowledge is crucial for career advancement. Dedicate time each week to professional development activities, whether through formal courses, industry reading, or hands-on projects that expand your capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Networking and Professional Relationship Resources</h2>

              <p className="text-lg leading-relaxed mb-6">
                Networking resources provide guidance on building and maintaining professional relationships that support your career growth. These tools include networking event calendars, conversation starters, follow-up templates, and strategies for leveraging social media platforms like LinkedIn. Effective networking opens doors to opportunities that may not be publicly advertised and provides valuable industry insights.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Career resources are most effective when used consistently and strategically. Rather than collecting resources without purpose, identify your specific needs and select tools that address your current challenges or goals. Regularly review and update your resource toolkit as your career evolves, ensuring you always have access to relevant, high-quality materials that support your professional success.
              </p>
            </div>

            {/* Dynamic Resources from Backend */}
            {isLoading ? (
              <div className="mt-12 space-y-6">
                <Skeleton className="h-8 w-64" />
                <div className="grid gap-6 md:grid-cols-2">
                  {[...Array(4)].map((_, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <Skeleton className="h-6 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-20 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : error ? (
              <div className="mt-12 flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p>Failed to load career resources. Please try again later.</p>
              </div>
            ) : isFetched && resources.length > 0 ? (
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Available Resources</h2>
                <div className="space-y-8">
                  {resources.map((resource) => (
                    <Card key={resource.id} className="overflow-hidden border-2 hover:border-primary/50 transition-all">
                      <CardHeader>
                        <CardTitle className="text-2xl">{resource.title}</CardTitle>
                        <CardDescription className="text-base">{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {resource.links && resource.links.length > 0 && (
                          <div className="space-y-4">
                            <h3 className="font-semibold text-lg mb-3">Quick Links:</h3>
                            <div className="grid gap-3 md:grid-cols-2">
                              {resource.links.map((link, index) => (
                                <a
                                  key={index}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex items-start gap-3 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                                >
                                  <ExternalLink className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:text-accent-orange transition-colors" />
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                                      {link.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                      {link.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Ad Slot - Above Footer */}
      <AdSlot slot="above-footer" />
    </div>
  );
}
