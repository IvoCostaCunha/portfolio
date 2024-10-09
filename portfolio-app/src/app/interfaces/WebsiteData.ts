import { Diploma } from "./Diploma"
import { Project } from "./Project"

export interface WebsiteData {
  aboutMe: String
  educationResume: String
  diplomas: Diploma[]
  projects: Project[]
  contact: {
    tel: string
    email: string
    github: string
    linkedIn: string
  }
}