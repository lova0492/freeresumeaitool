import type { Resume } from '../../backend';
import { getColorScheme } from '../../lib/colorSchemes';

interface Template1Props {
  resume: Resume;
}

export default function Template1({ resume }: Template1Props) {
  const colors = getColorScheme(resume.colorScheme);

  return (
    <div className="bg-white p-12 text-gray-900" style={{ minHeight: '297mm' }}>
      {/* Header */}
      <div className="mb-6 border-b-2 pb-4" style={{ borderColor: colors.primary }}>
        <h1 className="mb-2 text-4xl font-bold" style={{ color: colors.primary }}>
          {resume.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.address && <span>{resume.personalInfo.address}</span>}
          {resume.personalInfo.linkedin && <span>{resume.personalInfo.linkedin}</span>}
          {resume.personalInfo.website && <span>{resume.personalInfo.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {resume.summary && (
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-bold" style={{ color: colors.primary }}>
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">{resume.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {resume.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold" style={{ color: colors.primary }}>
            Work Experience
          </h2>
          <div className="space-y-4">
            {resume.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="mb-1 flex items-baseline justify-between">
                  <h3 className="font-semibold" style={{ color: colors.secondary }}>
                    {exp.position}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="mb-2 text-sm font-medium text-gray-700">{exp.company}</div>
                {exp.description.length > 0 && (
                  <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
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

      {/* Education */}
      {resume.education.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold" style={{ color: colors.primary }}>
            Education
          </h2>
          <div className="space-y-3">
            {resume.education.map((edu, index) => (
              <div key={index}>
                <div className="mb-1 flex items-baseline justify-between">
                  <h3 className="font-semibold" style={{ color: colors.secondary }}>
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="text-sm text-gray-700">
                  {edu.institution}
                  {edu.fieldOfStudy && ` - ${edu.fieldOfStudy}`}
                </div>
                {edu.honors && <div className="text-sm italic text-gray-600">{edu.honors}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-bold" style={{ color: colors.primary }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="rounded px-3 py-1 text-sm font-medium"
                style={{ backgroundColor: colors.light, color: colors.primary }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {resume.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold" style={{ color: colors.primary }}>
            Certifications
          </h2>
          <div className="space-y-2">
            {resume.certifications.map((cert, index) => (
              <div key={index} className="flex items-baseline justify-between">
                <div>
                  <span className="font-semibold" style={{ color: colors.secondary }}>
                    {cert.title}
                  </span>
                  {cert.issuer && <span className="text-sm text-gray-700"> - {cert.issuer}</span>}
                </div>
                {cert.date && <span className="text-sm text-gray-600">{cert.date}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold" style={{ color: colors.primary }}>
            Projects
          </h2>
          <div className="space-y-3">
            {resume.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-semibold" style={{ color: colors.secondary }}>
                  {project.name}
                </h3>
                {project.description && <p className="text-sm text-gray-700">{project.description}</p>}
                {project.technologies.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs text-gray-600">
                        {tech}
                        {i < project.technologies.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
