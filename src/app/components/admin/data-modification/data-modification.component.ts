import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { WebsiteData } from '../../../interfaces/WebsiteData';
import { env } from '../../environment/env';

@Component({
  selector: 'app-data-modification',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './data-modification.component.html',
  styleUrl: './data-modification.component.css'
})
export class DataModificationComponent {
  // @Output() isValidated = new EventEmitter<string>()
  // websiteData: WebsiteData = {
  //   skills: [
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //     {name: "HTML", rating: 4},
  //   ],
  //   siteIntro:  "Hello, my name is Ivo Costa Cunha and I'm a developper mostly in web apps, but I sometimes prefer backend stuff.",
  //   photoPath: "",
  //   educationIntro: `I did all may studies in Nice, a city in the south of France.

  //   After my scientific "Baccalauréat" I did a professional diploma, a "BTS" in France, that allowed me to learn about OOP (Object Oriented Paradigm) with C# at the time.

  //   Since I liked it I followed with a MIAGE Licence that mixed software development with company management, and after that I got a Master in MIAGE option INTENSE. It's mostly the continuation of the previous licence.`,
  //   aboutMe: "",
  //   beliefs: "",
  //   freelance: "",
  //   diplomas: [
  //     {
  //       title: "BTS SIO",
  //       year: "2018",
  //       description: "Professional diploma from the Lycée Estienne d'Orves (Nice, France).",
  //       filePath: "assets/imgs/synthia.jpg"

  //     },
  //     {
  //       title: "Licence MIAGE",
  //       year: "2020",
  //       description: "Licence MIAGE from the Université Côte d'Azur (Nice, France).",
  //       filePath: "assets/imgs/synthia.jpg"

  //     },
  //     {
  //       title: "Master MIAGE",
  //       year: "2023",
  //       description: "Master MIAGE option INTENSE from the Université Côte d'Azur (Nice, France).",
  //       filePath: "assets/imgs/synthia.jpg"

  //     }

  //   ],
  //   projectsIntro: `These are the projects I'd like to highlight.

  //   If you wantt a more exhaustive list you  can check the project list on the top left of this site.`,
  //   projects: [
  //     {
  //       title: "portfolio-angular",
  //       year: "2023",
  //       doc: ""
  //       tags: ["angular", "css", "nodejs", "frontend", "backend", "web", "typescript"],
  //       link: "https://ivocostacunha-portfolio.com",
  //       githubLink: "https://github.com/IvoCostaCunha/portfolio-angular",
  //       img: "",
  //       description: "My personnal portfolio to present myself and list my projects."
  //     },
  //     {
  //       title: "audio-player",
  //       year: "2022",
  //       tags: ["web component", "web","javascript", "webaudio"],
  //       link: "",
  //       githubLink: "https://github.com/IvoCostaCunha/audio-player",
  //       img: "",
  //       description: "Audio-player project that allows to play music in the web with webaudio, and modify the music signal live."
  //     }
  //   ], 
  //   contact: {
  //     tel: "+351 962 998 386",
  //     email: "ivo.costacunha@icloud.com",
  //     github: "https://github.com/IvoCostaCunha",
  //     linkedIn: "https://www.linkedin.com/in/ivo-costa-cunha/"
  //   }
  // }

  // async ngOnInit() {
  //   this.websiteData = await this.getWebsiteData()
  //   console.log(this.websiteData)
  // }

  // async getWebsiteData(): Promise<any> {
  //   let data: any[] = []
  //   try {
  //      return await (await fetch(env.apiFullAdress + "/website-data")).json() as WebsiteData
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // async postModifiedWebsiteData(websiteData: WebsiteData): Promise<any> {
  //   try {
  //     let res = await fetch(env.apiFullAdress + "/update-website-data", {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(websiteData)
  //     })

  //     if (res.status == 200) {
  //       this.isValidated.emit("done & done")
  //     }

  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // onValidation(event: Event): void {
  //   this.postModifiedWebsiteData(this.websiteData)
  // }

  // onSignOut(event: Event): void {

  // }
}
