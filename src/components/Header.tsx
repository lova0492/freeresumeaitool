import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText, Sparkles, CheckCircle, Mail, BookOpen, Newspaper, Users, FileCode } from 'lucide-react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

type View = 
  | 'landing' 
  | 'home' 
  | 'dashboard' 
  | 'editor' 
  | 'keyword-optimizer' 
  | 'ats-checker' 
  | 'cover-letter' 
  | 'resume-examples'
  | 'resume-samples'
  | 'career-guides' 
  | 'blog' 
  | 'blog-post'
  | 'about' 
  | 'contact'
  | 'privacy'
  | 'disclaimer'
  | 'terms';

interface HeaderProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

export default function Header({ onNavigate, currentView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const disabled = loginStatus === 'logging-in';

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
      onNavigate('home');
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  const handleNavigation = (view: View) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
          >
            <FileText className="h-6 w-6 text-primary" />
            <span>ResumeAI</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleNavigation('home')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              currentView === 'home' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                AI Tools
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem onClick={() => handleNavigation('dashboard')}>
                <FileText className="mr-2 h-4 w-4" />
                Resume Builder
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('keyword-optimizer')}>
                <Sparkles className="mr-2 h-4 w-4" />
                Keyword Optimizer
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('ats-checker')}>
                <CheckCircle className="mr-2 h-4 w-4" />
                ATS Checker
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('cover-letter')}>
                <Mail className="mr-2 h-4 w-4" />
                Cover Letter Generator
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Resources
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem onClick={() => handleNavigation('resume-examples')}>
                <FileText className="mr-2 h-4 w-4" />
                Resume Examples
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('resume-samples')}>
                <FileCode className="mr-2 h-4 w-4" />
                Complete Resume Samples
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('career-guides')}>
                <BookOpen className="mr-2 h-4 w-4" />
                Career Guides
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('blog')}>
                <Newspaper className="mr-2 h-4 w-4" />
                Blog
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Company
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem onClick={() => handleNavigation('about')}>
                <Users className="mr-2 h-4 w-4" />
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('contact')}>
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleNavigation('privacy')}>
                Privacy Policy
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('disclaimer')}>
                Disclaimer
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('terms')}>
                Terms of Use
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleAuth}
            disabled={disabled}
            variant={isAuthenticated ? 'outline' : 'default'}
            className="hidden md:inline-flex"
          >
            {disabled ? 'Loading...' : isAuthenticated ? 'Logout' : 'Login'}
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-accent"
            >
              Home
            </button>
            
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">AI Tools</div>
              <button
                onClick={() => handleNavigation('dashboard')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Resume Builder
              </button>
              <button
                onClick={() => handleNavigation('keyword-optimizer')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Keyword Optimizer
              </button>
              <button
                onClick={() => handleNavigation('ats-checker')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                ATS Checker
              </button>
              <button
                onClick={() => handleNavigation('cover-letter')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Cover Letter Generator
              </button>
            </div>

            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">Resources</div>
              <button
                onClick={() => handleNavigation('resume-examples')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Resume Examples
              </button>
              <button
                onClick={() => handleNavigation('resume-samples')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Complete Resume Samples
              </button>
              <button
                onClick={() => handleNavigation('career-guides')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Career Guides
              </button>
              <button
                onClick={() => handleNavigation('blog')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Blog
              </button>
            </div>

            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">Company</div>
              <button
                onClick={() => handleNavigation('about')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Contact
              </button>
              <button
                onClick={() => handleNavigation('privacy')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('disclaimer')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Disclaimer
              </button>
              <button
                onClick={() => handleNavigation('terms')}
                className="block w-full text-left px-6 py-2 text-sm rounded-md hover:bg-accent"
              >
                Terms of Use
              </button>
            </div>

            <div className="pt-3 border-t">
              <Button
                onClick={handleAuth}
                disabled={disabled}
                variant={isAuthenticated ? 'outline' : 'default'}
                className="w-full"
              >
                {disabled ? 'Loading...' : isAuthenticated ? 'Logout' : 'Login'}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
