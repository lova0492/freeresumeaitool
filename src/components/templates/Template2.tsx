import type { Resume } from '../../backend';
import { getColorScheme } from '../../lib/colorSchemes';

interface Template2Props {
  resume: Resume;
}

export default function Template2({ resume }: Template2Props) {
  const colors = getColorScheme(resume.colorScheme);

  return (
    <div className="flex bg-white text-gray-900" style={{ minHeight: '297mm' }}>
      {/* Sidebar */}
      <div className="w-1/3 p-8" style={{ backgroundColor: colors.light }}>
        <div className="mb-6">
          <h1 className="mb-1 text-3xl font-bold" style={{ color: colors.primary }}>
            {resume.personalInfo.name || 'Your Name'}
          </h1>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
            Contact
          </h2>
          <div className="space-y-2 text-sm">
            {resume.personalInfo.email && <div className="break-words">{resume.personalInfo.email}</div>}
            {resume.personalInfo.phone && <div>{resume.personalInfo.phone}</div>}
            {resume.personalInfo.address && <div>{resume.personalInfo.address}</div>}
            {resume.personalInfo.linkedin && <div className="break-words">{resume.personalInfo.linkedin}</div>}
            {resume.personalInfo.website && <div className="break-words">{resume.personalInfo.website}</div>}
          </div>
        </div>

        {/* Skills */}
        {resume.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Skills
            </h2>
            <div className="space-y-1 text-sm">
              {resume.skills.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {resume.certifications.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Certifications
            </h2>
            <div className="space-y-3 text-sm">
              {resume.certifications.map((cert, index) => (
                <div key={index}>
                  <div className="font-semibold">{cert.title}</div>
                  {cert.issuer && <div className="text-xs text-gray-600">{cert.issuer}</div>}
                  {cert.date && <div className="text-xs text-gray-600">{cert.date}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8">
        {/* Summary */}
        {resume.summary && (
          <div className="mb-6">
            <h2 className="mb-3 text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Profile
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">{resume.summary}</p>
          </div>
        )}

        {/* Work Experience */}
        {resume.workExperience.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Experience
            </h2>
            <div className="space-y-5">
              {resume.workExperience.map((exp, index) => (
                <div key={index}>
                  <h3 className="font-bold" style={{ color: colors.secondary }}>
                    {exp.position}
                  </h3>
                  <div className="mb-2 flex items-baseline justify-between text-sm">
                    <span className="font-medium text-gray-700">{exp.company}</span>
                    <span className="text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
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
            <h2 className="mb-4 text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Education
            </h2>
            <div className="space-y-4">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold" style={{ color: colors.secondary }}>
                    {edu.degree}
                  </h3>
                  <div className="mb-1 flex items-baseline justify-between text-sm">
                    <span className="text-gray-700">
                      {edu.institution}
                      {edu.fieldOfStudy && ` - ${edu.fieldOfStudy}`}
                    </span>
                    <span className="text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  {edu.honors && <div className="text-sm italic text-gray-600">{edu.honors}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {resume.projects.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-bold uppercase tracking-wide" style={{ color: colors.primary }}>
              Projects
            </h2>
            <div className="space-y-4">
              {resume.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="font-bold" style={{ color: colors.secondary }}>
                    {project.name}
                  </h3>
                  {project.description && <p className="text-sm text-gray-700">{project.description}</p>}
                  {project.technologies.length > 0 && (
                    <div className="mt-1 text-xs text-gray-600">
                      <span className="font-medium">Technologies:</span> {project.technologies.join(', ')}
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
