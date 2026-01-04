import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Loader2, Edit3, Save } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
import { 
  useGetResumeTemplateByName,
  useGetAllResumeTemplates,
  useCreateResume
} from '@/hooks/useQueries';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import type { ResumeTemplate, Resume } from '../backend';

interface ResumeTemplatePreviewProps {
  templateId: string;
  onBack: () => void;
}

// Map template IDs to template names for backend lookup
const templateNameMap: Record<string, string> = {
  'template-1': 'Entry-Level Engineer',
  'template-2': 'Entry-Level Marketing Resume',
  'template-3': 'IT Manager Resume',
  'template-4': 'Project Manager Resume',
  'template-5': 'Senior Design Resume',
};

export default function ResumeTemplatePreview({ templateId, onBack }: ResumeTemplatePreviewProps) {
  const [content, setContent] = useState('');
  const [templateName, setTemplateName] = useState('Resume Template');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { identity } = useInternetIdentity();
  const createResume = useCreateResume();

  // Try to get template by name first
  const templateNameToFetch = templateNameMap[templateId];
  const { data: templateByName, isLoading: isLoadingByName } = useGetResumeTemplateByName(templateNameToFetch);
  
  // Fallback: get all templates and find by ID
  const { data: allTemplates, isLoading: isLoadingAll } = useGetAllResumeTemplates();

  const isLoading = isLoadingByName || isLoadingAll;

  useEffect(() => {
    let templateData: ResumeTemplate | null = null;

    // First try template fetched by name
    if (templateByName) {
      templateData = templateByName;
    } 
    // Fallback to finding in all templates by ID
    else if (allTemplates && allTemplates.length > 0) {
      templateData = allTemplates.find(t => t.id === templateId) || null;
    }

    if (templateData && templateData.htmlContent) {
      setContent(templateData.htmlContent);
      setTemplateName(templateData.templateName || getDefaultTemplateName(templateId));
    } else if (!isLoading) {
      // Use fallback template if no backend data
      setContent(getDefaultTemplateContent(templateId));
      setTemplateName(getDefaultTemplateName(templateId));
    }
  }, [templateByName, allTemplates, templateId, isLoading]);

  // Enable contenteditable when editing mode is active
  useEffect(() => {
    if (contentRef.current && isEditing) {
      const editableElements = contentRef.current.querySelectorAll('[contenteditable]');
      editableElements.forEach(el => {
        el.setAttribute('contenteditable', 'true');
      });
    }
  }, [isEditing, content]);

  const handleSaveAsResume = async () => {
    if (!identity) {
      toast.error('Please log in to save your resume');
      return;
    }

    setIsSaving(true);
    try {
      // Get the edited content from the DOM
      const editedContent = contentRef.current?.innerHTML || content;

      // Parse the HTML content to extract resume data
      const parser = new DOMParser();
      const doc = parser.parseFromString(editedContent, 'text/html');

      // Extract personal info
      const nameElement = doc.querySelector('h1');
      const contactElement = doc.querySelector('.contact-info p');
      const name = nameElement?.textContent?.trim() || 'Your Name';
      const contactText = contactElement?.textContent || '';
      
      // Parse contact info
      const emailMatch = contactText.match(/Email:\s*([^\s|]+)/);
      const phoneMatch = contactText.match(/Phone:\s*([^\s|]+)/);
      const linkedinMatch = contactText.match(/LinkedIn:\s*([^\s|]+)/);
      
      // Extract summary
      const summarySection = Array.from(doc.querySelectorAll('.section')).find(
        section => section.querySelector('h2')?.textContent?.includes('Summary')
      );
      const summary = summarySection?.querySelector('p')?.textContent?.trim() || '';

      // Create a new resume object
      const newResume: Resume = {
        id: `resume-${Date.now()}`,
        owner: identity.getPrincipal(),
        templateId: BigInt(1),
        colorScheme: BigInt(1),
        personalInfo: {
          name,
          email: emailMatch?.[1] || '',
          phone: phoneMatch?.[1] || '',
          address: '',
          linkedin: linkedinMatch?.[1] || '',
          website: '',
        },
        summary,
        workExperience: [],
        education: [],
        skills: [],
        certifications: [],
        projects: [],
        layoutSettings: {
          spacing: BigInt(1),
          margins: BigInt(1),
          fontSize: BigInt(12),
        },
      };

      await createResume.mutateAsync(newResume);
      toast.success('Resume saved successfully! You can now edit it in your dashboard.');
      
      // Navigate back after a short delay
      setTimeout(() => {
        onBack();
      }, 1500);
    } catch (error: any) {
      toast.error(error.message || 'Failed to save resume');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      // Get the current content (edited or original)
      const currentContent = contentRef.current?.innerHTML || content;
      
      // Create a complete HTML document optimized for PDF printing
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${templateName}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background: white;
      padding: 0;
      margin: 0;
    }
    
    .resume-container {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.5in;
      background: white;
    }
    
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0.5em;
      margin-bottom: 0.3em;
      font-weight: 600;
      color: #2563eb;
    }
    
    p {
      margin: 0.5em 0;
    }
    
    ul, ol {
      margin: 0.5em 0;
      padding-left: 1.5em;
    }
    
    li {
      margin: 0.25em 0;
    }
    
    strong {
      font-weight: 600;
    }
    
    /* Print-specific styles */
    @media print {
      body {
        margin: 0;
        padding: 0;
      }
      
      .resume-container {
        padding: 0.5in;
        max-width: 100%;
      }
      
      @page {
        margin: 0.5in;
        size: letter;
      }
      
      /* Prevent page breaks inside important elements */
      h1, h2, h3, h4, h5, h6 {
        page-break-after: avoid;
      }
      
      ul, ol {
        page-break-inside: avoid;
      }
    }
    
    /* Instructions banner - only visible on screen */
    .print-instructions {
      background: #f0f9ff;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .print-instructions h2 {
      color: #1e40af;
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    
    .print-instructions p {
      color: #1e3a8a;
      margin: 0.25rem 0;
    }
    
    .print-instructions strong {
      color: #1e40af;
    }
    
    @media print {
      .print-instructions {
        display: none;
      }
    }
  </style>
</head>
<body>
  <div class="print-instructions">
    <h2>📄 How to Save as PDF</h2>
    <p><strong>Press Ctrl+P (Windows/Linux) or Cmd+P (Mac)</strong> to open the print dialog</p>
    <p>Select <strong>"Save as PDF"</strong> or <strong>"Microsoft Print to PDF"</strong> as your printer</p>
    <p>Click <strong>"Save"</strong> and choose your Downloads folder</p>
  </div>
  <div class="resume-container">
    ${currentContent}
  </div>
</body>
</html>`;

      // Create a Blob with the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      
      // Create a download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Generate filename
      const sanitizedName = templateName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const timestamp = new Date().toISOString().split('T')[0];
      link.download = `resume_${sanitizedName}_${timestamp}.html`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success('Resume downloaded! Open the file and press Ctrl+P (or Cmd+P) to save as PDF.', {
        duration: 6000,
      });
    } catch (error: any) {
      console.error('Download error:', error);
      toast.error(error.message || 'Failed to download resume');
    } finally {
      setIsDownloading(false);
    }
  };

  const getDefaultTemplateName = (id: string) => {
    const names: Record<string, string> = {
      'template-1': 'Entry-Level Engineer',
      'template-2': 'Entry-Level Marketing Resume',
      'template-3': 'IT Manager Resume',
      'template-4': 'Project Manager Resume',
      'template-5': 'Senior Design Resume',
    };
    return names[id] || 'Resume Template';
  };

  const getDefaultTemplateContent = (id: string): string => {
    // Provide default HTML templates as fallback
    const defaultTemplates: Record<string, string> = {
      'template-1': `
        <div class="section">
          <h1 contenteditable="true">Your Name</h1>
          <div class="contact-info" contenteditable="true">
            <p>Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Professional Summary</h2>
          <p contenteditable="true">Recent graduate with a strong foundation in software engineering. Eager to apply academic knowledge and internship experience to contribute to a dynamic team. Proven ability to learn quickly and adapt to new challenges.</p>
        </div>
        
        <div class="section">
          <h2>Education</h2>
          <div contenteditable="true">
            <h3>Bachelor of Science in Computer Science</h3>
            <p><strong>University Name</strong> | Graduation: May 2024</p>
            <p>GPA: 3.8/4.0 | Relevant Coursework: Data Structures, Algorithms, Web Development</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Experience</h2>
          <div contenteditable="true">
            <h3>Software Engineering Intern | Tech Company</h3>
            <p><strong>San Francisco, CA</strong> | June 2023 - August 2023</p>
            <ul>
              <li>Developed and deployed 3 new features for the company's web application, improving user engagement by 15%</li>
              <li>Collaborated with senior engineers to refactor legacy code, reducing load time by 20%</li>
              <li>Participated in code reviews and agile development processes</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>Skills</h2>
          <div contenteditable="true">
            <p><strong>Programming Languages:</strong> JavaScript, Python, Java, C++</p>
            <p><strong>Web Technologies:</strong> React, Node.js, HTML, CSS, REST APIs</p>
            <p><strong>Tools & Platforms:</strong> Git, Docker, AWS, MongoDB</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Projects</h2>
          <div contenteditable="true">
            <h3>E-Commerce Platform</h3>
            <p>Built a full-stack e-commerce application using React and Node.js with payment integration. Implemented user authentication, product catalog, and shopping cart functionality.</p>
          </div>
        </div>
      `,
      'template-2': `
        <div class="section">
          <h1 contenteditable="true">Your Name</h1>
          <div class="contact-info" contenteditable="true">
            <p>Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Professional Summary</h2>
          <p contenteditable="true">Creative marketing professional with a passion for digital campaigns and brand storytelling. Recent graduate with hands-on experience in social media management, content creation, and analytics. Eager to drive engagement and growth for innovative brands.</p>
        </div>
        
        <div class="section">
          <h2>Professional Experience</h2>
          <div contenteditable="true">
            <h3>Marketing Intern | Digital Agency</h3>
            <p><strong>New York, NY</strong> | January 2024 - May 2024</p>
            <ul>
              <li>Managed social media accounts for 5 clients, increasing follower engagement by 30%</li>
              <li>Created content calendars and wrote copy for Instagram, Facebook, and LinkedIn posts</li>
              <li>Analyzed campaign performance using Google Analytics and provided actionable insights</li>
            </ul>
            
            <h3>Campus Ambassador | Tech Startup</h3>
            <p><strong>Remote</strong> | September 2023 - December 2023</p>
            <ul>
              <li>Promoted brand awareness on campus through events and social media campaigns</li>
              <li>Recruited 50+ students to join the platform, exceeding target by 25%</li>
              <li>Collaborated with marketing team to develop student-focused content</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>Education</h2>
          <div contenteditable="true">
            <h3>Bachelor of Arts in Marketing</h3>
            <p><strong>University Name</strong> | Graduated: May 2024</p>
            <p>Dean's List | Marketing Club President</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Skills</h2>
          <div contenteditable="true">
            <p><strong>Marketing:</strong> Social Media Management, Content Creation, SEO, Email Marketing</p>
            <p><strong>Tools:</strong> Hootsuite, Canva, Google Analytics, Mailchimp, Adobe Creative Suite</p>
            <p><strong>Soft Skills:</strong> Communication, Creativity, Team Collaboration, Time Management</p>
          </div>
        </div>
      `,
      'template-3': `
        <div class="section">
          <h1 contenteditable="true">Your Name</h1>
          <div class="contact-info" contenteditable="true">
            <p>Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Professional Summary</h2>
          <p contenteditable="true">Results-driven IT Manager with 8+ years of experience leading technical teams and managing enterprise infrastructure. Proven track record of implementing scalable solutions, optimizing system performance, and driving digital transformation initiatives. Expert in cloud technologies, cybersecurity, and agile project management.</p>
        </div>
        
        <div class="section">
          <h2>Professional Experience</h2>
          <div contenteditable="true">
            <h3>IT Manager | Tech Corporation</h3>
            <p><strong>Seattle, WA</strong> | January 2020 - Present</p>
            <ul>
              <li>Lead team of 12 IT professionals managing infrastructure for 500+ employees across 3 locations</li>
              <li>Spearheaded cloud migration project, reducing operational costs by 35% and improving system uptime to 99.9%</li>
              <li>Implemented cybersecurity protocols that reduced security incidents by 60%</li>
              <li>Managed $2M annual IT budget and vendor relationships</li>
            </ul>
            
            <h3>Senior Systems Administrator | Software Company</h3>
            <p><strong>Portland, OR</strong> | June 2017 - December 2019</p>
            <ul>
              <li>Administered Windows and Linux servers supporting 200+ users</li>
              <li>Automated deployment processes, reducing setup time by 50%</li>
              <li>Provided technical leadership and mentored junior team members</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>Education & Certifications</h2>
          <div contenteditable="true">
            <h3>Bachelor of Science in Information Technology</h3>
            <p><strong>University Name</strong> | Graduated: 2016</p>
            <p><strong>Certifications:</strong> AWS Certified Solutions Architect, CISSP, PMP, ITIL v4</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Technical Skills</h2>
          <div contenteditable="true">
            <p><strong>Cloud Platforms:</strong> AWS, Azure, Google Cloud</p>
            <p><strong>Infrastructure:</strong> VMware, Docker, Kubernetes, Terraform</p>
            <p><strong>Security:</strong> Firewall Management, SIEM, Vulnerability Assessment</p>
            <p><strong>Management:</strong> Agile/Scrum, ITIL, Project Management, Budget Planning</p>
          </div>
        </div>
      `,
      'template-4': `
        <div class="section">
          <h1 contenteditable="true">Your Name</h1>
          <div class="contact-info" contenteditable="true">
            <p>Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Professional Summary</h2>
          <p contenteditable="true">Certified Project Manager with 7+ years of experience delivering complex projects on time and within budget. Expert in stakeholder management, risk mitigation, and cross-functional team leadership. Proven track record of driving process improvements and achieving business objectives in fast-paced environments.</p>
        </div>
        
        <div class="section">
          <h2>Professional Experience</h2>
          <div contenteditable="true">
            <h3>Senior Project Manager | Enterprise Solutions Inc.</h3>
            <p><strong>Boston, MA</strong> | March 2019 - Present</p>
            <ul>
              <li>Manage portfolio of 5-8 concurrent projects with budgets ranging from $500K to $3M</li>
              <li>Led digital transformation initiative that improved operational efficiency by 40%</li>
              <li>Coordinate cross-functional teams of 15-20 members across multiple departments</li>
              <li>Achieved 95% on-time delivery rate and maintained client satisfaction score of 4.8/5.0</li>
            </ul>
            
            <h3>Project Manager | Consulting Group</h3>
            <p><strong>Chicago, IL</strong> | January 2017 - February 2019</p>
            <ul>
              <li>Delivered 12+ projects for Fortune 500 clients in retail and healthcare sectors</li>
              <li>Implemented agile methodologies, reducing project delivery time by 25%</li>
              <li>Managed stakeholder communications and executive reporting</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>Education & Certifications</h2>
          <div contenteditable="true">
            <h3>Master of Business Administration (MBA)</h3>
            <p><strong>Business School</strong> | Graduated: 2016</p>
            <h3>Bachelor of Science in Business Management</h3>
            <p><strong>University Name</strong> | Graduated: 2014</p>
            <p><strong>Certifications:</strong> PMP, Certified Scrum Master (CSM), Six Sigma Green Belt</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Core Competencies</h2>
          <div contenteditable="true">
            <p><strong>Project Management:</strong> Agile, Waterfall, Scrum, Risk Management, Budget Planning</p>
            <p><strong>Tools:</strong> Jira, MS Project, Asana, Confluence, Smartsheet</p>
            <p><strong>Leadership:</strong> Team Building, Stakeholder Management, Conflict Resolution, Change Management</p>
          </div>
        </div>
      `,
      'template-5': `
        <div class="section">
          <h1 contenteditable="true">Your Name</h1>
          <div class="contact-info" contenteditable="true">
            <p>Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile | Portfolio: yourportfolio.com</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Executive Summary</h2>
          <p contenteditable="true">Award-winning Senior Design Leader with 12+ years of experience driving creative vision and leading high-performing design teams. Proven track record of delivering innovative user experiences that drive business growth and customer satisfaction. Expert in design strategy, team mentorship, and cross-functional collaboration.</p>
        </div>
        
        <div class="section">
          <h2>Professional Experience</h2>
          <div contenteditable="true">
            <h3>Senior Design Director | Tech Innovators Inc.</h3>
            <p><strong>San Francisco, CA</strong> | June 2019 - Present</p>
            <ul>
              <li>Lead design organization of 25+ designers, researchers, and content strategists</li>
              <li>Established design system adopted across 15+ product teams, improving consistency and reducing design time by 40%</li>
              <li>Drove product redesign that increased user engagement by 60% and reduced churn by 25%</li>
              <li>Partner with C-suite executives to align design strategy with business objectives</li>
              <li>Mentor and develop design talent, with 8 team members promoted under my leadership</li>
            </ul>
            
            <h3>Lead Product Designer | Digital Agency</h3>
            <p><strong>Los Angeles, CA</strong> | March 2015 - May 2019</p>
            <ul>
              <li>Led design for 20+ client projects including Fortune 500 companies</li>
              <li>Managed design team of 8 and established UX research practice</li>
              <li>Won 3 industry awards for innovative design solutions</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>Education & Recognition</h2>
          <div contenteditable="true">
            <h3>Master of Fine Arts in Design</h3>
            <p><strong>Design Institute</strong> | Graduated: 2012</p>
            <p><strong>Awards:</strong> Webby Award (2022), Red Dot Design Award (2020), AIGA Design Excellence (2019)</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Expertise</h2>
          <div contenteditable="true">
            <p><strong>Design Leadership:</strong> Team Management, Design Strategy, Stakeholder Management, Mentorship</p>
            <p><strong>Design Skills:</strong> UX/UI Design, Design Systems, User Research, Prototyping, Visual Design</p>
            <p><strong>Tools:</strong> Figma, Sketch, Adobe Creative Suite, InVision, Principle, Framer</p>
            <p><strong>Methodologies:</strong> Design Thinking, Agile, Lean UX, Human-Centered Design</p>
          </div>
        </div>
      `,
    };

    return defaultTemplates[id] || defaultTemplates['template-1'];
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading template...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{templateName}</h1>
                <p className="text-sm text-muted-foreground">
                  {isEditing ? 'Click on any text to edit' : 'Enable editing to customize'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={isEditing ? "default" : "outline"}
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit3 className="h-4 w-4 mr-2" />
                {isEditing ? 'Editing' : 'Edit'}
              </Button>
              {isEditing && identity && (
                <Button 
                  onClick={handleSaveAsResume}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save as Resume
                    </>
                  )}
                </Button>
              )}
              <Button 
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="container px-4 py-6">
        <Alert>
          <AlertDescription>
            <strong>How to use:</strong> {isEditing 
              ? 'Click on any text in the resume below to edit it. Customize the content to match your experience and qualifications. When done, click "Save as Resume" to save it to your dashboard or "Download PDF" to export.' 
              : 'Click the "Edit" button above to enable editing mode, then click on any text to customize it.'
            }
            {!identity && isEditing && (
              <span className="block mt-2 text-amber-600 dark:text-amber-400">
                <strong>Note:</strong> Please log in to save your customized resume to your dashboard.
              </span>
            )}
            <span className="block mt-2 text-blue-600 dark:text-blue-400">
              <strong>💡 PDF Export:</strong> Click "Download PDF" to save an HTML file. Open it in your browser and press Ctrl+P (or Cmd+P on Mac) to save as PDF.
            </span>
          </AlertDescription>
        </Alert>
      </div>

      {/* Resume Content */}
      <div className="container px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            <div
              ref={contentRef}
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
