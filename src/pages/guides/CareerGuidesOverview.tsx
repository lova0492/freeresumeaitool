import { BookOpen, Target, Users, TrendingUp } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

export default function CareerGuidesOverview() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Guides</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive resources to help you navigate every stage of your career journey
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
                Career guides are essential tools for job seekers at every level, providing structured advice and proven strategies to help you succeed in today's competitive job market. Whether you're crafting your first resume, preparing for interviews, or planning your next career move, our comprehensive guides offer practical insights that make a real difference.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our career guides cover the full spectrum of job search activities, from creating ATS-friendly resumes that get past automated screening systems to mastering interview techniques that help you stand out. Each guide is designed to address specific challenges job seekers face, offering actionable steps you can implement immediately.
              </p>

              {/* Ad Slot - In Content */}
              <div className="my-8">
                <AdSlot slot="in-content" />
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">What Our Career Guides Cover</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Resume Creation & Optimization</h3>
                      <p className="text-muted-foreground">
                        Learn how to structure, format, and optimize your resume for both ATS systems and human recruiters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Job Applications & ATS</h3>
                      <p className="text-muted-foreground">
                        Understand how applicant tracking systems work and how to ensure your application gets noticed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Interview Preparation</h3>
                      <p className="text-muted-foreground">
                        Master interview techniques, from research and preparation to follow-up strategies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Career Planning & Growth</h3>
                      <p className="text-muted-foreground">
                        Develop long-term career strategies, upskill effectively, and plan your professional development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Each guide is written by career professionals with real-world experience in recruitment, HR, and career coaching. We focus on practical, actionable advice that you can apply immediately to your job search. Our guides are regularly updated to reflect current hiring practices and industry trends, ensuring you always have access to the most relevant information.
              </p>

              <p className="text-lg leading-relaxed">
                Whether you're a recent graduate entering the job market, a professional looking to advance your career, or someone considering a career change, our career guides provide the knowledge and tools you need to succeed. Start exploring our guides today and take control of your career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot - Above Footer */}
      <AdSlot slot="above-footer" />
    </div>
  );
}
