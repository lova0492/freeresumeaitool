import { MessageSquare, Target, Users, TrendingUp } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

export default function InterviewPreparationGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Interview Preparation: From Application to Offer</h1>
            <p className="text-xl text-muted-foreground">
              Master the interview process with proven strategies and practical preparation techniques
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
                Interview preparation is a critical component of job search success. While your resume gets you in the door, your interview performance determines whether you receive an offer. Effective preparation involves understanding different interview formats, researching the company and role, practicing your responses, and developing strategies to showcase your qualifications confidently.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Types of Interviews and What to Expect</h2>

              <p className="text-lg leading-relaxed mb-6">
                Modern hiring processes typically involve multiple interview stages, each with different formats and objectives. Phone screenings are usually the first step, where recruiters verify basic qualifications and assess your communication skills. These conversations typically last 15-30 minutes and focus on your background, salary expectations, and availability.
              </p>

              {/* Ad Slot - In Content */}
              <div className="my-8">
                <AdSlot slot="in-content" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Video Interviews</h3>
                      <p className="text-muted-foreground text-sm">
                        Increasingly common for remote positions, requiring technical setup, professional background, and strong eye contact with the camera.
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
                      <h3 className="font-semibold text-lg mb-2">Panel Interviews</h3>
                      <p className="text-muted-foreground text-sm">
                        Multiple interviewers assess you simultaneously, requiring you to engage with each person and address diverse perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Behavioral Interviews</h3>
                      <p className="text-muted-foreground text-sm">
                        Focus on past experiences and how you handled specific situations, using the STAR method to structure responses.
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
                      <h3 className="font-semibold text-lg mb-2">Technical Assessments</h3>
                      <p className="text-muted-foreground text-sm">
                        Role-specific evaluations testing your practical skills through coding challenges, case studies, or presentations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Research and Preparation Strategies</h2>

              <p className="text-lg leading-relaxed mb-6">
                Thorough research is the foundation of successful interview preparation. Start by studying the company's website, recent news articles, social media presence, and financial reports if publicly available. Understand their products, services, mission, values, and recent achievements. This knowledge allows you to demonstrate genuine interest and ask informed questions during the interview.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Review the job description carefully and identify the key skills and qualifications required. Prepare specific examples from your experience that demonstrate each qualification. Use the STAR method (Situation, Task, Action, Result) to structure your stories, ensuring you clearly articulate the context, your role, the actions you took, and the measurable outcomes you achieved.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">How Your Resume Influences Interview Questions</h2>

              <p className="text-lg leading-relaxed mb-6">
                Your resume serves as the roadmap for interview conversations. Interviewers use it to identify areas they want to explore in depth, so be prepared to discuss every item you've included. Expect questions about employment gaps, career transitions, specific achievements, and technical skills listed on your resume. Review your resume before each interview and prepare detailed explanations for each experience and accomplishment.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Quantifiable achievements on your resume often prompt follow-up questions about your methodology and impact. If you mentioned increasing sales by 30%, be ready to explain the strategies you implemented, challenges you overcame, and how you measured success. Interviewers want to understand not just what you accomplished, but how you think and approach problems.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Common Interview Mistakes to Avoid</h2>

              <div className="space-y-4 my-8">
                <div className="p-4 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
                  <h3 className="font-semibold mb-2">Arriving unprepared or late</h3>
                  <p className="text-sm text-muted-foreground">
                    Plan your route in advance, aim to arrive 10-15 minutes early, and test technology for virtual interviews beforehand.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
                  <h3 className="font-semibold mb-2">Speaking negatively about previous employers</h3>
                  <p className="text-sm text-muted-foreground">
                    Frame past challenges positively, focusing on what you learned rather than criticizing former colleagues or companies.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
                  <h3 className="font-semibold mb-2">Failing to ask thoughtful questions</h3>
                  <p className="text-sm text-muted-foreground">
                    Prepare 3-5 intelligent questions about the role, team, company culture, and growth opportunities to demonstrate engagement.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
                  <h3 className="font-semibold mb-2">Providing vague or rambling answers</h3>
                  <p className="text-sm text-muted-foreground">
                    Practice concise responses that directly address the question while providing relevant details and examples.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Post-Interview Follow-Up Best Practices</h2>

              <p className="text-lg leading-relaxed mb-6">
                Send a thank-you email within 24 hours of your interview, addressing each interviewer individually if possible. Reference specific topics discussed during the conversation to demonstrate attentiveness and reinforce your interest in the position. Keep the message concise, professional, and focused on expressing gratitude and reiterating your qualifications.
              </p>

              <p className="text-lg leading-relaxed">
                If you don't hear back within the timeframe mentioned during the interview, it's appropriate to send a polite follow-up email. Maintain professionalism throughout the process, even if you receive a rejection. Request feedback when possible, as constructive criticism can help you improve for future opportunities. Remember that interview skills improve with practice, so treat each interview as a learning experience that brings you closer to your career goals.
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
