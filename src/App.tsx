import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ResumeEditor from './pages/ResumeEditor';
import HomePage from './pages/HomePage';
import KeywordOptimizer from './pages/KeywordOptimizer';
import ATSChecker from './pages/ATSChecker';
import CoverLetterGenerator from './pages/CoverLetterGenerator';
import ResumeExamples from './pages/ResumeExamples';
import ResumeSamples from './pages/ResumeSamples';
import CareerGuides from './pages/CareerGuides';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsOfUse from './pages/TermsOfUse';
import ATSTruthArticle from './pages/blog/ATSTruthArticle';
import ProfileSetupModal from './components/ProfileSetupModal';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserProfile } from './hooks/useQueries';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

export type View = 
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

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [currentResumeId, setCurrentResumeId] = useState<string | null>(null);
  const [currentBlogPostId, setCurrentBlogPostId] = useState<string | null>(null);
  const { identity, isInitializing } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, currentResumeId, currentBlogPostId]);

  const handleNavigate = (view: View, resumeId?: string, blogPostId?: string) => {
    setCurrentView(view);
    if (resumeId !== undefined) {
      setCurrentResumeId(resumeId);
    }
    if (blogPostId !== undefined) {
      setCurrentBlogPostId(blogPostId);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'dashboard':
        return (
          <Dashboard 
            onCreateResume={() => handleNavigate('editor', 'new')}
            onEditResume={(id) => handleNavigate('editor', id)}
          />
        );
      case 'editor':
        return (
          <ResumeEditor 
            resumeId={currentResumeId} 
            onBack={() => handleNavigate('dashboard')}
          />
        );
      case 'keyword-optimizer':
        return <KeywordOptimizer />;
      case 'ats-checker':
        return <ATSChecker />;
      case 'cover-letter':
        return <CoverLetterGenerator />;
      case 'resume-examples':
        return <ResumeExamples />;
      case 'resume-samples':
        return <ResumeSamples />;
      case 'career-guides':
        return <CareerGuides />;
      case 'blog':
        return <Blog onNavigateToBlogPost={(id) => handleNavigate('blog-post', undefined, id)} />;
      case 'blog-post':
        return <ATSTruthArticle onBack={() => handleNavigate('blog')} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'terms':
        return <TermsOfUse />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  if (isInitializing) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header onNavigate={handleNavigate} currentView={currentView} />
      <main className="flex-1">
        {renderView()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster />
      {showProfileSetup && <ProfileSetupModal />}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
