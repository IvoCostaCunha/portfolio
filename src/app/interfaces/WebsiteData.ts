import { Contact } from "./Contact"
import { Certification } from "./Certification"
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
  certifications: Certification[]
  projectsIntro: string
  projects: Project[]
  contact: Contact
}