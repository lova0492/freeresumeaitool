import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight, Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
}

interface BlogProps {
  onNavigateToBlogPost?: (postId: string) => void;
}

export default function Blog({ onNavigateToBlogPost }: BlogProps) {
  const posts: BlogPost[] = [
    {
      id: 'ats-truth',
      title: 'The Truth About ATS Systems: What Recruiters Won\'t Tell You',
      excerpt: 'Discover the reality behind Applicant Tracking Systems and learn what truly matters when your resume gets scanned. This comprehensive guide reveals insider insights that recruiters rarely share.',
      author: 'Sarah Johnson',
      date: 'Jan 15, 2025',
      category: 'ATS Insights',
      readTime: '12 min',
      featured: true,
    },
    {
      id: 'ai-resume-mistakes',
      title: '5 Critical Mistakes When Using AI Resume Builders',
      excerpt: 'AI tools can transform your resume, but only if you avoid these common pitfalls. Learn what separates successful AI-assisted resumes from rejected ones.',
      author: 'Michael Chen',
      date: 'Jan 12, 2025',
      category: 'AI Tools',
      readTime: '8 min',
      featured: true,
    },
    {
      id: 'career-switch-guide',
      title: 'Career Switching in 2025: A Step-by-Step Blueprint',
      excerpt: 'Thinking about changing careers? This evidence-based guide walks you through every stage of a successful career transition, from skills assessment to landing your first role.',
      author: 'Emily Rodriguez',
      date: 'Jan 10, 2025',
      category: 'Career Development',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'keywords-that-work',
      title: 'Resume Keywords That Actually Get You Hired',
      excerpt: 'Not all keywords are created equal. Discover which terms recruiters and ATS systems prioritize, and how to naturally incorporate them into your resume.',
      author: 'David Park',
      date: 'Jan 8, 2025',
      category: 'Resume Writing',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'fresher-resume-strategy',
      title: 'The Fresher\'s Guide to Standing Out Without Experience',
      excerpt: 'No work experience? No problem. Learn how to showcase your potential through projects, skills, and achievements that employers actually care about.',
      author: 'Sarah Johnson',
      date: 'Jan 5, 2025',
      category: 'Career Tips',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'ats-formatting-rules',
      title: 'ATS-Friendly Formatting: The Complete Checklist',
      excerpt: 'Your resume content might be perfect, but poor formatting can get you rejected instantly. Follow this comprehensive checklist to ensure ATS compatibility.',
      author: 'Michael Chen',
      date: 'Jan 3, 2025',
      category: 'ATS Insights',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'job-search-automation',
      title: 'Smart Job Search: Using AI Tools Beyond Resume Building',
      excerpt: 'Discover how AI can streamline your entire job search process, from finding opportunities to preparing for interviews, saving you hours every week.',
      author: 'Emily Rodriguez',
      date: 'Dec 30, 2024',
      category: 'Job Search',
      readTime: '11 min',
      featured: false,
    },
  ];

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  const handleReadMore = (postId: string) => {
    if (onNavigateToBlogPost) {
      onNavigateToBlogPost(postId);
    }
  };

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Career Insights Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Educational, research-based content on AI tools, career development, and job search strategies. 
            Written for students, job seekers, and professionals navigating their career journey.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Featured Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden transition-shadow hover:shadow-xl">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src="/assets/generated/blog-header.dim_1000x300.png"
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge>{post.category}</Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="h-auto p-0 font-semibold text-primary hover:bg-transparent"
                      onClick={() => handleReadMore(post.id)}
                    >
                      Read <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Posts */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Recent Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="h-auto p-0 font-semibold text-primary hover:bg-transparent"
                    onClick={() => handleReadMore(post.id)}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
