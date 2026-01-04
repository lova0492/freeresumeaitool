import type { Resume } from '../../backend';
import { getColorScheme } from '../../lib/colorSchemes';

interface Template4Props {
  resume: Resume;
}

export default function Template4({ resume }: Template4Props) {
  const colors = getColorScheme(resume.colorScheme);

  return (
    <div className="bg-white p-10 text-gray-900" style={{ minHeight: '297mm' }}>
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-5xl font-light tracking-wide" style={{ color: colors.primary }}>
          {resume.personalInfo.name || 'Your Name'}
        </h1>
        <div className="mb-3 h-1 w-24 mx-auto" style={{ backgroundColor: colors.primary }}></div>
        <div className="flex flex-wrap justify-center gap-x-3 text-sm text-gray-600">
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>•</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.address && <span>•</span>}
          {resume.personalInfo.address && <span>{resume.personalInfo.address}</span>}
        </div>
        {(resume.personalInfo.linkedin || resume.personalInfo.website) && (
          <div className="mt-1 flex flex-wrap justify-center gap-x-3 text-sm text-gray-600">
            {resume.personalInfo.linkedin && <span>{resume.personalInfo.linkedin}</span>}
            {resume.personalInfo.website && resume.personalInfo.linkedin && <span>•</span>}
            {resume.personalInfo.website && <span>{resume.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {resume.summary && (
        <div className="mb-6">
          <p className="text-center text-sm italic leading-relaxed text-gray-700">{resume.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {resume.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-4 text-center text-2xl font-light tracking-wider" style={{ color: colors.primary }}>
            Experience
          </h2>
          <div className="space-y-5">
            {resume.workExperience.map((exp, index) => (
              <div key={index} className="border-l-2 pl-4" style={{ borderColor: colors.light }}>
                <div className="mb-1 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold" style={{ color: colors.secondary }}>
                    {exp.position}
                  </h3>
                  <span className="text-sm italic text-gray-600">
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
          <h2 className="mb-4 text-center text-2xl font-light tracking-wider" style={{ color: colors.primary }}>
            Education
          </h2>
          <div className="space-y-4">
            {resume.education.map((edu, index) => (
              <div key={index} className="border-l-2 pl-4" style={{ borderColor: colors.light }}>
                <div className="mb-1 flex items-baseline justify-between">
                  <h3 className="font-semibold" style={{ color: colors.secondary }}>
                    {edu.degree}
                  </h3>
                  <span className="text-sm italic text-gray-600">
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

      {/* Skills & Certifications Grid */}
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        {/* Skills */}
        {resume.skills.length > 0 && (
          <div>
            <h2 className="mb-3 text-center text-2xl font-light tracking-wider" style={{ color: colors.primary }}>
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {resume.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-md border px-3 py-1 text-sm"
                  style={{ borderColor: colors.primary, color: colors.secondary }}
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
            <h2 className="mb-3 text-center text-2xl font-light tracking-wider" style={{ color: colors.primary }}>
              Certifications
            </h2>
            <div className="space-y-2">
              {resume.certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="font-semibold" style={{ color: colors.secondary }}>
                    {cert.title}
                  </div>
                  <div className="text-sm text-gray-700">
                    {cert.issuer}
                    {cert.date && ` • ${cert.date}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      {resume.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-4 text-center text-2xl font-light tracking-wider" style={{ color: colors.primary }}>
            Projects
          </h2>
          <div className="space-y-4">
            {resume.projects.map((project, index) => (
              <div key={index} className="border-l-2 pl-4" style={{ borderColor: colors.light }}>
                <h3 className="font-semibold" style={{ color: colors.secondary }}>
                  {project.name}
                </h3>
                {project.description && <p className="text-sm text-gray-700">{project.description}</p>}
                {project.technologies.length > 0 && (
                  <div className="mt-1 text-xs italic text-gray-600">{project.technologies.join(' • ')}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
