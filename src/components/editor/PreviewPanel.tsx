import type { Resume } from '../../backend';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface PreviewPanelProps {
  resume: Resume;
}

export default function PreviewPanel({ resume }: PreviewPanelProps) {
  const templateId = Number(resume.templateId);
  const colorScheme = Number(resume.colorScheme);

  // Color schemes mapping
  const colorSchemes = [
    { primary: 'oklch(0.50 0.20 250)', secondary: 'oklch(0.30 0.15 250)' }, // Blue
    { primary: 'oklch(0.55 0.22 150)', secondary: 'oklch(0.35 0.18 150)' }, // Green
    { primary: 'oklch(0.52 0.24 30)', secondary: 'oklch(0.32 0.20 30)' }, // Orange
    { primary: 'oklch(0.48 0.26 330)', secondary: 'oklch(0.28 0.22 330)' }, // Purple
    { primary: 'oklch(0.50 0.23 0)', secondary: 'oklch(0.30 0.19 0)' }, // Red
    { primary: 'oklch(0.53 0.21 200)', secondary: 'oklch(0.33 0.17 200)' }, // Cyan
    { primary: 'oklch(0.45 0.20 280)', secondary: 'oklch(0.25 0.16 280)' }, // Indigo
    { primary: 'oklch(0.56 0.24 120)', secondary: 'oklch(0.36 0.20 120)' }, // Lime
    { primary: 'oklch(0.51 0.25 350)', secondary: 'oklch(0.31 0.21 350)' }, // Pink
    { primary: 'oklch(0.40 0.15 270)', secondary: 'oklch(0.20 0.12 270)' }, // Dark Blue
  ];

  const colors = colorSchemes[colorScheme - 1] || colorSchemes[0];

  const renderTemplate1 = () => (
    <div className="mx-auto w-full max-w-[210mm] bg-white p-12 text-gray-900 shadow-lg" id="resume-preview">
      <div className="mb-8 border-b-4 pb-6" style={{ borderColor: colors.primary }}>
        <h1 className="mb-2 text-4xl font-bold" style={{ color: colors.primary }}>
          {resume.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {resume.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {resume.personalInfo.email}
            </div>
          )}
          {resume.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              {resume.personalInfo.phone}
            </div>
          )}
          {resume.personalInfo.address && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {resume.personalInfo.address}
            </div>
          )}
          {resume.personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              {resume.personalInfo.linkedin}
            </div>
          )}
          {resume.personalInfo.website && (
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {resume.personalInfo.website}
            </div>
          )}
        </div>
      </div>

      {resume.summary && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.primary }}>
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">{resume.summary}</p>
        </div>
      )}

      {resume.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.primary }}>
            Work Experience
          </h2>
          <div className="space-y-4">
            {resume.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="mb-1 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">{exp.position}</h3>
                    <p className="text-sm font-semibold" style={{ color: colors.secondary }}>
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                {exp.description.length > 0 && (
                  <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resume.education.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.primary }}>
            Education
          </h2>
          <div className="space-y-3">
            {resume.education.map((edu, index) => (
              <div key={index}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-sm font-semibold" style={{ color: colors.secondary }}>
                      {edu.institution}
                    </p>
                    {edu.fieldOfStudy && <p className="text-sm text-gray-600">{edu.fieldOfStudy}</p>}
                    {edu.honors && <p className="text-sm italic text-gray-600">{edu.honors}</p>}
                  </div>
                  <p className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {resume.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.primary }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full px-3 py-1 text-sm font-medium text-white"
                style={{ backgroundColor: colors.primary }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {resume.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.primary }}>
            Certifications
          </h2>
          <div className="space-y-2">
            {resume.certifications.map((cert, index) => (
              <div key={index}>
                <h3 className="font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-600">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {resume.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.primary }}>
            Projects
          </h2>
          <div className="space-y-3">
            {resume.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                {project.technologies.length > 0 && (
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderTemplate2 = () => (
    <div className="mx-auto flex w-full max-w-[210mm] bg-white text-gray-900 shadow-lg" id="resume-preview">
      <div className="w-1/3 p-8" style={{ backgroundColor: colors.primary }}>
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-white">{resume.personalInfo.name || 'Your Name'}</h1>
        </div>

        <div className="mb-8 space-y-3 text-sm text-white/90">
          {resume.personalInfo.email && (
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="break-all">{resume.personalInfo.email}</span>
            </div>
          )}
          {resume.personalInfo.phone && (
            <div className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{resume.personalInfo.phone}</span>
            </div>
          )}
          {resume.personalInfo.address && (
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{resume.personalInfo.address}</span>
            </div>
          )}
          {resume.personalInfo.linkedin && (
            <div className="flex items-start gap-2">
              <Linkedin className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="break-all">{resume.personalInfo.linkedin}</span>
            </div>
          )}
          {resume.personalInfo.website && (
            <div className="flex items-start gap-2">
              <Globe className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="break-all">{resume.personalInfo.website}</span>
            </div>
          )}
        </div>

        {resume.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-3 border-b border-white/30 pb-2 text-lg font-bold uppercase text-white">
              Skills
            </h2>
            <div className="space-y-2">
              {resume.skills.map((skill, index) => (
                <div key={index} className="text-sm text-white/90">
                  • {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.certifications.length > 0 && (
          <div>
            <h2 className="mb-3 border-b border-white/30 pb-2 text-lg font-bold uppercase text-white">
              Certifications
            </h2>
            <div className="space-y-3">
              {resume.certifications.map((cert, index) => (
                <div key={index} className="text-sm text-white/90">
                  <div className="font-semibold">{cert.title}</div>
                  <div className="text-xs">{cert.issuer}</div>
                  <div className="text-xs">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-2/3 p-8">
        {resume.summary && (
          <div className="mb-6">
            <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.secondary }}>
              Profile
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">{resume.summary}</p>
          </div>
        )}

        {resume.workExperience.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.secondary }}>
              Experience
            </h2>
            <div className="space-y-4">
              {resume.workExperience.map((exp, index) => (
                <div key={index}>
                  <div className="mb-1">
                    <h3 className="font-bold">{exp.position}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-gray-700">{exp.company}</span>
                      <span className="text-gray-600">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>
                  {exp.description.length > 0 && (
                    <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.education.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.secondary }}>
              Education
            </h2>
            <div className="space-y-3">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-700">{edu.institution}</span>
                    <span className="text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  {edu.fieldOfStudy && <p className="text-sm text-gray-600">{edu.fieldOfStudy}</p>}
                  {edu.honors && <p className="text-sm italic text-gray-600">{edu.honors}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.projects.length > 0 && (
          <div>
            <h2 className="mb-3 text-xl font-bold uppercase" style={{ color: colors.secondary }}>
              Projects
            </h2>
            <div className="space-y-3">
              {resume.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Tech:</span> {project.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderTemplate3 = () => (
    <div className="mx-auto w-full max-w-[210mm] bg-white p-12 text-gray-900 shadow-lg" id="resume-preview">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-5xl font-bold" style={{ color: colors.primary }}>
          {resume.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>•</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.address && <span>•</span>}
          {resume.personalInfo.address && <span>{resume.personalInfo.address}</span>}
        </div>
        {(resume.personalInfo.linkedin || resume.personalInfo.website) && (
          <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {resume.personalInfo.linkedin && <span>{resume.personalInfo.linkedin}</span>}
            {resume.personalInfo.website && <span>•</span>}
            {resume.personalInfo.website && <span>{resume.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {resume.summary && (
        <div className="mb-6">
          <div className="mb-3 border-b-2 pb-1" style={{ borderColor: colors.primary }}>
            <h2 className="text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Summary
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{resume.summary}</p>
        </div>
      )}

      {resume.workExperience.length > 0 && (
        <div className="mb-6">
          <div className="mb-3 border-b-2 pb-1" style={{ borderColor: colors.primary }}>
            <h2 className="text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Experience
            </h2>
          </div>
          <div className="space-y-4">
            {resume.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="mb-1 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">{exp.position}</h3>
                    <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                {exp.description.length > 0 && (
                  <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {resume.education.length > 0 && (
          <div className="mb-6">
            <div className="mb-3 border-b-2 pb-1" style={{ borderColor: colors.primary }}>
              <h2 className="text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
                Education
              </h2>
            </div>
            <div className="space-y-3">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-gray-700">{edu.institution}</p>
                  <p className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.honors && <p className="text-sm italic text-gray-600">{edu.honors}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.skills.length > 0 && (
          <div className="mb-6">
            <div className="mb-3 border-b-2 pb-1" style={{ borderColor: colors.primary }}>
              <h2 className="text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
                Skills
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, index) => (
                <span key={index} className="text-sm text-gray-700">
                  {skill}
                  {index < resume.skills.length - 1 && ' •'}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {resume.projects.length > 0 && (
        <div className="mb-6">
          <div className="mb-3 border-b-2 pb-1" style={{ borderColor: colors.primary }}>
            <h2 className="text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Projects
            </h2>
          </div>
          <div className="space-y-3">
            {resume.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                {project.technologies.length > 0 && (
                  <p className="text-sm text-gray-600">{project.technologies.join(' • ')}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resume.certifications.length > 0 && (
        <div>
          <div className="mb-3 border-b-2 pb-1" style={{ borderColor: colors.primary }}>
            <h2 className="text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Certifications
            </h2>
          </div>
          <div className="space-y-2">
            {resume.certifications.map((cert, index) => (
              <div key={index}>
                <h3 className="font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-600">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderTemplate4 = () => (
    <div className="mx-auto w-full max-w-[210mm] bg-white text-gray-900 shadow-lg" id="resume-preview">
      <div className="p-8" style={{ backgroundColor: colors.primary }}>
        <h1 className="mb-2 text-4xl font-bold text-white">{resume.personalInfo.name || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-white/90">
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>|</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.address && <span>|</span>}
          {resume.personalInfo.address && <span>{resume.personalInfo.address}</span>}
          {resume.personalInfo.linkedin && <span>|</span>}
          {resume.personalInfo.linkedin && <span>{resume.personalInfo.linkedin}</span>}
          {resume.personalInfo.website && <span>|</span>}
          {resume.personalInfo.website && <span>{resume.personalInfo.website}</span>}
        </div>
      </div>

      <div className="p-8">
        {resume.summary && (
          <div className="mb-6">
            <h2
              className="mb-3 border-l-4 pl-3 text-xl font-bold uppercase"
              style={{ borderColor: colors.primary, color: colors.secondary }}
            >
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">{resume.summary}</p>
          </div>
        )}

        {resume.workExperience.length > 0 && (
          <div className="mb-6">
            <h2
              className="mb-3 border-l-4 pl-3 text-xl font-bold uppercase"
              style={{ borderColor: colors.primary, color: colors.secondary }}
            >
              Work Experience
            </h2>
            <div className="space-y-4">
              {resume.workExperience.map((exp, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{exp.position}</h3>
                      <p className="text-sm font-semibold" style={{ color: colors.secondary }}>
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  {exp.description.length > 0 && (
                    <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.education.length > 0 && (
          <div className="mb-6">
            <h2
              className="mb-3 border-l-4 pl-3 text-xl font-bold uppercase"
              style={{ borderColor: colors.primary, color: colors.secondary }}
            >
              Education
            </h2>
            <div className="space-y-3">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{edu.degree}</h3>
                      <p className="text-sm font-semibold" style={{ color: colors.secondary }}>
                        {edu.institution}
                      </p>
                      {edu.fieldOfStudy && <p className="text-sm text-gray-600">{edu.fieldOfStudy}</p>}
                      {edu.honors && <p className="text-sm italic text-gray-600">{edu.honors}</p>}
                    </div>
                    <p className="text-sm text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.skills.length > 0 && (
          <div className="mb-6">
            <h2
              className="mb-3 border-l-4 pl-3 text-xl font-bold uppercase"
              style={{ borderColor: colors.primary, color: colors.secondary }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded px-3 py-1 text-sm font-medium"
                  style={{ backgroundColor: `${colors.primary}20`, color: colors.secondary }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {resume.certifications.length > 0 && (
          <div className="mb-6">
            <h2
              className="mb-3 border-l-4 pl-3 text-xl font-bold uppercase"
              style={{ borderColor: colors.primary, color: colors.secondary }}
            >
              Certifications
            </h2>
            <div className="space-y-2">
              {resume.certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="text-sm text-gray-600">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.projects.length > 0 && (
          <div>
            <h2
              className="mb-3 border-l-4 pl-3 text-xl font-bold uppercase"
              style={{ borderColor: colors.primary, color: colors.secondary }}
            >
              Projects
            </h2>
            <div className="space-y-3">
              {resume.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const templates = [renderTemplate1, renderTemplate2, renderTemplate3, renderTemplate4];
  const renderTemplate = templates[templateId - 1] || renderTemplate1;

  return <div className="min-h-full">{renderTemplate()}</div>;
}
