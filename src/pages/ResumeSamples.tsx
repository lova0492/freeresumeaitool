import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Eye, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResumeSampleData {
  id: string;
  title: string;
  category: string;
  experienceLevel: string;
  htmlContent: string;
}

const RESUME_SAMPLES: ResumeSampleData[] = [
  // Engineering Resumes
  {
    id: 'eng-entry-1',
    title: 'Software Engineer - Entry Level',
    category: 'Engineering',
    experienceLevel: 'Entry-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Software Engineer - Entry Level</h1>
  
  <section class="header">
    <h2>Alex Chen</h2>
    <p class="job-title">Junior Software Engineer</p>
    <p class="contact">alex.chen@email.com | (555) 123-4567 | linkedin.com/in/alexchen | github.com/alexchen</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Recent Computer Science graduate with strong foundation in full-stack development and problem-solving. Completed multiple academic and personal projects demonstrating proficiency in modern web technologies. Eager to contribute technical skills and collaborative mindset to a dynamic engineering team.</p>
  </section>

  <section class="skills">
    <h3>Technical Skills</h3>
    <ul>
      <li><strong>Languages:</strong> JavaScript, Python, Java, HTML, CSS, SQL</li>
      <li><strong>Frameworks:</strong> React, Node.js, Express, Django</li>
      <li><strong>Tools:</strong> Git, Docker, VS Code, Postman, MongoDB</li>
      <li><strong>Concepts:</strong> RESTful APIs, Agile Development, Object-Oriented Programming, Data Structures</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Experience</h3>
    
    <div class="job">
      <h4>Software Development Intern</h4>
      <p class="company">TechStart Solutions | Summer 2024</p>
      <ul>
        <li>Developed and maintained React components for customer-facing web application serving 5,000+ users</li>
        <li>Collaborated with senior developers to implement RESTful API endpoints using Node.js and Express</li>
        <li>Participated in daily stand-ups and sprint planning meetings following Agile methodology</li>
        <li>Fixed 15+ bugs and improved application performance by optimizing database queries</li>
      </ul>
    </div>

    <div class="job">
      <h4>Teaching Assistant - Introduction to Programming</h4>
      <p class="company">State University | Jan 2024 - May 2024</p>
      <ul>
        <li>Assisted 50+ students with Python programming concepts and debugging techniques</li>
        <li>Conducted weekly lab sessions and office hours to reinforce course material</li>
        <li>Graded assignments and provided constructive feedback to improve student learning</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Projects</h3>
    
    <div class="project">
      <h4>Task Management Web App</h4>
      <p class="tech">React, Node.js, MongoDB, Express</p>
      <ul>
        <li>Built full-stack task management application with user authentication and CRUD operations</li>
        <li>Implemented responsive UI with React and Material-UI component library</li>
        <li>Deployed application to Heroku with MongoDB Atlas for database hosting</li>
      </ul>
    </div>

    <div class="project">
      <h4>Algorithm Visualizer</h4>
      <p class="tech">JavaScript, HTML5 Canvas, CSS</p>
      <ul>
        <li>Created interactive web tool to visualize sorting and pathfinding algorithms</li>
        <li>Implemented animations for bubble sort, merge sort, and Dijkstra's algorithm</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education</h3>
    <div class="degree">
      <h4>Bachelor of Science in Computer Science</h4>
      <p class="school">State University | Graduated May 2024</p>
      <p class="honors">GPA: 3.7/4.0 | Dean's List (4 semesters)</p>
      <p class="coursework"><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Systems, Software Engineering</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'eng-mid-1',
    title: 'Software Engineer - Mid Level',
    category: 'Engineering',
    experienceLevel: 'Mid-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Software Engineer - Mid Level</h1>
  
  <section class="header">
    <h2>Jordan Martinez</h2>
    <p class="job-title">Software Engineer</p>
    <p class="contact">jordan.martinez@email.com | (555) 234-5678 | linkedin.com/in/jordanmartinez | portfolio.jordanmartinez.dev</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Results-driven Software Engineer with 4+ years of experience building scalable web applications and microservices. Proven track record of delivering high-quality code, mentoring junior developers, and collaborating with cross-functional teams. Strong expertise in modern JavaScript frameworks and cloud technologies.</p>
  </section>

  <section class="skills">
    <h3>Technical Skills</h3>
    <ul>
      <li><strong>Languages:</strong> JavaScript/TypeScript, Python, Go, SQL</li>
      <li><strong>Frontend:</strong> React, Next.js, Vue.js, Redux, Tailwind CSS</li>
      <li><strong>Backend:</strong> Node.js, Express, Django, GraphQL, REST APIs</li>
      <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD, Jenkins</li>
      <li><strong>Databases:</strong> PostgreSQL, MongoDB, Redis</li>
      <li><strong>Tools:</strong> Git, Jira, Datadog, New Relic</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Software Engineer</h4>
      <p class="company">CloudTech Inc. | June 2022 - Present</p>
      <ul>
        <li>Architected and developed microservices-based e-commerce platform handling 100K+ daily transactions</li>
        <li>Led migration from monolithic architecture to microservices, reducing deployment time by 60%</li>
        <li>Implemented GraphQL API layer improving frontend data fetching efficiency by 40%</li>
        <li>Mentored 3 junior engineers through code reviews and pair programming sessions</li>
        <li>Collaborated with product managers and designers to define technical requirements and user stories</li>
      </ul>
    </div>

    <div class="job">
      <h4>Junior Software Engineer</h4>
      <p class="company">Digital Solutions Corp | July 2020 - May 2022</p>
      <ul>
        <li>Developed and maintained React-based dashboard application for enterprise clients</li>
        <li>Built RESTful APIs using Node.js and Express serving 50K+ monthly active users</li>
        <li>Optimized database queries reducing average response time from 800ms to 200ms</li>
        <li>Implemented automated testing suite achieving 85% code coverage</li>
        <li>Participated in on-call rotation providing production support and incident resolution</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Key Contributions</h3>
    
    <div class="project">
      <h4>Real-time Analytics Dashboard</h4>
      <p class="tech">React, WebSocket, D3.js, Node.js</p>
      <ul>
        <li>Built real-time data visualization dashboard processing 10K+ events per second</li>
        <li>Implemented WebSocket connections for live data streaming and updates</li>
        <li>Reduced dashboard load time by 50% through code splitting and lazy loading</li>
      </ul>
    </div>

    <div class="project">
      <h4>Payment Processing Integration</h4>
      <p class="tech">Node.js, Stripe API, PostgreSQL</p>
      <ul>
        <li>Integrated Stripe payment gateway processing $2M+ in annual transactions</li>
        <li>Implemented webhook handlers for payment events and subscription management</li>
        <li>Ensured PCI compliance and secure handling of sensitive payment data</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education</h3>
    <div class="degree">
      <h4>Bachelor of Science in Computer Science</h4>
      <p class="school">Tech University | Graduated 2020</p>
      <p class="honors">GPA: 3.8/4.0 | Summa Cum Laude</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'eng-senior-1',
    title: 'Senior Software Engineer',
    category: 'Engineering',
    experienceLevel: 'Senior-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Senior Software Engineer</h1>
  
  <section class="header">
    <h2>Sarah Thompson</h2>
    <p class="job-title">Senior Software Engineer</p>
    <p class="contact">sarah.thompson@email.com | (555) 345-6789 | linkedin.com/in/sarahthompson</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Accomplished Senior Software Engineer with 8+ years of experience architecting and delivering enterprise-scale applications. Expert in distributed systems, cloud infrastructure, and technical leadership. Proven ability to drive technical strategy, mentor engineering teams, and deliver high-impact solutions that align with business objectives.</p>
  </section>

  <section class="skills">
    <h3>Technical Expertise</h3>
    <ul>
      <li><strong>Languages:</strong> JavaScript/TypeScript, Python, Go, Java, Rust</li>
      <li><strong>Architecture:</strong> Microservices, Event-Driven Architecture, Domain-Driven Design, CQRS</li>
      <li><strong>Cloud Platforms:</strong> AWS (Lambda, ECS, RDS, DynamoDB), GCP, Azure</li>
      <li><strong>Backend:</strong> Node.js, Django, Spring Boot, gRPC, GraphQL, REST</li>
      <li><strong>Frontend:</strong> React, Next.js, TypeScript, Redux, React Query</li>
      <li><strong>Data:</strong> PostgreSQL, MongoDB, Redis, Kafka, Elasticsearch</li>
      <li><strong>DevOps:</strong> Docker, Kubernetes, Terraform, GitHub Actions, ArgoCD</li>
      <li><strong>Leadership:</strong> Technical Design, Code Review, Mentorship, Agile/Scrum</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Senior Software Engineer</h4>
      <p class="company">Enterprise Tech Solutions | Jan 2021 - Present</p>
      <ul>
        <li>Led architecture and development of distributed payment processing system handling $50M+ monthly transactions</li>
        <li>Designed event-driven microservices architecture using Kafka and AWS Lambda, improving system scalability by 300%</li>
        <li>Reduced infrastructure costs by 40% through optimization of cloud resources and implementation of auto-scaling</li>
        <li>Established engineering best practices including code review standards, testing strategies, and deployment procedures</li>
        <li>Mentored team of 8 engineers, conducting technical interviews and leading architecture review sessions</li>
        <li>Collaborated with stakeholders to translate business requirements into technical specifications and roadmaps</li>
      </ul>
    </div>

    <div class="job">
      <h4>Software Engineer</h4>
      <p class="company">FinTech Innovations | March 2018 - Dec 2020</p>
      <ul>
        <li>Architected and implemented real-time fraud detection system processing 1M+ transactions daily</li>
        <li>Built machine learning pipeline using Python and TensorFlow for anomaly detection</li>
        <li>Designed RESTful and GraphQL APIs serving 200K+ daily active users</li>
        <li>Led migration from monolithic application to microservices, reducing deployment time from hours to minutes</li>
        <li>Implemented comprehensive monitoring and alerting using Datadog and PagerDuty</li>
      </ul>
    </div>

    <div class="job">
      <h4>Software Engineer</h4>
      <p class="company">StartupHub Technologies | June 2016 - Feb 2018</p>
      <ul>
        <li>Developed full-stack features for SaaS platform using React and Node.js</li>
        <li>Implemented CI/CD pipeline reducing deployment time by 70%</li>
        <li>Optimized database performance improving query response times by 60%</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Notable Projects & Achievements</h3>
    
    <div class="project">
      <h4>Multi-Region Disaster Recovery System</h4>
      <ul>
        <li>Designed and implemented multi-region failover system achieving 99.99% uptime SLA</li>
        <li>Reduced recovery time objective (RTO) from 4 hours to 15 minutes</li>
        <li>Implemented automated testing and chaos engineering practices</li>
      </ul>
    </div>

    <div class="project">
      <h4>Open Source Contributions</h4>
      <ul>
        <li>Core contributor to popular Node.js framework with 50K+ GitHub stars</li>
        <li>Published technical articles on distributed systems reaching 100K+ readers</li>
        <li>Speaker at regional tech conferences on microservices architecture</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Master of Science in Computer Science</h4>
      <p class="school">Tech Institute | 2016</p>
    </div>
    <div class="degree">
      <h4>Bachelor of Science in Software Engineering</h4>
      <p class="school">State University | 2014</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> AWS Certified Solutions Architect, Certified Kubernetes Administrator (CKA)</p>
    </div>
  </section>
</div>
    `
  },
  // Management Resumes
  {
    id: 'mgmt-entry-1',
    title: 'Project Coordinator - Entry Level',
    category: 'Management',
    experienceLevel: 'Entry-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Project Coordinator - Entry Level</h1>
  
  <section class="header">
    <h2>Emily Rodriguez</h2>
    <p class="job-title">Project Coordinator</p>
    <p class="contact">emily.rodriguez@email.com | (555) 456-7890 | linkedin.com/in/emilyrodriguez</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Organized and detail-oriented recent graduate with strong project coordination skills and passion for driving team success. Demonstrated ability to manage multiple priorities, facilitate communication, and support project delivery through internship and academic experiences. Eager to contribute organizational skills and proactive approach to a dynamic project management team.</p>
  </section>

  <section class="skills">
    <h3>Skills</h3>
    <ul>
      <li><strong>Project Management:</strong> Task Coordination, Timeline Management, Status Reporting, Meeting Facilitation</li>
      <li><strong>Tools:</strong> Microsoft Office Suite, Google Workspace, Trello, Asana, Slack</li>
      <li><strong>Communication:</strong> Stakeholder Communication, Documentation, Presentation Skills</li>
      <li><strong>Soft Skills:</strong> Problem-Solving, Time Management, Team Collaboration, Adaptability</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Experience</h3>
    
    <div class="job">
      <h4>Project Management Intern</h4>
      <p class="company">Business Solutions Group | Summer 2024</p>
      <ul>
        <li>Supported project managers in coordinating 3 concurrent client projects with budgets up to $100K</li>
        <li>Maintained project documentation including timelines, meeting notes, and status reports</li>
        <li>Scheduled and coordinated meetings with cross-functional teams and external stakeholders</li>
        <li>Tracked project milestones and deliverables using Asana project management software</li>
        <li>Assisted in preparing client presentations and progress reports</li>
      </ul>
    </div>

    <div class="job">
      <h4>Student Organization President</h4>
      <p class="company">Business Student Association | Aug 2023 - May 2024</p>
      <ul>
        <li>Led organization of 50+ members, coordinating 12 events throughout academic year</li>
        <li>Managed annual budget of $15,000 and ensured financial accountability</li>
        <li>Collaborated with university administration and external partners to secure event sponsorships</li>
        <li>Delegated tasks to executive board members and monitored progress toward goals</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Academic Projects</h3>
    
    <div class="project">
      <h4>Marketing Campaign Project</h4>
      <ul>
        <li>Coordinated team of 5 students to develop comprehensive marketing campaign for local business</li>
        <li>Created project timeline, assigned responsibilities, and tracked deliverables</li>
        <li>Presented final campaign strategy to client receiving excellent feedback</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education</h3>
    <div class="degree">
      <h4>Bachelor of Business Administration</h4>
      <p class="school">State University | Graduated May 2024</p>
      <p class="honors">GPA: 3.6/4.0 | Concentration: Project Management</p>
      <p class="coursework"><strong>Relevant Coursework:</strong> Project Management, Operations Management, Business Communication, Organizational Behavior</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'mgmt-mid-1',
    title: 'Project Manager - Mid Level',
    category: 'Management',
    experienceLevel: 'Mid-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Project Manager - Mid Level</h1>
  
  <section class="header">
    <h2>Michael Chen</h2>
    <p class="job-title">Project Manager</p>
    <p class="contact">michael.chen@email.com | (555) 567-8901 | linkedin.com/in/michaelchen</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Accomplished Project Manager with 5+ years of experience leading cross-functional teams and delivering complex projects on time and within budget. Proven track record of managing projects ranging from $200K to $2M with strong focus on stakeholder communication, risk management, and process improvement. PMP certified with expertise in Agile and Waterfall methodologies.</p>
  </section>

  <section class="skills">
    <h3>Core Competencies</h3>
    <ul>
      <li><strong>Project Management:</strong> Agile/Scrum, Waterfall, Risk Management, Budget Management, Resource Planning</li>
      <li><strong>Tools:</strong> Jira, Microsoft Project, Smartsheet, Confluence, Tableau</li>
      <li><strong>Leadership:</strong> Team Leadership, Stakeholder Management, Conflict Resolution, Change Management</li>
      <li><strong>Methodologies:</strong> PMI/PMBOK, Scrum, Kanban, Lean Six Sigma</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Project Manager</h4>
      <p class="company">Tech Innovations Corp | March 2022 - Present</p>
      <ul>
        <li>Lead portfolio of 5-7 concurrent technology projects with combined budget of $3M annually</li>
        <li>Manage cross-functional teams of 15-20 members including developers, designers, and business analysts</li>
        <li>Implemented Agile transformation initiative reducing project delivery time by 35%</li>
        <li>Achieved 95% on-time delivery rate across all projects in 2024</li>
        <li>Conduct regular stakeholder meetings and provide executive-level status reporting</li>
        <li>Identify and mitigate project risks, maintaining comprehensive risk registers</li>
      </ul>
    </div>

    <div class="job">
      <h4>Associate Project Manager</h4>
      <p class="company">Business Solutions Inc | June 2019 - Feb 2022</p>
      <ul>
        <li>Managed 3-4 client projects simultaneously with budgets ranging from $200K to $800K</li>
        <li>Coordinated project schedules, resources, and deliverables using Microsoft Project</li>
        <li>Facilitated daily stand-ups, sprint planning, and retrospective meetings</li>
        <li>Developed project documentation including charters, plans, and status reports</li>
        <li>Maintained 98% client satisfaction rating through effective communication and delivery</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Key Projects</h3>
    
    <div class="project">
      <h4>Enterprise Software Implementation</h4>
      <ul>
        <li>Led $1.5M enterprise software implementation project for Fortune 500 client</li>
        <li>Managed team of 25 across multiple locations and time zones</li>
        <li>Delivered project 2 weeks ahead of schedule and 10% under budget</li>
        <li>Achieved 100% user adoption within first month of launch</li>
      </ul>
    </div>

    <div class="project">
      <h4>Digital Transformation Initiative</h4>
      <ul>
        <li>Directed digital transformation project modernizing legacy systems</li>
        <li>Coordinated with 8 different departments to ensure smooth transition</li>
        <li>Reduced operational costs by 25% through process automation</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Bachelor of Science in Business Administration</h4>
      <p class="school">University of Business | 2019</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> Project Management Professional (PMP), Certified ScrumMaster (CSM), Lean Six Sigma Green Belt</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'mgmt-senior-1',
    title: 'Senior Program Manager',
    category: 'Management',
    experienceLevel: 'Senior-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Senior Program Manager</h1>
  
  <section class="header">
    <h2>David Park</h2>
    <p class="job-title">Senior Program Manager</p>
    <p class="contact">david.park@email.com | (555) 678-9012 | linkedin.com/in/davidpark</p>
  </section>

  <section class="summary">
    <h3>Executive Summary</h3>
    <p>Strategic Senior Program Manager with 10+ years of experience leading enterprise-scale initiatives and driving organizational transformation. Proven expertise in managing multi-million dollar programs, building high-performing teams, and delivering measurable business value. Strong track record of stakeholder engagement, strategic planning, and operational excellence across technology and business domains.</p>
  </section>

  <section class="skills">
    <h3>Core Competencies</h3>
    <ul>
      <li><strong>Program Leadership:</strong> Strategic Planning, Portfolio Management, Governance, Business Case Development</li>
      <li><strong>Financial Management:</strong> Budget Planning ($5M-$20M), Cost Control, ROI Analysis, Resource Optimization</li>
      <li><strong>Stakeholder Management:</strong> Executive Communication, Change Management, Vendor Management</li>
      <li><strong>Methodologies:</strong> Agile at Scale, SAFe, PMI/PMBOK, Lean, Design Thinking</li>
      <li><strong>Tools:</strong> Jira, ServiceNow, Tableau, Power BI, Microsoft Project, Smartsheet</li>
      <li><strong>Leadership:</strong> Team Building, Mentorship, Conflict Resolution, Performance Management</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Senior Program Manager</h4>
      <p class="company">Global Tech Corporation | Jan 2020 - Present</p>
      <ul>
        <li>Lead strategic program portfolio valued at $15M+ annually across 12+ concurrent initiatives</li>
        <li>Manage program team of 80+ resources including project managers, engineers, and business analysts</li>
        <li>Directed enterprise-wide digital transformation program resulting in $5M annual cost savings</li>
        <li>Established program management office (PMO) implementing standardized processes and governance</li>
        <li>Present quarterly business reviews to C-suite executives and board of directors</li>
        <li>Achieved 98% program success rate with consistent on-time and on-budget delivery</li>
        <li>Mentor 5 project managers, conducting performance reviews and career development planning</li>
      </ul>
    </div>

    <div class="job">
      <h4>Program Manager</h4>
      <p class="company">Enterprise Solutions Inc | March 2017 - Dec 2019</p>
      <ul>
        <li>Managed $8M program delivering cloud migration for 200+ enterprise applications</li>
        <li>Led cross-functional team of 50+ across engineering, operations, and security</li>
        <li>Reduced infrastructure costs by 40% through strategic cloud optimization</li>
        <li>Implemented Agile at Scale framework improving delivery velocity by 45%</li>
        <li>Negotiated vendor contracts saving $1.2M in annual licensing costs</li>
      </ul>
    </div>

    <div class="job">
      <h4>Senior Project Manager</h4>
      <p class="company">Technology Consulting Group | June 2014 - Feb 2017</p>
      <ul>
        <li>Led multiple concurrent client engagements with budgets ranging from $500K to $3M</li>
        <li>Managed relationships with Fortune 500 clients across financial services and healthcare</li>
        <li>Delivered 15+ successful projects with 100% client satisfaction rating</li>
        <li>Developed project management best practices adopted across consulting practice</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Strategic Initiatives</h3>
    
    <div class="project">
      <h4>Enterprise Cloud Transformation</h4>
      <ul>
        <li>Led $12M multi-year program migrating 300+ applications to AWS cloud platform</li>
        <li>Coordinated with 15 different business units and external vendors</li>
        <li>Achieved 99.9% uptime during migration with zero data loss</li>
        <li>Delivered $4M in annual cost savings through infrastructure optimization</li>
      </ul>
    </div>

    <div class="project">
      <h4>Global ERP Implementation</h4>
      <ul>
        <li>Directed $10M SAP implementation across 8 countries and 12 business units</li>
        <li>Managed program team of 100+ including consultants and internal staff</li>
        <li>Completed rollout 3 months ahead of schedule</li>
        <li>Improved operational efficiency by 35% through process standardization</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Master of Business Administration (MBA)</h4>
      <p class="school">Business School | 2014</p>
    </div>
    <div class="degree">
      <h4>Bachelor of Science in Information Systems</h4>
      <p class="school">Tech University | 2012</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> PMP, PgMP, SAFe Program Consultant (SPC), Certified Scrum Professional (CSP), ITIL v4</p>
    </div>
  </section>
</div>
    `
  },
  // Design Resumes
  {
    id: 'design-entry-1',
    title: 'UI/UX Designer - Entry Level',
    category: 'Design',
    experienceLevel: 'Entry-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>UI/UX Designer - Entry Level</h1>
  
  <section class="header">
    <h2>Maya Patel</h2>
    <p class="job-title">Junior UI/UX Designer</p>
    <p class="contact">maya.patel@email.com | (555) 789-0123 | portfolio.mayapatel.design | linkedin.com/in/mayapatel</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Creative and user-focused UI/UX Designer with strong foundation in design principles and user-centered design methodology. Recent graduate with hands-on experience creating intuitive interfaces through academic projects and internship. Passionate about solving user problems through thoughtful design and eager to contribute fresh perspectives to a collaborative design team.</p>
  </section>

  <section class="skills">
    <h3>Design Skills</h3>
    <ul>
      <li><strong>Design Tools:</strong> Figma, Adobe XD, Sketch, Adobe Photoshop, Adobe Illustrator</li>
      <li><strong>Prototyping:</strong> Figma, InVision, Marvel, Adobe XD</li>
      <li><strong>Skills:</strong> User Research, Wireframing, Prototyping, Visual Design, Responsive Design</li>
      <li><strong>Technical:</strong> HTML, CSS, Basic JavaScript, Design Systems</li>
      <li><strong>Soft Skills:</strong> Communication, Collaboration, Problem-Solving, Time Management</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Experience</h3>
    
    <div class="job">
      <h4>UI/UX Design Intern</h4>
      <p class="company">Digital Creative Agency | Summer 2024</p>
      <ul>
        <li>Designed user interfaces for 3 client projects including mobile app and web applications</li>
        <li>Conducted user research interviews with 15+ participants to gather insights and feedback</li>
        <li>Created wireframes, mockups, and interactive prototypes using Figma</li>
        <li>Collaborated with developers to ensure design implementation accuracy</li>
        <li>Participated in design critiques and incorporated feedback to improve designs</li>
      </ul>
    </div>

    <div class="job">
      <h4>Freelance Designer</h4>
      <p class="company">Self-Employed | Jan 2024 - Present</p>
      <ul>
        <li>Designed logos, branding materials, and social media graphics for 5 small businesses</li>
        <li>Managed client relationships from initial consultation through final delivery</li>
        <li>Delivered projects on time while maintaining high quality standards</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Design Projects</h3>
    
    <div class="project">
      <h4>Fitness Tracking Mobile App</h4>
      <p class="tech">Figma, User Research, Prototyping</p>
      <ul>
        <li>Designed complete mobile app interface for fitness tracking application</li>
        <li>Conducted user research with 20 potential users to identify pain points</li>
        <li>Created user personas, user flows, and information architecture</li>
        <li>Developed high-fidelity mockups and interactive prototype</li>
      </ul>
    </div>

    <div class="project">
      <h4>E-commerce Website Redesign</h4>
      <p class="tech">Adobe XD, Responsive Design</p>
      <ul>
        <li>Redesigned e-commerce website improving user experience and visual appeal</li>
        <li>Created responsive designs for desktop, tablet, and mobile devices</li>
        <li>Implemented design system with reusable components</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education</h3>
    <div class="degree">
      <h4>Bachelor of Fine Arts in Graphic Design</h4>
      <p class="school">Design Institute | Graduated May 2024</p>
      <p class="honors">GPA: 3.7/4.0 | Portfolio Award Winner</p>
      <p class="coursework"><strong>Relevant Coursework:</strong> UI/UX Design, Interaction Design, Typography, Visual Communication, Design Thinking</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'design-mid-1',
    title: 'Product Designer - Mid Level',
    category: 'Design',
    experienceLevel: 'Mid-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Product Designer - Mid Level</h1>
  
  <section class="header">
    <h2>Taylor Kim</h2>
    <p class="job-title">Product Designer</p>
    <p class="contact">taylor.kim@email.com | (555) 890-1234 | taylorkim.design | linkedin.com/in/taylorkim</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>User-centered Product Designer with 4+ years of experience creating intuitive digital experiences for web and mobile platforms. Proven ability to lead design projects from research through implementation, collaborating effectively with cross-functional teams. Strong expertise in user research, interaction design, and design systems with track record of improving user engagement and satisfaction metrics.</p>
  </section>

  <section class="skills">
    <h3>Design Expertise</h3>
    <ul>
      <li><strong>Design Tools:</strong> Figma, Sketch, Adobe Creative Suite, Principle, Framer</li>
      <li><strong>Research:</strong> User Interviews, Usability Testing, A/B Testing, Analytics Analysis, Surveys</li>
      <li><strong>Design:</strong> UI/UX Design, Interaction Design, Visual Design, Design Systems, Accessibility (WCAG)</li>
      <li><strong>Prototyping:</strong> High-Fidelity Prototypes, Interactive Prototypes, Micro-interactions</li>
      <li><strong>Technical:</strong> HTML/CSS, Basic JavaScript, React Components, Design Tokens</li>
      <li><strong>Collaboration:</strong> Agile/Scrum, Design Sprints, Stakeholder Presentations</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Product Designer</h4>
      <p class="company">TechFlow Solutions | June 2022 - Present</p>
      <ul>
        <li>Lead design for SaaS platform serving 50K+ users, improving user satisfaction score from 3.8 to 4.6/5</li>
        <li>Conduct user research including interviews, usability tests, and data analysis to inform design decisions</li>
        <li>Design and maintain comprehensive design system used across 5 product teams</li>
        <li>Collaborate with product managers and engineers in Agile environment to deliver features bi-weekly</li>
        <li>Redesigned onboarding flow increasing user activation rate by 35%</li>
        <li>Present design concepts and research findings to stakeholders and executive team</li>
      </ul>
    </div>

    <div class="job">
      <h4>UI/UX Designer</h4>
      <p class="company">Digital Innovations Inc | July 2020 - May 2022</p>
      <ul>
        <li>Designed user interfaces for mobile and web applications across multiple client projects</li>
        <li>Conducted usability testing sessions with 100+ participants gathering actionable insights</li>
        <li>Created wireframes, prototypes, and high-fidelity mockups using Figma and Sketch</li>
        <li>Collaborated with development team ensuring pixel-perfect implementation</li>
        <li>Improved checkout conversion rate by 28% through iterative design improvements</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Key Projects</h3>
    
    <div class="project">
      <h4>Mobile Banking App Redesign</h4>
      <ul>
        <li>Led complete redesign of mobile banking app for 200K+ active users</li>
        <li>Conducted extensive user research including 30 interviews and usability tests</li>
        <li>Improved task completion rate by 40% and reduced support tickets by 25%</li>
        <li>Designed accessible interface meeting WCAG 2.1 AA standards</li>
      </ul>
    </div>

    <div class="project">
      <h4>Design System Implementation</h4>
      <ul>
        <li>Built comprehensive design system with 50+ reusable components</li>
        <li>Created documentation and guidelines for design and development teams</li>
        <li>Reduced design-to-development handoff time by 50%</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education</h3>
    <div class="degree">
      <h4>Bachelor of Arts in Interaction Design</h4>
      <p class="school">Design University | 2020</p>
      <p class="honors">Magna Cum Laude</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'design-senior-1',
    title: 'Senior UX Designer',
    category: 'Design',
    experienceLevel: 'Senior-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Senior UX Designer</h1>
  
  <section class="header">
    <h2>Rachel Foster</h2>
    <p class="job-title">Senior UX Designer</p>
    <p class="contact">rachel.foster@email.com | (555) 901-2345 | rachelfoster.design | linkedin.com/in/rachelfoster</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Strategic Senior UX Designer with 8+ years of experience leading design initiatives for enterprise and consumer products. Expert in user research, design strategy, and cross-functional collaboration with proven track record of delivering measurable business impact. Skilled at mentoring design teams, establishing design processes, and advocating for user-centered design at organizational level.</p>
  </section>

  <section class="skills">
    <h3>Core Competencies</h3>
    <ul>
      <li><strong>Design Leadership:</strong> Design Strategy, Team Mentorship, Stakeholder Management, Design Operations</li>
      <li><strong>Research:</strong> User Research, Ethnographic Studies, Quantitative Analysis, Journey Mapping, Service Design</li>
      <li><strong>Design:</strong> UI/UX Design, Interaction Design, Information Architecture, Design Systems, Accessibility</li>
      <li><strong>Tools:</strong> Figma, Sketch, Adobe Creative Suite, Miro, UserTesting, Hotjar, Amplitude</li>
      <li><strong>Technical:</strong> HTML/CSS, JavaScript, React, Design APIs, Design Tokens</li>
      <li><strong>Methodologies:</strong> Design Thinking, Lean UX, Agile, Design Sprints, Jobs-to-be-Done</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Senior UX Designer</h4>
      <p class="company">Enterprise Software Corp | Jan 2021 - Present</p>
      <ul>
        <li>Lead UX strategy for enterprise platform serving 500K+ users across 50+ countries</li>
        <li>Manage and mentor team of 4 designers, conducting design reviews and career development</li>
        <li>Established design research practice conducting 200+ user interviews and usability tests annually</li>
        <li>Redesigned core product experience increasing user engagement by 45% and reducing churn by 20%</li>
        <li>Built and maintain enterprise design system adopted across 8 product teams</li>
        <li>Partner with product and engineering leadership to define product roadmap and strategy</li>
        <li>Present design vision and research insights to C-suite executives and board members</li>
      </ul>
    </div>

    <div class="job">
      <h4>UX Designer</h4>
      <p class="company">FinTech Innovations | March 2018 - Dec 2020</p>
      <ul>
        <li>Led design for mobile banking platform with 1M+ active users</li>
        <li>Conducted comprehensive user research program including field studies and usability testing</li>
        <li>Designed accessible experiences meeting WCAG 2.1 AAA standards</li>
        <li>Improved mobile app rating from 3.2 to 4.7 stars through iterative design improvements</li>
        <li>Collaborated with data science team to implement personalization features</li>
        <li>Reduced customer support calls by 30% through improved information architecture</li>
      </ul>
    </div>

    <div class="job">
      <h4>Product Designer</h4>
      <p class="company">Digital Agency | June 2016 - Feb 2018</p>
      <ul>
        <li>Designed digital experiences for Fortune 500 clients across various industries</li>
        <li>Led design sprints and workshops with client stakeholders</li>
        <li>Created design systems and pattern libraries for multiple client projects</li>
        <li>Mentored junior designers and conducted design critiques</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Notable Projects & Impact</h3>
    
    <div class="project">
      <h4>Enterprise Dashboard Redesign</h4>
      <ul>
        <li>Led complete redesign of analytics dashboard used by 100K+ business users</li>
        <li>Conducted extensive research including 50 user interviews and contextual inquiries</li>
        <li>Improved task efficiency by 60% and user satisfaction score from 2.8 to 4.5/5</li>
        <li>Reduced training time for new users from 4 hours to 45 minutes</li>
      </ul>
    </div>

    <div class="project">
      <h4>Design System & Operations</h4>
      <ul>
        <li>Established design system serving 200+ designers and developers</li>
        <li>Created design operations framework improving team efficiency by 40%</li>
        <li>Implemented design quality metrics and regular design audits</li>
      </ul>
    </div>

    <div class="project">
      <h4>Thought Leadership</h4>
      <ul>
        <li>Speaker at 5 international design conferences on UX research and design systems</li>
        <li>Published articles on design strategy reaching 50K+ readers</li>
        <li>Mentor in design mentorship program supporting 10+ early-career designers</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Master of Human-Computer Interaction</h4>
      <p class="school">Tech Institute | 2016</p>
    </div>
    <div class="degree">
      <h4>Bachelor of Fine Arts in Visual Design</h4>
      <p class="school">Art University | 2014</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> Nielsen Norman Group UX Certification, Certified Usability Analyst (CUA)</p>
    </div>
  </section>
</div>
    `
  },
  // IT Resumes
  {
    id: 'it-entry-1',
    title: 'IT Support Specialist - Entry Level',
    category: 'IT',
    experienceLevel: 'Entry-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>IT Support Specialist - Entry Level</h1>
  
  <section class="header">
    <h2>James Wilson</h2>
    <p class="job-title">IT Support Specialist</p>
    <p class="contact">james.wilson@email.com | (555) 012-3456 | linkedin.com/in/jameswilson</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Detail-oriented IT Support Specialist with strong technical troubleshooting skills and passion for helping users resolve technology issues. Recent graduate with hands-on experience supporting Windows and Mac environments through internship and academic projects. Excellent communication skills with ability to explain technical concepts to non-technical users.</p>
  </section>

  <section class="skills">
    <h3>Technical Skills</h3>
    <ul>
      <li><strong>Operating Systems:</strong> Windows 10/11, macOS, Linux (Ubuntu)</li>
      <li><strong>Hardware:</strong> Desktop/Laptop Repair, Printer Configuration, Network Setup</li>
      <li><strong>Software:</strong> Microsoft Office 365, Active Directory, Remote Desktop, Ticketing Systems</li>
      <li><strong>Networking:</strong> TCP/IP, DNS, DHCP, VPN, Basic Network Troubleshooting</li>
      <li><strong>Tools:</strong> ServiceNow, Jira Service Desk, TeamViewer, Remote Support Tools</li>
      <li><strong>Soft Skills:</strong> Customer Service, Problem-Solving, Documentation, Time Management</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Experience</h3>
    
    <div class="job">
      <h4>IT Support Intern</h4>
      <p class="company">Corporate Solutions Inc | Summer 2024</p>
      <ul>
        <li>Provided technical support to 200+ employees resolving hardware and software issues</li>
        <li>Responded to 30+ support tickets daily achieving 95% first-call resolution rate</li>
        <li>Assisted with new employee onboarding including account setup and equipment configuration</li>
        <li>Documented troubleshooting procedures and created knowledge base articles</li>
        <li>Performed hardware upgrades and software installations on workstations</li>
      </ul>
    </div>

    <div class="job">
      <h4>Computer Lab Assistant</h4>
      <p class="company">State University | Sept 2023 - May 2024</p>
      <ul>
        <li>Provided technical assistance to students and faculty in computer lab environment</li>
        <li>Troubleshot software issues and printer problems</li>
        <li>Maintained lab equipment ensuring all systems were operational</li>
        <li>Assisted with software installations and updates</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Projects & Certifications</h3>
    
    <div class="project">
      <h4>Home Network Setup</h4>
      <ul>
        <li>Designed and implemented home network with router configuration and security settings</li>
        <li>Set up network-attached storage (NAS) for file sharing</li>
        <li>Configured VPN for secure remote access</li>
      </ul>
    </div>

    <div class="certifications">
      <p><strong>Certifications:</strong> CompTIA A+ (In Progress), Google IT Support Professional Certificate</p>
    </div>
  </section>

  <section class="education">
    <h3>Education</h3>
    <div class="degree">
      <h4>Associate Degree in Information Technology</h4>
      <p class="school">Community College | Graduated May 2024</p>
      <p class="honors">GPA: 3.8/4.0</p>
      <p class="coursework"><strong>Relevant Coursework:</strong> Computer Hardware, Networking Fundamentals, Operating Systems, IT Security Basics</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'it-mid-1',
    title: 'Systems Administrator - Mid Level',
    category: 'IT',
    experienceLevel: 'Mid-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Systems Administrator - Mid Level</h1>
  
  <section class="header">
    <h2>Lisa Anderson</h2>
    <p class="job-title">Systems Administrator</p>
    <p class="contact">lisa.anderson@email.com | (555) 123-4567 | linkedin.com/in/lisaanderson</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Experienced Systems Administrator with 5+ years managing enterprise IT infrastructure and ensuring high availability of critical systems. Proven expertise in Windows Server, Linux administration, virtualization, and cloud technologies. Strong track record of implementing automation solutions, improving system performance, and maintaining security compliance.</p>
  </section>

  <section class="skills">
    <h3>Technical Expertise</h3>
    <ul>
      <li><strong>Operating Systems:</strong> Windows Server 2016/2019/2022, Linux (RHEL, CentOS, Ubuntu), VMware ESXi</li>
      <li><strong>Cloud Platforms:</strong> AWS (EC2, S3, IAM, CloudWatch), Azure (VMs, Storage, AD)</li>
      <li><strong>Virtualization:</strong> VMware vSphere, Hyper-V, Docker</li>
      <li><strong>Directory Services:</strong> Active Directory, Azure AD, LDAP, Group Policy</li>
      <li><strong>Automation:</strong> PowerShell, Bash, Python, Ansible</li>
      <li><strong>Monitoring:</strong> Nagios, Zabbix, Splunk, ELK Stack</li>
      <li><strong>Backup & Recovery:</strong> Veeam, Commvault, AWS Backup</li>
      <li><strong>Security:</strong> Firewall Management, Patch Management, Security Hardening</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Systems Administrator</h4>
      <p class="company">Enterprise Tech Solutions | March 2022 - Present</p>
      <ul>
        <li>Manage hybrid infrastructure supporting 500+ users across Windows and Linux environments</li>
        <li>Maintain 99.9% uptime for critical business systems through proactive monitoring and maintenance</li>
        <li>Implemented automation scripts reducing manual tasks by 40% and improving efficiency</li>
        <li>Migrated 50+ servers to AWS cloud reducing infrastructure costs by 30%</li>
        <li>Manage Active Directory environment with 1,000+ user accounts and 200+ group policies</li>
        <li>Coordinate with security team to implement patches and security updates</li>
        <li>Provide tier 3 support for escalated technical issues</li>
      </ul>
    </div>

    <div class="job">
      <h4>Junior Systems Administrator</h4>
      <p class="company">Business Solutions Corp | June 2019 - Feb 2022</p>
      <ul>
        <li>Administered Windows Server environment supporting 300+ users</li>
        <li>Managed VMware virtualization infrastructure with 80+ virtual machines</li>
        <li>Implemented backup and disaster recovery procedures using Veeam</li>
        <li>Performed system monitoring and troubleshooting using Nagios</li>
        <li>Created PowerShell scripts for user account management and reporting</li>
        <li>Assisted with network administration and firewall configuration</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Key Projects</h3>
    
    <div class="project">
      <h4>Cloud Migration Initiative</h4>
      <ul>
        <li>Led migration of on-premises infrastructure to AWS cloud</li>
        <li>Planned and executed migration of 50+ servers with zero downtime</li>
        <li>Implemented auto-scaling and load balancing for improved reliability</li>
        <li>Reduced monthly infrastructure costs by $15,000</li>
      </ul>
    </div>

    <div class="project">
      <h4>Automation Framework</h4>
      <ul>
        <li>Developed PowerShell automation framework for routine administrative tasks</li>
        <li>Automated user provisioning process reducing setup time from 2 hours to 15 minutes</li>
        <li>Created automated reporting system for system health and compliance</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Bachelor of Science in Information Technology</h4>
      <p class="school">Tech University | 2019</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> Microsoft Certified: Azure Administrator, CompTIA Linux+, VMware Certified Professional (VCP)</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'it-senior-1',
    title: 'Senior IT Infrastructure Engineer',
    category: 'IT',
    experienceLevel: 'Senior-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Senior IT Infrastructure Engineer</h1>
  
  <section class="header">
    <h2>Robert Johnson</h2>
    <p class="job-title">Senior IT Infrastructure Engineer</p>
    <p class="contact">robert.johnson@email.com | (555) 234-5678 | linkedin.com/in/robertjohnson</p>
  </section>

  <section class="summary">
    <h3>Executive Summary</h3>
    <p>Strategic Senior IT Infrastructure Engineer with 10+ years of experience designing, implementing, and managing enterprise-scale IT infrastructure. Expert in cloud architecture, automation, and infrastructure as code with proven track record of leading complex technical initiatives. Strong leadership skills with experience mentoring teams and driving organizational transformation toward modern infrastructure practices.</p>
  </section>

  <section class="skills">
    <h3>Core Competencies</h3>
    <ul>
      <li><strong>Cloud Architecture:</strong> AWS (Solutions Architect), Azure, Multi-Cloud Strategy, Cloud Migration</li>
      <li><strong>Infrastructure as Code:</strong> Terraform, CloudFormation, Ansible, Puppet</li>
      <li><strong>Containerization:</strong> Docker, Kubernetes, ECS, Container Orchestration</li>
      <li><strong>Operating Systems:</strong> Linux (RHEL, Ubuntu, CentOS), Windows Server, Unix</li>
      <li><strong>Automation:</strong> Python, PowerShell, Bash, CI/CD Pipelines, Jenkins</li>
      <li><strong>Networking:</strong> TCP/IP, DNS, Load Balancing, VPN, SD-WAN, Network Security</li>
      <li><strong>Monitoring:</strong> Prometheus, Grafana, ELK Stack, Datadog, CloudWatch</li>
      <li><strong>Security:</strong> Security Architecture, Compliance (SOC 2, HIPAA), Zero Trust</li>
      <li><strong>Leadership:</strong> Team Management, Technical Strategy, Vendor Management, Budget Planning</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Senior IT Infrastructure Engineer</h4>
      <p class="company">Global Enterprise Corp | Jan 2020 - Present</p>
      <ul>
        <li>Lead infrastructure team of 8 engineers managing hybrid cloud environment supporting 5,000+ users</li>
        <li>Architect and implement enterprise infrastructure solutions across AWS and Azure platforms</li>
        <li>Designed and executed multi-year cloud transformation strategy migrating 80% of workloads to cloud</li>
        <li>Reduced infrastructure costs by $500K annually through optimization and automation initiatives</li>
        <li>Implemented infrastructure as code practices using Terraform managing 200+ cloud resources</li>
        <li>Established DevOps culture implementing CI/CD pipelines and automation frameworks</li>
        <li>Achieved 99.99% uptime for critical business systems through robust architecture and monitoring</li>
        <li>Lead disaster recovery planning and testing ensuring business continuity</li>
      </ul>
    </div>

    <div class="job">
      <h4>Infrastructure Engineer</h4>
      <p class="company">Technology Services Inc | March 2017 - Dec 2019</p>
      <ul>
        <li>Managed enterprise infrastructure supporting 2,000+ users across multiple locations</li>
        <li>Led migration of data center infrastructure to AWS cloud platform</li>
        <li>Implemented Kubernetes cluster for containerized application deployment</li>
        <li>Designed and deployed monitoring solution using Prometheus and Grafana</li>
        <li>Automated infrastructure provisioning reducing deployment time from days to hours</li>
        <li>Managed vendor relationships and negotiated contracts saving $200K annually</li>
      </ul>
    </div>

    <div class="job">
      <h4>Systems Engineer</h4>
      <p class="company">IT Solutions Group | June 2014 - Feb 2017</p>
      <ul>
        <li>Administered Windows and Linux server environments supporting 1,000+ users</li>
        <li>Implemented VMware virtualization infrastructure consolidating 100+ physical servers</li>
        <li>Developed automation scripts improving operational efficiency by 50%</li>
        <li>Managed backup and disaster recovery systems ensuring data protection</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Strategic Initiatives</h3>
    
    <div class="project">
      <h4>Enterprise Cloud Transformation</h4>
      <ul>
        <li>Led $2M cloud transformation initiative migrating 300+ applications to AWS</li>
        <li>Designed multi-region architecture ensuring high availability and disaster recovery</li>
        <li>Implemented landing zone architecture with security and compliance controls</li>
        <li>Achieved 40% reduction in infrastructure costs and 60% improvement in deployment speed</li>
      </ul>
    </div>

    <div class="project">
      <h4>Infrastructure Automation Platform</h4>
      <ul>
        <li>Built comprehensive infrastructure automation platform using Terraform and Ansible</li>
        <li>Automated provisioning of 500+ cloud resources across multiple environments</li>
        <li>Reduced infrastructure deployment time from 2 weeks to 2 hours</li>
        <li>Implemented self-service portal for development teams</li>
      </ul>
    </div>

    <div class="project">
      <h4>Zero Trust Security Implementation</h4>
      <ul>
        <li>Designed and implemented zero trust security architecture</li>
        <li>Deployed identity-based access controls and micro-segmentation</li>
        <li>Achieved SOC 2 Type II compliance certification</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Master of Science in Information Systems</h4>
      <p class="school">Tech University | 2014</p>
    </div>
    <div class="degree">
      <h4>Bachelor of Science in Computer Science</h4>
      <p class="school">State University | 2012</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> AWS Certified Solutions Architect Professional, Microsoft Certified: Azure Solutions Architect Expert, Certified Kubernetes Administrator (CKA), CISSP</p>
    </div>
  </section>
</div>
    `
  },
  // Healthcare Resumes
  {
    id: 'health-entry-1',
    title: 'Medical Assistant - Entry Level',
    category: 'Healthcare',
    experienceLevel: 'Entry-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Medical Assistant - Entry Level</h1>
  
  <section class="header">
    <h2>Maria Garcia</h2>
    <p class="job-title">Certified Medical Assistant</p>
    <p class="contact">maria.garcia@email.com | (555) 345-6789 | linkedin.com/in/mariagarcia</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Compassionate and detail-oriented Certified Medical Assistant with strong clinical and administrative skills. Recent graduate with hands-on experience through externship in busy medical practice. Committed to providing excellent patient care and supporting healthcare teams in delivering quality medical services. Excellent communication skills with ability to work effectively in fast-paced environments.</p>
  </section>

  <section class="skills">
    <h3>Clinical & Administrative Skills</h3>
    <ul>
      <li><strong>Clinical:</strong> Vital Signs, EKG, Phlebotomy, Injections, Wound Care, Patient Assessment</li>
      <li><strong>Administrative:</strong> Medical Records, Appointment Scheduling, Insurance Verification, Medical Billing</li>
      <li><strong>Software:</strong> Electronic Health Records (EHR), Epic, Practice Management Systems</li>
      <li><strong>Compliance:</strong> HIPAA, Infection Control, Medical Ethics, Patient Confidentiality</li>
      <li><strong>Soft Skills:</strong> Patient Communication, Empathy, Teamwork, Time Management, Attention to Detail</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Experience</h3>
    
    <div class="job">
      <h4>Medical Assistant Extern</h4>
      <p class="company">Family Health Clinic | Jan 2024 - May 2024</p>
      <ul>
        <li>Assisted physicians with patient examinations and procedures in busy family practice</li>
        <li>Recorded patient vital signs, medical histories, and chief complaints accurately</li>
        <li>Performed EKGs, phlebotomy, and administered injections under supervision</li>
        <li>Maintained examination rooms ensuring cleanliness and proper supply levels</li>
        <li>Scheduled patient appointments and managed electronic health records</li>
        <li>Communicated with patients regarding test results and follow-up appointments</li>
      </ul>
    </div>

    <div class="job">
      <h4>Patient Care Volunteer</h4>
      <p class="company">Community Hospital | June 2023 - Dec 2023</p>
      <ul>
        <li>Provided compassionate support to patients and families in hospital setting</li>
        <li>Assisted nursing staff with non-clinical patient care tasks</li>
        <li>Maintained patient comfort and responded to basic needs</li>
        <li>Demonstrated professionalism and adherence to HIPAA regulations</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Medical Assistant Certificate</h4>
      <p class="school">Medical Career Institute | Completed May 2024</p>
      <p class="coursework"><strong>Coursework:</strong> Medical Terminology, Anatomy & Physiology, Clinical Procedures, Medical Office Management, Pharmacology</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> Certified Medical Assistant (CMA) - AAMA, BLS/CPR Certified, HIPAA Compliance Training</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'health-mid-1',
    title: 'Registered Nurse - Mid Level',
    category: 'Healthcare',
    experienceLevel: 'Mid-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Registered Nurse - Mid Level</h1>
  
  <section class="header">
    <h2>Jennifer Lee</h2>
    <p class="job-title">Registered Nurse, BSN</p>
    <p class="contact">jennifer.lee@email.com | (555) 456-7890 | linkedin.com/in/jenniferlee</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Dedicated Registered Nurse with 5+ years of experience providing high-quality patient care in acute care settings. Proven expertise in medical-surgical nursing, patient assessment, and care coordination. Strong clinical skills combined with compassionate patient-centered approach. Committed to evidence-based practice and continuous professional development.</p>
  </section>

  <section class="skills">
    <h3>Clinical Competencies</h3>
    <ul>
      <li><strong>Clinical Skills:</strong> Patient Assessment, Medication Administration, IV Therapy, Wound Care, Catheterization</li>
      <li><strong>Specialties:</strong> Medical-Surgical Nursing, Telemetry, Post-Operative Care, Chronic Disease Management</li>
      <li><strong>Technology:</strong> Epic EHR, Cerner, Medication Dispensing Systems, Telemetry Monitoring</li>
      <li><strong>Certifications:</strong> BLS, ACLS, PALS, Medical-Surgical Nursing Certification</li>
      <li><strong>Leadership:</strong> Charge Nurse Experience, Preceptorship, Quality Improvement Initiatives</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Registered Nurse - Medical-Surgical Unit</h4>
      <p class="company">Regional Medical Center | June 2022 - Present</p>
      <ul>
        <li>Provide comprehensive nursing care to 5-6 patients in 36-bed medical-surgical unit</li>
        <li>Perform thorough patient assessments and develop individualized care plans</li>
        <li>Administer medications, IV therapy, and treatments following established protocols</li>
        <li>Collaborate with interdisciplinary team including physicians, therapists, and social workers</li>
        <li>Serve as charge nurse coordinating unit operations and staff assignments</li>
        <li>Precept new graduate nurses and nursing students</li>
        <li>Participate in quality improvement initiatives improving patient satisfaction scores by 15%</li>
      </ul>
    </div>

    <div class="job">
      <h4>Registered Nurse - Telemetry Unit</h4>
      <p class="company">Community Hospital | July 2019 - May 2022</p>
      <ul>
        <li>Provided nursing care to cardiac and telemetry patients in 24-bed unit</li>
        <li>Monitored cardiac rhythms and responded to telemetry alarms appropriately</li>
        <li>Administered cardiac medications and monitored patient responses</li>
        <li>Educated patients and families on cardiac conditions and discharge instructions</li>
        <li>Maintained 98% medication administration accuracy rate</li>
        <li>Received Employee of the Quarter award for exceptional patient care</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Professional Contributions</h3>
    
    <div class="project">
      <h4>Fall Prevention Initiative</h4>
      <ul>
        <li>Led unit-based fall prevention quality improvement project</li>
        <li>Implemented evidence-based fall risk assessment protocol</li>
        <li>Reduced patient falls by 30% over 6-month period</li>
      </ul>
    </div>

    <div class="project">
      <h4>New Graduate Nurse Preceptorship</h4>
      <ul>
        <li>Precepted 8 new graduate nurses during orientation period</li>
        <li>Developed competency assessment tools and learning objectives</li>
        <li>Received positive feedback from preceptees and management</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Bachelor of Science in Nursing (BSN)</h4>
      <p class="school">State University School of Nursing | 2019</p>
      <p class="honors">Cum Laude</p>
    </div>
    <div class="certifications">
      <p><strong>Licenses & Certifications:</strong> RN License (State), Medical-Surgical Nursing Certification (RN-BC), BLS, ACLS, PALS</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'health-senior-1',
    title: 'Nurse Manager',
    category: 'Healthcare',
    experienceLevel: 'Senior-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Nurse Manager</h1>
  
  <section class="header">
    <h2>Patricia Williams</h2>
    <p class="job-title">Nurse Manager, MSN, RN</p>
    <p class="contact">patricia.williams@email.com | (555) 567-8901 | linkedin.com/in/patriciawilliams</p>
  </section>

  <section class="summary">
    <h3>Executive Summary</h3>
    <p>Strategic Nurse Manager with 12+ years of progressive nursing leadership experience managing acute care units. Proven expertise in staff development, quality improvement, and operational excellence. Strong track record of improving patient outcomes, staff satisfaction, and financial performance. Committed to fostering culture of safety, excellence, and evidence-based practice.</p>
  </section>

  <section class="skills">
    <h3>Leadership Competencies</h3>
    <ul>
      <li><strong>Leadership:</strong> Unit Management, Staff Development, Performance Management, Change Leadership</li>
      <li><strong>Operations:</strong> Budget Management, Staffing & Scheduling, Resource Allocation, Workflow Optimization</li>
      <li><strong>Quality:</strong> Quality Improvement, Patient Safety, Regulatory Compliance, Evidence-Based Practice</li>
      <li><strong>Clinical:</strong> Advanced Clinical Assessment, Critical Care, Emergency Response, Clinical Protocols</li>
      <li><strong>Technology:</strong> Epic EHR, Workforce Management Systems, Quality Dashboards, Data Analytics</li>
      <li><strong>Certifications:</strong> Nurse Executive Certification, BLS, ACLS, PALS, Six Sigma Green Belt</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Professional Experience</h3>
    
    <div class="job">
      <h4>Nurse Manager - Critical Care Unit</h4>
      <p class="company">University Medical Center | Jan 2020 - Present</p>
      <ul>
        <li>Lead 24-bed critical care unit with staff of 60+ nurses and support personnel</li>
        <li>Manage annual operating budget of $8M ensuring fiscal responsibility and cost containment</li>
        <li>Achieved 95% patient satisfaction score and maintained top quartile quality metrics</li>
        <li>Reduced nurse turnover from 18% to 8% through staff engagement initiatives</li>
        <li>Implemented evidence-based protocols improving patient outcomes and reducing complications</li>
        <li>Lead quality improvement initiatives including sepsis protocol reducing mortality by 20%</li>
        <li>Collaborate with medical staff, administration, and interdisciplinary teams</li>
        <li>Ensure regulatory compliance with Joint Commission, CMS, and state requirements</li>
      </ul>
    </div>

    <div class="job">
      <h4>Assistant Nurse Manager - Medical-Surgical Unit</h4>
      <p class="company">Regional Hospital | March 2017 - Dec 2019</p>
      <ul>
        <li>Assisted in managing 36-bed medical-surgical unit with 45 nursing staff</li>
        <li>Supervised daily operations including staffing, patient flow, and resource management</li>
        <li>Conducted performance evaluations and provided coaching to nursing staff</li>
        <li>Led unit-based quality improvement projects improving HCAHPS scores by 12%</li>
        <li>Served on hospital committees including quality council and nursing practice council</li>
        <li>Managed unit budget and controlled expenses within allocated resources</li>
      </ul>
    </div>

    <div class="job">
      <h4>Charge Nurse / Clinical Nurse</h4>
      <p class="company">Community Medical Center | June 2012 - Feb 2017</p>
      <ul>
        <li>Provided direct patient care in telemetry and medical-surgical units</li>
        <li>Served as charge nurse coordinating unit operations and staff assignments</li>
        <li>Precepted new nurses and nursing students</li>
        <li>Participated in shared governance and unit-based councils</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Leadership Initiatives</h3>
    
    <div class="project">
      <h4>Nurse Retention Program</h4>
      <ul>
        <li>Developed comprehensive nurse retention program addressing work-life balance</li>
        <li>Implemented flexible scheduling and professional development opportunities</li>
        <li>Reduced unit turnover by 55% saving $400K in recruitment costs</li>
      </ul>
    </div>

    <div class="project">
      <h4>Sepsis Quality Initiative</h4>
      <ul>
        <li>Led hospital-wide sepsis early recognition and treatment initiative</li>
        <li>Implemented evidence-based sepsis bundle and staff education program</li>
        <li>Reduced sepsis mortality rate by 20% and improved compliance to 95%</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Master of Science in Nursing - Nursing Leadership</h4>
      <p class="school">University School of Nursing | 2017</p>
    </div>
    <div class="degree">
      <h4>Bachelor of Science in Nursing (BSN)</h4>
      <p class="school">State University | 2012</p>
    </div>
    <div class="certifications">
      <p><strong>Licenses & Certifications:</strong> RN License (State), Nurse Executive Certification (NE-BC), BLS, ACLS, PALS, Six Sigma Green Belt</p>
    </div>
  </section>
</div>
    `
  },
  // Education Resumes
  {
    id: 'edu-entry-1',
    title: 'Elementary Teacher - Entry Level',
    category: 'Education',
    experienceLevel: 'Entry-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Elementary Teacher - Entry Level</h1>
  
  <section class="header">
    <h2>Amanda Brooks</h2>
    <p class="job-title">Elementary School Teacher</p>
    <p class="contact">amanda.brooks@email.com | (555) 678-9012 | linkedin.com/in/amandabrooks</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Enthusiastic and dedicated Elementary Teacher with strong foundation in child development and instructional strategies. Recent graduate with hands-on student teaching experience creating engaging, differentiated lessons for diverse learners. Passionate about fostering positive learning environment where all students can thrive. Committed to building strong relationships with students, families, and colleagues.</p>
  </section>

  <section class="skills">
    <h3>Teaching Skills</h3>
    <ul>
      <li><strong>Instruction:</strong> Lesson Planning, Differentiated Instruction, Classroom Management, Assessment</li>
      <li><strong>Curriculum:</strong> Common Core Standards, Literacy Instruction, Math Instruction, STEM Activities</li>
      <li><strong>Technology:</strong> Google Classroom, Seesaw, Smart Board, Educational Apps, Learning Management Systems</li>
      <li><strong>Student Support:</strong> Individualized Education Plans (IEPs), Behavior Management, Social-Emotional Learning</li>
      <li><strong>Communication:</strong> Parent Communication, Collaboration, Cultural Responsiveness</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Teaching Experience</h3>
    
    <div class="job">
      <h4>Student Teacher - 3rd Grade</h4>
      <p class="company">Lincoln Elementary School | Jan 2024 - May 2024</p>
      <ul>
        <li>Planned and delivered engaging lessons in all subject areas for class of 24 students</li>
        <li>Implemented differentiated instruction strategies to meet diverse learning needs</li>
        <li>Created positive classroom environment using proactive behavior management techniques</li>
        <li>Assessed student learning through formative and summative assessments</li>
        <li>Communicated regularly with parents through newsletters and conferences</li>
        <li>Collaborated with mentor teacher and grade-level team on curriculum planning</li>
      </ul>
    </div>

    <div class="job">
      <h4>Field Experience - 1st Grade</h4>
      <p class="company">Washington Elementary School | Sept 2023 - Dec 2023</p>
      <ul>
        <li>Assisted classroom teacher with instructional activities and small group instruction</li>
        <li>Provided one-on-one support to students needing additional assistance</li>
        <li>Prepared instructional materials and organized classroom resources</li>
        <li>Observed and implemented effective teaching strategies</li>
      </ul>
    </div>

    <div class="job">
      <h4>After-School Tutor</h4>
      <p class="company">Community Learning Center | Sept 2022 - May 2024</p>
      <ul>
        <li>Provided homework help and academic support to elementary students</li>
        <li>Developed engaging activities reinforcing literacy and math skills</li>
        <li>Built positive relationships with students and families</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Bachelor of Science in Elementary Education</h4>
      <p class="school">State University | Graduated May 2024</p>
      <p class="honors">GPA: 3.8/4.0 | Dean's List</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> Elementary Teaching License (Grades K-6), CPR/First Aid Certified</p>
      <p><strong>Endorsements:</strong> ESL Endorsement (In Progress)</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'edu-mid-1',
    title: 'Middle School Teacher - Mid Level',
    category: 'Education',
    experienceLevel: 'Mid-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>Middle School Teacher - Mid Level</h1>
  
  <section class="header">
    <h2>Daniel Martinez</h2>
    <p class="job-title">Middle School Science Teacher</p>
    <p class="contact">daniel.martinez@email.com | (555) 789-0123 | linkedin.com/in/danielmartinez</p>
  </section>

  <section class="summary">
    <h3>Professional Summary</h3>
    <p>Accomplished Middle School Science Teacher with 6+ years of experience engaging adolescent learners in hands-on, inquiry-based science education. Proven track record of improving student achievement through innovative teaching methods and differentiated instruction. Strong classroom management skills with ability to build positive relationships with students, families, and colleagues. Committed to fostering scientific literacy and critical thinking skills.</p>
  </section>

  <section class="skills">
    <h3>Professional Competencies</h3>
    <ul>
      <li><strong>Instruction:</strong> Inquiry-Based Learning, Project-Based Learning, STEM Integration, Differentiated Instruction</li>
      <li><strong>Curriculum:</strong> Next Generation Science Standards (NGSS), Lab Safety, Scientific Method, Assessment Design</li>
      <li><strong>Technology:</strong> Google Workspace, Canvas LMS, Virtual Labs, Data Analysis Tools, Interactive Simulations</li>
      <li><strong>Leadership:</strong> Department Collaboration, Curriculum Development, Mentoring, Professional Development</li>
      <li><strong>Student Support:</strong> IEP Accommodations, 504 Plans, English Language Learners, Gifted Education</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Teaching Experience</h3>
    
    <div class="job">
      <h4>Science Teacher - Grades 7-8</h4>
      <p class="company">Jefferson Middle School | Aug 2021 - Present</p>
      <ul>
        <li>Teach life science and physical science to 120+ students across 5 class periods</li>
        <li>Design and implement engaging, standards-aligned lessons incorporating hands-on labs and investigations</li>
        <li>Increased student proficiency on state science assessment from 68% to 82% over 3 years</li>
        <li>Serve as science department chair coordinating curriculum and assessment alignment</li>
        <li>Mentor 2 new teachers providing instructional coaching and support</li>
        <li>Lead school-wide STEM initiative organizing science fair and robotics club</li>
        <li>Maintain positive classroom environment with clear expectations and consistent routines</li>
      </ul>
    </div>

    <div class="job">
      <h4>Science Teacher - Grade 6</h4>
      <p class="company">Roosevelt Middle School | Aug 2018 - June 2021</p>
      <ul>
        <li>Taught earth science and life science to 100+ sixth grade students</li>
        <li>Implemented project-based learning units increasing student engagement</li>
        <li>Collaborated with grade-level team on interdisciplinary projects</li>
        <li>Communicated regularly with parents through email, phone calls, and conferences</li>
        <li>Participated in professional learning communities focused on data-driven instruction</li>
        <li>Received Teacher of the Year nomination for innovative teaching practices</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Professional Contributions</h3>
    
    <div class="project">
      <h4>STEM Integration Initiative</h4>
      <ul>
        <li>Developed cross-curricular STEM units integrating science, math, and technology</li>
        <li>Organized school-wide science fair with 200+ student participants</li>
        <li>Established robotics club serving 30 students</li>
      </ul>
    </div>

    <div class="project">
      <h4>Curriculum Development</h4>
      <ul>
        <li>Led department team in aligning curriculum to NGSS standards</li>
        <li>Created common assessments and rubrics for science department</li>
        <li>Developed lab safety protocols and procedures</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Master of Education in Curriculum & Instruction</h4>
      <p class="school">State University | 2020</p>
    </div>
    <div class="degree">
      <h4>Bachelor of Science in Biology</h4>
      <p class="school">Tech University | 2018</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> Middle School Science Teaching License (Grades 5-9), National Board Certification (In Progress)</p>
    </div>
  </section>
</div>
    `
  },
  {
    id: 'edu-senior-1',
    title: 'School Principal',
    category: 'Education',
    experienceLevel: 'Senior-Level',
    htmlContent: `
<div class="resume-sample">
  <h1>School Principal</h1>
  
  <section class="header">
    <h2>Dr. Susan Reynolds</h2>
    <p class="job-title">Elementary School Principal</p>
    <p class="contact">susan.reynolds@email.com | (555) 890-1234 | linkedin.com/in/susanreynolds</p>
  </section>

  <section class="summary">
    <h3>Executive Summary</h3>
    <p>Visionary educational leader with 15+ years of experience in K-12 education including 8 years in school administration. Proven track record of improving student achievement, building collaborative school culture, and implementing effective instructional programs. Strong expertise in curriculum development, teacher evaluation, and community engagement. Committed to equity, excellence, and creating learning environments where all students succeed.</p>
  </section>

  <section class="skills">
    <h3>Leadership Competencies</h3>
    <ul>
      <li><strong>Leadership:</strong> Strategic Planning, Instructional Leadership, Change Management, Team Building</li>
      <li><strong>Operations:</strong> Budget Management, Facilities Management, Scheduling, Compliance, Safety Protocols</li>
      <li><strong>Instruction:</strong> Curriculum Development, Teacher Evaluation, Professional Development, Data-Driven Instruction</li>
      <li><strong>Community:</strong> Parent Engagement, Community Partnerships, Public Relations, Stakeholder Communication</li>
      <li><strong>Student Support:</strong> Special Education, RTI, PBIS, Social-Emotional Learning, Equity Initiatives</li>
      <li><strong>Technology:</strong> Learning Management Systems, Student Information Systems, Data Analytics</li>
    </ul>
  </section>

  <section class="experience">
    <h3>Administrative Experience</h3>
    
    <div class="job">
      <h4>Principal</h4>
      <p class="company">Oakwood Elementary School | July 2019 - Present</p>
      <ul>
        <li>Lead K-5 elementary school serving 450 students with staff of 35 teachers and 15 support personnel</li>
        <li>Manage annual operating budget of $4M ensuring fiscal responsibility and resource allocation</li>
        <li>Increased student proficiency in reading from 72% to 88% and math from 68% to 85% over 5 years</li>
        <li>Implemented comprehensive professional development program focused on instructional best practices</li>
        <li>Established positive behavior intervention system reducing discipline referrals by 60%</li>
        <li>Built strong parent and community partnerships increasing family engagement by 40%</li>
        <li>Lead school improvement planning process with input from staff, parents, and community</li>
        <li>Conduct teacher evaluations and provide instructional coaching to improve teaching quality</li>
      </ul>
    </div>

    <div class="job">
      <h4>Assistant Principal</h4>
      <p class="company">Lincoln Middle School | Aug 2016 - June 2019</p>
      <ul>
        <li>Assisted principal in leading middle school of 600 students and 45 staff members</li>
        <li>Supervised curriculum and instruction for grades 6-8</li>
        <li>Managed student discipline and implemented restorative justice practices</li>
        <li>Coordinated special education services and 504 accommodations</li>
        <li>Led professional learning communities focused on data analysis and instructional improvement</li>
        <li>Improved school climate survey results by 25% through positive culture initiatives</li>
      </ul>
    </div>

    <div class="job">
      <h4>Instructional Coach</h4>
      <p class="company">District Office | Aug 2014 - July 2016</p>
      <ul>
        <li>Provided instructional coaching to teachers across 5 elementary schools</li>
        <li>Facilitated professional development on literacy and math instruction</li>
        <li>Analyzed student data and supported teachers in data-driven decision making</li>
        <li>Developed curriculum resources and instructional materials</li>
      </ul>
    </div>

    <div class="job">
      <h4>4th Grade Teacher</h4>
      <p class="company">Washington Elementary School | Aug 2009 - July 2014</p>
      <ul>
        <li>Taught all subject areas to diverse learners in self-contained classroom</li>
        <li>Served as grade-level team leader and mentor teacher</li>
        <li>Received Teacher of the Year award in 2013</li>
      </ul>
    </div>
  </section>

  <section class="projects">
    <h3>Leadership Initiatives</h3>
    
    <div class="project">
      <h4>School Turnaround Initiative</h4>
      <ul>
        <li>Led comprehensive school improvement plan addressing academic achievement gaps</li>
        <li>Implemented research-based instructional strategies and intervention programs</li>
        <li>Improved school rating from "Needs Improvement" to "Exemplary" in 4 years</li>
        <li>Increased student attendance rate from 92% to 96%</li>
      </ul>
    </div>

    <div class="project">
      <h4>Equity and Inclusion Program</h4>
      <ul>
        <li>Developed equity-focused professional development for all staff</li>
        <li>Implemented culturally responsive teaching practices</li>
        <li>Reduced achievement gaps for underserved student populations</li>
      </ul>
    </div>
  </section>

  <section class="education">
    <h3>Education & Certifications</h3>
    <div class="degree">
      <h4>Doctor of Education (Ed.D.) in Educational Leadership</h4>
      <p class="school">University of Education | 2018</p>
    </div>
    <div class="degree">
      <h4>Master of Education in Educational Administration</h4>
      <p class="school">State University | 2014</p>
    </div>
    <div class="degree">
      <h4>Bachelor of Science in Elementary Education</h4>
      <p class="school">Teachers College | 2009</p>
    </div>
    <div class="certifications">
      <p><strong>Certifications:</strong> Principal License (K-12), Superintendent License, National Board Certification</p>
    </div>
  </section>
</div>
    `
  }
];

export default function ResumeSamples() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedSample, setSelectedSample] = useState<ResumeSampleData | null>(null);

  const categories = [
    { value: 'all', label: 'All Fields' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Management', label: 'Management' },
    { value: 'Design', label: 'Design' },
    { value: 'IT', label: 'IT' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Education', label: 'Education' }
  ];

  const experienceLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'Entry-Level', label: 'Entry Level' },
    { value: 'Mid-Level', label: 'Mid Level' },
    { value: 'Senior-Level', label: 'Senior Level' }
  ];

  const filteredSamples = useMemo(() => {
    return RESUME_SAMPLES.filter((sample) => {
      const categoryMatch = selectedCategory === 'all' || sample.category === selectedCategory;
      const levelMatch = selectedLevel === 'all' || sample.experienceLevel === selectedLevel;
      return categoryMatch && levelMatch;
    });
  }, [selectedCategory, selectedLevel]);

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Complete Resume Samples</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Browse complete, original resume samples organized by field and experience level. Each sample includes detailed sections with professional content you can reference for your own resume.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <div className="w-full sm:w-64">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select field" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-64">
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredSamples.length} of {RESUME_SAMPLES.length} resume samples
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSamples.map((sample) => (
            <Card key={sample.id} className="group transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex items-start justify-between gap-2">
                  <Badge variant="secondary">{sample.experienceLevel}</Badge>
                  <Badge variant="outline">{sample.category}</Badge>
                </div>
                <CardTitle className="text-lg">{sample.title}</CardTitle>
                <CardDescription>
                  Complete resume sample with all sections including experience, education, and skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  onClick={() => setSelectedSample(sample)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Full Sample
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSamples.length === 0 && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">No Samples Found</h3>
            <p className="mb-4 text-muted-foreground">
              No resume samples found matching your filters. Try adjusting your selection.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Dialog open={!!selectedSample} onOpenChange={() => setSelectedSample(null)}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-hidden">
          <DialogHeader>
            <DialogTitle>{selectedSample?.title}</DialogTitle>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{selectedSample?.experienceLevel}</Badge>
              <Badge variant="outline">{selectedSample?.category}</Badge>
            </div>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
            <div 
              className="prose prose-sm max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: selectedSample?.htmlContent || '' }}
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                lineHeight: '1.6'
              }}
            />
          </ScrollArea>
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button variant="outline" onClick={() => setSelectedSample(null)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        .resume-sample {
          padding: 1rem;
        }
        .resume-sample h1 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: hsl(var(--primary));
          border-bottom: 2px solid hsl(var(--primary));
          padding-bottom: 0.5rem;
        }
        .resume-sample section {
          margin-bottom: 1.5rem;
        }
        .resume-sample .header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .resume-sample .job-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: hsl(var(--muted-foreground));
          margin-bottom: 0.5rem;
        }
        .resume-sample .contact {
          font-size: 0.9rem;
          color: hsl(var(--muted-foreground));
        }
        .resume-sample h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: hsl(var(--foreground));
          border-bottom: 1px solid hsl(var(--border));
          padding-bottom: 0.25rem;
        }
        .resume-sample h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          margin-top: 1rem;
        }
        .resume-sample .company, .resume-sample .school, .resume-sample .tech {
          font-style: italic;
          color: hsl(var(--muted-foreground));
          margin-bottom: 0.5rem;
        }
        .resume-sample ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .resume-sample li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .resume-sample .job, .resume-sample .project, .resume-sample .degree {
          margin-bottom: 1.25rem;
        }
        .resume-sample .honors, .resume-sample .coursework, .resume-sample .certifications {
          margin-top: 0.5rem;
          font-size: 0.95rem;
        }
        .resume-sample strong {
          font-weight: 600;
          color: hsl(var(--foreground));
        }
      `}</style>
    </div>
  );
}
