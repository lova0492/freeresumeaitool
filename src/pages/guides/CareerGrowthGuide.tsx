import { TrendingUp, Target, Award, Users } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

export default function CareerGrowthGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Growth and Skill Development</h1>
            <p className="text-xl text-muted-foreground">
              Strategic approaches to advancing your career through continuous learning and professional development
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
                Career growth is a continuous journey that requires intentional effort, strategic planning, and commitment to professional development. In today's rapidly evolving job market, professionals who actively invest in their skills and capabilities position themselves for advancement opportunities and long-term success. Understanding how to effectively develop your skills and plan your career trajectory is essential for achieving your professional goals.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Upskilling Strategies for Career Advancement</h2>

              <p className="text-lg leading-relaxed mb-6">
                Upskilling involves acquiring new competencies that enhance your value in the workplace and open doors to advanced roles. Start by identifying skills that are in high demand within your industry and align with your career goals. Research job postings for positions you aspire to hold and note the technical skills, certifications, and qualifications frequently mentioned. This market-driven approach ensures your learning efforts focus on capabilities that employers actively seek.
              </p>

              {/* Ad Slot - In Content */}
              <div className="my-8">
                <AdSlot slot="in-content" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Technical Skills</h3>
                      <p className="text-muted-foreground text-sm">
                        Focus on industry-specific tools, software, and methodologies that directly impact your job performance and marketability.
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
                      <h3 className="font-semibold text-lg mb-2">Soft Skills</h3>
                      <p className="text-muted-foreground text-sm">
                        Develop leadership, communication, and emotional intelligence capabilities that complement technical expertise.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                      <p className="text-muted-foreground text-sm">
                        Pursue industry-recognized credentials that validate your expertise and demonstrate commitment to professional growth.
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
                      <h3 className="font-semibold text-lg mb-2">Emerging Technologies</h3>
                      <p className="text-muted-foreground text-sm">
                        Stay ahead by learning about innovations and trends that are shaping the future of your industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Create a structured learning plan that balances formal education with practical application. Online courses, workshops, and certification programs provide structured learning paths, while hands-on projects and real-world applications reinforce new skills. Dedicate consistent time each week to skill development, treating it as a non-negotiable investment in your career rather than an optional activity when time permits.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Continuous Learning and Professional Development</h2>

              <p className="text-lg leading-relaxed mb-6">
                Continuous learning is the practice of regularly acquiring new knowledge and skills throughout your career. This mindset is crucial in industries experiencing rapid technological change and evolving best practices. Establish learning habits that fit your schedule and learning style, whether through daily reading of industry publications, weekly online courses, or monthly attendance at professional development events.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Leverage diverse learning resources to maintain engagement and comprehensive skill development. Combine formal education through accredited programs with informal learning through podcasts, webinars, and professional communities. Seek mentorship from experienced professionals who can provide guidance, share insights, and help you navigate career challenges. Many organizations offer internal training programs and tuition reimbursement, so explore these opportunities to advance your skills while demonstrating value to your current employer.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Career Planning for Early-Career Professionals</h2>

              <p className="text-lg leading-relaxed mb-6">
                Early-career professionals should focus on building a strong foundation of core competencies while exploring different aspects of their field. The first few years of your career are ideal for gaining diverse experiences, understanding various roles and functions, and identifying areas that align with your interests and strengths. Be open to lateral moves and stretch assignments that broaden your skill set, even if they don't immediately result in title advancement.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Set both short-term and long-term career goals, reviewing and adjusting them regularly as you gain experience and clarity about your professional aspirations. Short-term goals might include mastering specific technical skills or taking on leadership responsibilities in team projects. Long-term goals could involve reaching a particular position, transitioning to a new industry, or developing expertise in a specialized area. Document your achievements and learning experiences to track progress and build a compelling narrative for future opportunities.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Mid-Career Transition and Growth Strategies</h2>

              <p className="text-lg leading-relaxed mb-6">
                Mid-career professionals often face decisions about specialization versus generalization, management versus individual contributor paths, or industry transitions. Assess your current skills, interests, and market opportunities to make informed decisions about your next career moves. Consider whether you want to deepen expertise in your current domain or pivot to new areas that offer growth potential and align with evolving interests.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                If considering a career transition, identify transferable skills that apply to your target role or industry. Highlight these connections in your resume and networking conversations, demonstrating how your experience provides unique value in a new context. Build bridges to your desired field through side projects, volunteer work, or part-time consulting that allows you to gain relevant experience while maintaining financial stability.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Building Professional Networks and Relationships</h2>

              <p className="text-lg leading-relaxed mb-6">
                Professional networks are invaluable assets for career growth, providing access to opportunities, industry insights, and support during transitions. Actively cultivate relationships with colleagues, industry peers, mentors, and leaders in your field. Attend conferences, join professional associations, and participate in online communities relevant to your industry. Focus on building genuine relationships rather than transactional networking, offering value to others through knowledge sharing, introductions, and support.
              </p>

              <p className="text-lg leading-relaxed">
                Career growth requires patience, persistence, and strategic action. Success rarely follows a linear path, and setbacks are normal parts of professional development. Maintain a growth mindset that views challenges as learning opportunities and failures as valuable feedback. Regularly reflect on your progress, celebrate achievements, and adjust your strategies based on what you learn. By committing to continuous improvement and strategic career planning, you position yourself for long-term success and fulfillment in your professional journey.
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
