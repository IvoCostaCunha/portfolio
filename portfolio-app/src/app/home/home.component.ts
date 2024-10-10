import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { WebsiteData } from '../interfaces/WebsiteData';
import { env } from '../environment/env';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  websiteData: WebsiteData = {
    aboutMe:  `Hello, my name is Ivo Costa Cunha and I'm a developper mostly in web apps, but I sometimes prefer backend stuff.`, 
    educationResume: `I did all may studies in Nice, a city in the south of France.

    After my scientific "Baccalauréat" I did a professional diploma, a "BTS" in France, that allowed me to learn about OOP (Object Oriented Paradigm) with C# at the time.

    Since I liked it I followed with a MIAGE Licence that mixed software development with company management, and after that I got a Master in MIAGE option INTENSE. It's mostly the continuation of the previous licence.`,
    diplomas: [
      {
        title: "BTS SIO",
        year: "2018",
        description: "Professional diploma from the Lycée Estienne d'Orves (Nice, France).",
        filePath: "../assets/files/bts-sio.pdf"

      },
      {
        title: "Licence MIAGE",
        year: "2020",
        description: "Licence MIAGE from the Université Côte d'Azur (Nice, France).",
        filePath: "../assets/files/master-miage.pdf"

      },
      {
        title: "Master MIAGE",
        year: "2023",
        description: "Master MIAGE option INTENSE from the Université Côte d'Azur (Nice, France).",
        filePath: "../assets/files/master-miage.pdf"

      }

    ],
    projectsResume: `These are the projects I'd like to highlight.

    If you want a more exhaustive list you  can check the project list on the top left of this site.`,
    projects: [
      {
        title: "portfolio-angular",
        year: "2023",
        tags: ["angular", "css", "nodejs", "frontend", "backend", "web", "typescript"],
        link: "https://ivocostacunha-portfolio.com",
        githubLink: "https://github.com/IvoCostaCunha/portfolio-angular",
        description: "My personnal portfolio to present myself and list my projects. This website in fact."
      },
      {
        title: "audio-player",
        year: "2022",
        tags: ["web component", "web","javascript", "webaudio"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/audio-player",
        description: "Audio-player project that allows to play music in the web with webaudio, and modify the music signal live."
      }
    ], 
    contact: {
      tel: "+351 962 998 386",
      email: "ivo.costacunha@icloud.com",
      github: "https://github.com/IvoCostaCunha",
      linkedIn: "https://www.linkedin.com/in/ivo-costa-cunha/"
    }
  }

  async ngOnInit() {
    console.log("onInit")
    // try {
    //   let data = (await this.getData())
    //   console.log(data)
    //   this.websiteData = data 
    // } catch(error) {
    //   console.error(error)
    // }
  }

  afterRender() {
    console.log("afterRender")
  }

  async getData(): Promise<any> {
    let data: any[] = []
    try {
       return await (await fetch(env.apiFullAdress + "/website-data")).json() as WebsiteData
    } catch (e) {
      console.error(e)
    }
  }

  onClickDownload(path: string): void {
    try {
      this.openFile(path)
    } catch(e) {
      console.error(e)
    }
  }

  async openFile(path: string): Promise<any> {
    window.open(path)
  }

  onClickRedirect(url: string): void {
    window.location.href = url
  }

}
