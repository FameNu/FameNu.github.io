export interface ResumeProfile {
  portfolioName: string
  name: string
  nickname: string
  nativeName: string
  title: string
  location: string
  email: string
  intro: string
  summary: string
  about: string[]
  availability?: string
}

export interface ExperienceItem {
  role: string
  organization: string
  type: string
  location?: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  startDate?: string
  endDate: string
  award?: string
  description?: string
}

export interface SkillGroup {
  category: string
  icon: string
  items: string[]
}

export interface ProjectItem {
  name: string
  visualTitle?: string
  description: string
  url?: string
  repository?: string
  technologies: string[]
  highlights: string[]
}

export interface ResumeData {
  profile: ResumeProfile
  experience: ExperienceItem[]
  education: EducationItem[]
  skills: SkillGroup[]
  projects: ProjectItem[]
}
