import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import type { Resume, PersonalInfo, WorkExperience, Education, Skill, Certification, Project } from '../../backend';

interface EditorPanelProps {
  resume: Resume;
  onUpdatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  onUpdateSummary: (summary: string) => void;
  onUpdateWorkExperience: (experience: WorkExperience[]) => void;
  onUpdateEducation: (education: Education[]) => void;
  onUpdateSkills: (skills: Skill[]) => void;
  onUpdateCertifications: (certifications: Certification[]) => void;
  onUpdateProjects: (projects: Project[]) => void;
}

export default function EditorPanel({
  resume,
  onUpdatePersonalInfo,
  onUpdateSummary,
  onUpdateWorkExperience,
  onUpdateEducation,
  onUpdateSkills,
  onUpdateCertifications,
  onUpdateProjects,
}: EditorPanelProps) {
  const addWorkExperience = () => {
    onUpdateWorkExperience([
      ...resume.workExperience,
      { company: '', position: '', startDate: '', endDate: '', description: [] },
    ]);
  };

  const updateWorkExperience = (index: number, field: keyof WorkExperience, value: any) => {
    const updated = [...resume.workExperience];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateWorkExperience(updated);
  };

  const removeWorkExperience = (index: number) => {
    onUpdateWorkExperience(resume.workExperience.filter((_, i) => i !== index));
  };

  const addEducation = () => {
    onUpdateEducation([
      ...resume.education,
      { institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', honors: '' },
    ]);
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const updated = [...resume.education];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateEducation(updated);
  };

  const removeEducation = (index: number) => {
    onUpdateEducation(resume.education.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    onUpdateSkills([...resume.skills, '']);
  };

  const updateSkill = (index: number, value: string) => {
    const updated = [...resume.skills];
    updated[index] = value;
    onUpdateSkills(updated);
  };

  const removeSkill = (index: number) => {
    onUpdateSkills(resume.skills.filter((_, i) => i !== index));
  };

  const addCertification = () => {
    onUpdateCertifications([...resume.certifications, { title: '', issuer: '', date: '' }]);
  };

  const updateCertification = (index: number, field: keyof Certification, value: string) => {
    const updated = [...resume.certifications];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateCertifications(updated);
  };

  const removeCertification = (index: number) => {
    onUpdateCertifications(resume.certifications.filter((_, i) => i !== index));
  };

  const addProject = () => {
    onUpdateProjects([...resume.projects, { name: '', description: '', technologies: [] }]);
  };

  const updateProject = (index: number, field: keyof Project, value: any) => {
    const updated = [...resume.projects];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateProjects(updated);
  };

  const removeProject = (index: number) => {
    onUpdateProjects(resume.projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <Accordion type="multiple" defaultValue={['personal', 'summary']} className="w-full">
        <AccordionItem value="personal">
          <AccordionTrigger className="text-lg font-semibold">Personal Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={resume.personalInfo.name}
                  onChange={(e) => onUpdatePersonalInfo({ name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={resume.personalInfo.email}
                    onChange={(e) => onUpdatePersonalInfo({ email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={resume.personalInfo.phone}
                    onChange={(e) => onUpdatePersonalInfo({ phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={resume.personalInfo.address}
                  onChange={(e) => onUpdatePersonalInfo({ address: e.target.value })}
                  placeholder="City, State, Country"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    value={resume.personalInfo.linkedin}
                    onChange={(e) => onUpdatePersonalInfo({ linkedin: e.target.value })}
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={resume.personalInfo.website}
                    onChange={(e) => onUpdatePersonalInfo({ website: e.target.value })}
                    placeholder="johndoe.com"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="summary">
          <AccordionTrigger className="text-lg font-semibold">Professional Summary</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-4">
              <Label htmlFor="summary">Summary</Label>
              <Textarea
                id="summary"
                value={resume.summary}
                onChange={(e) => onUpdateSummary(e.target.value)}
                placeholder="Write a brief professional summary..."
                rows={5}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger className="text-lg font-semibold">Work Experience</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {resume.workExperience.map((exp, index) => (
                <Card key={index}>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold">Experience {index + 1}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeWorkExperience(index)}
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Company</Label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateWorkExperience(index, 'company', e.target.value)}
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => updateWorkExperience(index, 'position', e.target.value)}
                          placeholder="Job Title"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input
                          value={exp.startDate}
                          onChange={(e) => updateWorkExperience(index, 'startDate', e.target.value)}
                          placeholder="Jan 2020"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input
                          value={exp.endDate}
                          onChange={(e) => updateWorkExperience(index, 'endDate', e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description (one per line)</Label>
                      <Textarea
                        value={exp.description.join('\n')}
                        onChange={(e) =>
                          updateWorkExperience(index, 'description', e.target.value.split('\n'))
                        }
                        placeholder="• Achieved X by doing Y&#10;• Led team of Z people"
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addWorkExperience} variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Work Experience
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education">
          <AccordionTrigger className="text-lg font-semibold">Education</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {resume.education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold">Education {index + 1}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeEducation(index)}
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Institution</Label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                        placeholder="University Name"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Degree</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Field of Study</Label>
                        <Input
                          value={edu.fieldOfStudy}
                          onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
                          placeholder="Computer Science"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input
                          value={edu.startDate}
                          onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                          placeholder="2016"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input
                          value={edu.endDate}
                          onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                          placeholder="2020"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Honors</Label>
                      <Input
                        value={edu.honors}
                        onChange={(e) => updateEducation(index, 'honors', e.target.value)}
                        placeholder="Summa Cum Laude"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addEducation} variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger className="text-lg font-semibold">Skills</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {resume.skills.map((skill, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    placeholder="e.g., JavaScript, Project Management"
                    className="flex-1"
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeSkill(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addSkill} variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Skill
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="certifications">
          <AccordionTrigger className="text-lg font-semibold">Certifications</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {resume.certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold">Certification {index + 1}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCertification(index)}
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={cert.title}
                        onChange={(e) => updateCertification(index, 'title', e.target.value)}
                        placeholder="Certification Name"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Issuer</Label>
                        <Input
                          value={cert.issuer}
                          onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                          placeholder="Issuing Organization"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Date</Label>
                        <Input
                          value={cert.date}
                          onChange={(e) => updateCertification(index, 'date', e.target.value)}
                          placeholder="Jan 2023"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addCertification} variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Certification
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="projects">
          <AccordionTrigger className="text-lg font-semibold">Projects</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {resume.projects.map((project, index) => (
                <Card key={index}>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold">Project {index + 1}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeProject(index)}
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Project Name</Label>
                      <Input
                        value={project.name}
                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                        placeholder="Project Title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                        placeholder="Brief description of the project"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Technologies (comma-separated)</Label>
                      <Input
                        value={project.technologies.join(', ')}
                        onChange={(e) =>
                          updateProject(
                            index,
                            'technologies',
                            e.target.value.split(',').map((t) => t.trim())
                          )
                        }
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addProject} variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
