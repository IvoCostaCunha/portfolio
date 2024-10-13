import { Diploma } from "./Diploma"
import { Project } from "./Project"

export interface WebsiteData {
  aboutMe: String
  photoPath: String
  educationResume: String
  diplomas: Diploma[]
  projectsResume: string
  projects: Project[]
  contact: {
    tel: string
    email: string
    github: string
    linkedIn: string
  }
}