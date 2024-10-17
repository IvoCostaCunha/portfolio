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
    aboutMeA:  `Hello, my name is Ivo Costa Cunha.<br>
    
    I'm a developper by trade, currenly looking for opportunities, in a company or as a freelance.<br> 
    This website objective is to present myself and my projects.<br>
    But it may contain now or in the future parts that aren't about selling myself or my projects. I'm trying to build a long lasting website that will contain both my projects, views, and maybe articles who knows.
    `,
    aboutMeB: `
    So, about myself,<br>
    When alone or with a team that allows it, I can be quite chaotic, it allows me to explore differents ways of doing things even if it isn't always worth it. By doing I can learn new things, and I think it makes projects more interresting, in opposition to a professional environment where tasks are already planned.<br>
    Evidently as a freelance, if I get the chance to have you as client, I will always propose tested solutions, that could have been tested because I explored these in my chaotic projects. In the end the two approaches compliment each other.<br
    As you can deduce from what I previously said I don't do Wordpress or equivalent. All my projects are tailor-made to my specific, or your specific needs, or desires.<br>
    I tend to prefer basic, functionnal UIs that are easy to use and provide functionality above over stylised UIs. Now that doesn't mean I don't like color, or animations but you will probably never see an ultra flashy 3d web site from me except maybe as an experiment that isn't supposed to be very functionnal.<br>
    Also as I said, I'm curretly looking for opportunities, I am proposing showcase websites, <i>Sites vitrines</i> in french, without backend. But with more branding than this one.<br> 
    I <i>can</i> do backend but with backend I will take longer and so if I'm to work on a time frame I would prefer simpler websites, at least for now.<br>

    So if you think I could do some work for you do not hesitate to contact me.
    `,
    beliefs: `I support open source, I think it improves both the experience of the code owner and others. The owner gets to be exposed to differents percepectives and the others get to learn on how to do x or y. In the end everyone improves.<br>
    Security wise, security through obscurity is opposed to Kerckhoffs' principle which just assumes that <i> "the enemy knows the system" </i> - Claude Shannon. If cryptographers believe in a white-box approach so should I.<br>
    I will try to always publish my code as opensource, through a MIT, or GPL licence to allow others to consult it, and maybe give me some feedback or suggestions.<br>
    I also support a free web, free of surveillance, because most the time the only harmed persons are those who are innocent.`,
    photoPath: "../assets/imgs/me.jpeg",
    educationResume: `I did all my education in Nice, a city in the south of France, uninhabitable during summer.<br>
    After my scientific <i>Baccalauréat</i> I did a professional diploma, a <i>BTS</i> in France, that allowed me to learn about OOP (Object Oriented Paradigm) with C# at the time.<br>
    I absolutely loved the freedom a developper had in creation, I understood experience was needed with the different technologies and languages, but I also saw that with some creativity the possibilities were endless.<br>
    So, since I kinda liked it, I followed with a <i>MIAGE Licence</i> that mixed software development with company management, to open myself to more corporate opportunities, and after that I managed to obtain a <i>Master in MIAGE option INTENSE</i>.<br> 
    The master was mostly the continuation of the previous licence but with projects that combined the knowledge I had obtained during the licence and new things.<br><br>
    As a conclusion, during my licence and master, I learned a lot about applicative developpement but also a lot about teamwork, team management, comptability, process modelling and other corporate matters.<br>
    So while MIAGE was about developpement it was also about a lot more.`,
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
        img: "../assets/imgs/portfolio-app.jpg",
        description: "My personnal portfolio to present myself and list my projects. This website in fact."
      },
      {
        title: "audio-player",
        year: "2022",
        tags: ["web component", "web","javascript", "webaudio"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/audio-player",
        img: "../assets/imgs/audio-player.jpg",
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
