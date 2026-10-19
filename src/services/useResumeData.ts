import resumeDataJson from '../data/resumeData.json'
import type { ResumeData } from '../models/Resume'

const resumeData: ResumeData = resumeDataJson

export function useResumeData(): ResumeData {
  return resumeData
}
