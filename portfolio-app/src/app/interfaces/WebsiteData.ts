import { Diploma } from "./Diploma"
import { Project } from "./Project"
import { Skill } from "./Skill"

export interface WebsiteData {
  siteIntro: String
  aboutMe: String
  beliefs: String
  freelance: String
  photoPath: String
  skills: Skill[]
  educationIntro: String
  diplomas: Diploma[]
  projectsIntro: string
  projects: Project[]
  contact: {
    tel: string
    email: string
    github: string
    linkedIn: string
  }
}