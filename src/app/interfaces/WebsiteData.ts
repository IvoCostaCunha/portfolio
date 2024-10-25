import { Contact } from "./Contact"
import { Certification } from "./Certification"
import { Project } from "./Project"
import { Skill } from "./Skill"
import { Language } from "./Language"

export interface WebsiteData {
  contact: Contact
  aboutMeHTML: string
  workMethodsHTML: string
  mePhotoPath: string
  beliefsHTML: string
  freelanceHTML: string
  languages: Language[]
  skills: Skill[]
  projectsIntroHTML: string
  projects: Project[]
  eduIntroHTML: string
  eduPhotoPath: string
  certifications: Certification[]
}