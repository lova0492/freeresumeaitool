import type { Resume } from '../../backend';
import { getColorScheme } from '../../lib/colorSchemes';

interface Template3Props {
  resume: Resume;
}

export default function Template3({ resume }: Template3Props) {
  const colors = getColorScheme(resume.colorScheme);

  return (
    <div className="bg-white text-gray-900" style={{ minHeight: '297mm' }}>
      {/* Header */}
      <div className="p-8 text-center text-white" style={{ backgroundColor: colors.primary }}>
        <h1 className="mb-3 text-4xl font-bold">{resume.personalInfo.name || 'Your Name'}</h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm opacity-90">
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.address && <span>{resume.personalInfo.address}</span>}
        </div>
        {(resume.personalInfo.linkedin || resume.personalInfo.website) && (
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 text-sm opacity-90">
            {resume.personalInfo.linkedin && <span>{resume.personalInfo.linkedin}</span>}
            {resume.personalInfo.website && <span>{resume.personalInfo.website}</span>}
          </div>
        )}
      </div>

      <div className="p-8">
        {/* Summary */}
        {resume.summary && (
          <div className="mb-6">
            <h2 className="mb-3 border-b-2 pb-1 text-xl font-bold" style={{ borderColor: colors.primary, color: colors.primary }}>
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">{resume.summary}</p>
          </div>
        )}

        {/* Work Experience */}
        {resume.workExperience.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 border-b-2 pb-1 text-xl font-bold" style={{ borderColor: colors.primary, color: colors.primary }}>
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {resume.workExperience.map((exp, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <h3 className="text-lg font-bold" style={{ color: colors.secondary }}>
                      {exp.position}
                    </h3>
                    <span className="text-sm font-medium text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="mb-2 text-sm font-semibold text-gray-700">{exp.company}</div>
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
            <h2 className="mb-3 border-b-2 pb-1 text-xl font-bold" style={{ borderColor: colors.primary, color: colors.primary }}>
              EDUCATION
            </h2>
            <div className="space-y-3">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <h3 className="font-bold" style={{ color: colors.secondary }}>
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-medium text-gray-600">
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

        <div className="grid gap-6 md:grid-cols-2">
          {/* Skills */}
          {resume.skills.length > 0 && (
            <div>
              <h2 className="mb-3 border-b-2 pb-1 text-xl font-bold" style={{ borderColor: colors.primary, color: colors.primary }}>
                SKILLS
              </h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full px-3 py-1 text-sm font-medium"
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
            <div>
              <h2 className="mb-3 border-b-2 pb-1 text-xl font-bold" style={{ borderColor: colors.primary, color: colors.primary }}>
                CERTIFICATIONS
              </h2>
              <div className="space-y-2">
                {resume.certifications.map((cert, index) => (
                  <div key={index}>
                    <div className="font-semibold" style={{ color: colors.secondary }}>
                      {cert.title}
                    </div>
                    <div className="text-sm text-gray-700">
                      {cert.issuer}
                      {cert.date && ` - ${cert.date}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Projects */}
        {resume.projects.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-3 border-b-2 pb-1 text-xl font-bold" style={{ borderColor: colors.primary, color: colors.primary }}>
              PROJECTS
            </h2>
            <div className="space-y-3">
              {resume.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="font-bold" style={{ color: colors.secondary }}>
                    {project.name}
                  </h3>
                  {project.description && <p className="text-sm text-gray-700">{project.description}</p>}
                  {project.technologies.length > 0 && (
                    <div className="mt-1 text-xs text-gray-600">
                      <span className="font-medium">Tech Stack:</span> {project.technologies.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
