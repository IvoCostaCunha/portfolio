import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { WebsiteData } from '../../interfaces/WebsiteData';
import { env } from '../environment/env';

import Redirections from '../../utils/Redirections';
import Files from '../../utils/Files';
import Mail from '../../utils/Mail';

import { TagContainerComponent } from '../tag-container/tag-container.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';

import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

import { CertificationsComponent } from './certifications/certifications.component';
import { SkillContainerComponent } from './skill-container/skill-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
    CommonModule,

    TagContainerComponent, SkillContainerComponent, ProjectComponent, CertificationsComponent,
    ContactComponent, MenuComponent, FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  onClickDownload = (f: any) => {Files.onClickDownload(f)}
  onClickRedirect = (l: any) => {Redirections.onClickRedirect(l)}

  websiteData: WebsiteData = {
    siteIntro:  `Hello, my name is <b>Ivo Costa Cunha</b>.<br>
    
    I'm a developper by trade, currenly looking for opportunities, in a company or as a freelance.<br> 
    This website objective is to present myself and my projects.<br>
    But it may contain now or in the future parts that aren't about selling myself or my projects. I'm trying to build a long lasting website that will contain both my projects, views, and maybe articles, who knows ?`,
    aboutMe: `So, about myself,<br>
    When alone or with a team that allows it, I can be quite chaotic, it allows me to explore differents ways of doing things even if it isn't always worth it. By doing I can learn new things, and I think it makes projects more interresting, in opposition to a professional environment where tasks are already planned.<br>
    Evidently as a freelance, if I get the chance to have some clients, I will always put on the table tested solutions, that could have been tested because I explored these in my chaotic projects. In the end the two approaches compliment each other.<br
    As you can deduce from what I previously said I don't do Wordpress or equivalent. All my projects are tailor-made to my specific, or your specific needs, or desires.<br>
    I tend to prefer basic, functionnal UIs that are easy to use and provide functionality above over stylised UIs. Now that doesn't mean I don't like color, or animations but you will probably never see an ultra flashy 3d web site from me except maybe as an experiment that isn't supposed to be very functionnal.<br><br>
    Also, as I said, I'm curretly looking for opportunities, I am proposing showcase websites, <i>Sites vitrines</i> in french, without backend. But with more branding than this one.<br> 
    I <i>can</i> do backend but with backend I will take longer and so if I'm to work on a time frame I would prefer simpler websites, at least for now until I can accurately predict time estimations for tasks.<br>
    So if you think I could do some work for you do not hesitate to contact me ! See more details in the freelance section further down.
    `,
    beliefs: `I support open source, I think it improves both the experience of the code owner and others. The owner gets to be exposed to differents percepectives and the others get to learn on how to do x or y. In the end everyone improves.<br>
    Security wise, security through obscurity is opposed to Kerckhoffs' principle which just assumes that <i> "the enemy knows the system" </i> - Claude Shannon. If cryptographers believe in a white-box approach so should I.<br>
    I will try to always publish my code as opensource, through a MIT, or GPL licence to allow others to consult it, and maybe give me some feedback or suggestions.<br>
    I also support a free web, free of surveillance, because most the time the only harmed persons are those who are innocent.`,
    freelance:  `As a freelance I would prefer to work with clarity in mind.<br>
    To do so I would like to have clear projects goals from the begin, and client feedback from time to time.<br>
    During a project I will send a report every week containing what I did and what I will do next week with a deliverable if possible. Doing so the client can test the deliverable and send feedback if they think I'm going in a wrong direction.<br>
    Once all functionalities are in I can also deploy the website, if negociated before, in a cloud service chosen by the client.
    In any case I will do a live demo to the client before finishing the contract to make sure all functionalities are in.<br>
    If some anomaly shows up later I will also fix it if it's in the functionalities decided at the begining of the project.<br>
    I hope my methods are in accord with you, but they can be arranged depending on the client, sometimes people just want to see the final product, I can in this case not contact the person unless it's really important. I'm open to differents ways of managing the project on my end.<br>

    You can check my projects below to see if you like my work.`,
    skills: [
      {name: "html", rating: 80},
      {name: "css", rating: 50},
      {name: "javascript", rating: 70},
      {name: "typescript", rating: 70},
      {name: "Angular", rating: 70},
      {name: "React", rating: 65},
      {name: "Java", rating:50},
      {name: "C++", rating: 50},
      {name: "C", rating: 50},
      {name: "Bash", rating: 40},
    ],
    photoPath: "assets/imgs/site/me.jpeg",
    educationIntro: `I did all my education in Nice, a city in the south of France, uninhabitable during summer.<br>
    After my scientific <i>Baccalauréat</i> I did a professional diploma, a <i>BTS</i> in France, that allowed me to learn about OOP (Object Oriented Paradigm) with C# at the time.<br>
    I absolutely loved the freedom a developper had in creation, I understood experience was needed with the different technologies and languages, but I also saw that with some creativity the possibilities were endless.<br>
    So, since I kinda liked it, I followed with a <i>MIAGE Licence</i> that mixed software development with company management, to open myself to more corporate opportunities, and after that I managed to obtain a <i>Master in MIAGE option INTENSE</i>.<br> 
    The master was mostly the continuation of the previous licence but with projects that combined the knowledge I had obtained during the licence and new things.`,
    certifications: [
      {
        title: "BTS SIO",
        year: "2018",
        description: "Professional diploma from the Lycée Estienne d'Orves (Nice, France).",
        filePath: ""
      },
      {
        title: "Licence MIAGE",
        year: "2020",
        description: "Licence MIAGE from the Université Côte d'Azur (Nice, France).",
        filePath: ""
      },
      {
        title: "Master MIAGE",
        year: "2023",
        description: "Master MIAGE option INTENSE from the Université Côte d'Azur (Nice, France).",
        filePath: ""
      }

    ],
    projectsIntro: `These are the projects I'd like to highlight.

    If you want a more exhaustive list you  can check the project list on the top left of this site.`,
    projects: [
      {
        title: "portfolio-angular",
        year: "2023",
        tags: ["Angular", "Typescript", "Express", "Docker", "CSS"],
        link: "https://ivocostacunha-portfolio.com",
        githubLink: "https://github.com/IvoCostaCunha/portfolio-angular.git",
        doc: "",
        imgs: ["assets/imgs/portfolio-app/portfolio-app.png"],
        description: "My personnal portfolio to present myself and my projects. This website in fact. For now just a frontend without any backend but I'm looking for improving it in the future."
      },
      {
        title: "stegano-image",
        year: "2022",
        tags: ["Python", "React", "Flask", "REST API", "Steganography", "Amazon S3", "PostgreSQL"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/stegano-image.git",
        doc: "",
        imgs: ["assets/imgs/stegano-image/stegano-image.png"],
        description: "Website React frontend et Python Flask API backend that toghever constitute an app that allow registered users to sign images in a png format using steganographic methods. Right now the site is not deployed due to the cost since it uses multiple non free services."
      },
      {
        title: "ter-wasabi",
        year: "2021",
        tags: ["Javascript", "Stencil", "Wasabi"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/ter-grp12-2022.git",
        doc: "assets/files/ter-wasabi.pdf",
        imgs: ["assets/imgs/ter-wasabi/ter-wasabi.png"],
        description: "A research project within the laboratory I3S in Sophia-Antipolis whose objective was to catalog music data from a wasabi database using Stencil, a graph utility for Javascript."
      },
      {
        title: "audio-player",
        year: "2022",
        tags: ["Pure Web Component", "Javascript", "WebAudio", "CSS"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/audio-player.git",
        doc: "",
        imgs: ["assets/imgs/audio-player/audio-player.png"],
        description: "Audio-player project that allows to play music in the web with webaudio, and modify using different parameters."
      },
      // {
      //   title: "sdl2-game",
      //   year: "2022",
      //   tags: ["C++", "SDL2", "2D", "Rendering"],
      //   link: "",
      //   githubLink: "https://github.com/IvoCostaCunha/sdl2-game.git",
      //   doc: "",
      //   imgs: ["assets/imgs/sdl2-game/sdl2-game.jpg"],
      //   description: "Experimentation about rendering things with sdl2."
      // },
      // {
      //   title: "raylib-game",
      //   year: "2022",
      //   tags: ["C", "raylib", "2D", "Rendering"],
      //   link: "",
      //   githubLink: "https://github.com/IvoCostaCunha/raylib-game.git",
      //   doc: "",
      //   imgs: ["assets/imgs/raylib-game/raylib-game.png"],
      //   description: "Experimentation about rendering things with raylib."
      // }
    ], 
    contact: {
      tel: "+351 962 998 386",
      mail: "ivo.costacunha@icloud.com",
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

  sendMail = (mail: string) => { Mail.sendMail(mail)}

}
