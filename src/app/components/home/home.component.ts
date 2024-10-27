import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { WebsiteData } from '../../interfaces/WebsiteData';
import { env } from '../environment/env';

import Sort from '../../utils/Sort';

import { TagContainerComponent } from '../tag-container/tag-container.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

import { SkillContainerComponent } from './skill-container/skill-container.component';
import { LanguageContainerComponent } from './language-container/language-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
    CommonModule,

    TagContainerComponent, SkillContainerComponent, EducationComponent, ProjectComponent, 
    LanguageContainerComponent, MenuComponent, FooterComponent, ContactComponent,
    AboutMeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  websiteData: WebsiteData = {
    contact: {
      tel: "+351 962 998 386",
      mail: "ivo.costacunha@icloud.com",
      github: "https://github.com/IvoCostaCunha",
      linkedIn: "https://www.linkedin.com/in/ivo-costa-cunha/"
    },    
    mePhotoPath: "assets/imgs/site/me/me.jpeg",
    aboutMeHTML: `
    Hello, my name is <b>Ivo Costa Cunha</b>.<br>
    I'm a developper by trade, currently looking for opportunities, in a company or as a freelance.<br>
    I'm curious specially about computer technologies, even more specially if those are in a domain I'm interrested in.<br>
    I like to talk to people about computer technologies that they use daily without knowing, and how these technologies impact them. I think as big as current internet is now more people should know about its inner workings in simple terms.<br>
    I have a tendency to change personal projects focus often as I tend to lose creativity in those if they become too much of a routine.<br>
    However paradoxically I can be sometimes too much into perfection, taking way too much to release something. Sometimes overdesigning implementations way too early when I should be trying to reach simple objectives first.<br>
    Anyway despite these I appreciate when my implementations function as planned and I think it's one of the best things I can feel as a developper.`,
    workMethodsHTML: `
    When alone or with a team that allows it, I can be quite chaotic, it allows me to explore differents ways of doing things even if it isn't always worth it. By doing I can learn new things, and I think it makes projects more interresting, in opposition to a professional environment where tasks are already planned.<br>
    Evidently as a freelance, if I get the chance to have some clients, I would always put on the table tested solutions, that could have been tested because I explored these in my chaotic projects. In the end the two approaches compliment each other.<br
    As you can deduce from what I previously said I don't do Wordpress or equivalent. All my projects are tailor-made to my specific, or your specific needs, or desires.<br>
    I tend to prefer basic, functionnal UIs that are easy to use and provide functionality above over stylised UIs. Now that doesn't mean I don't like color, or animations but you will probably never see an ultra flashy 3d web site from me except maybe as an experiment that isn't supposed to be very functionnal.<br>
    Also, as I said, I'm curretly looking for opportunities, I am proposing showcase websites, "sites vitrines" in french, without backend. But with more branding than this one.<br> 
    I <i>can</i> do backend but with backend I will take longer and so if I'm to work on a time frame I would prefer simpler websites, at least for now until I can accurately predict time estimations for tasks.<br>
    So if you think I could do some work for you do not hesitate to contact me ! See more details in the freelance section further down.`,
    beliefsHTML: `I support <a href='https://opensource.org/'>opensource software</a> since I think it improves both the experience of the code owner and others. The owner gets to be exposed to different percepectives and the others get to learn on how to do x or y. In the end everyone wins and improves.<br>
    Security wise, security through obscurity is opposed to Kerckhoffs' principle which just assumes that <i> "the enemy knows the system" </i> - Claude Shannon. If cryptographers believe in a white-box approach so should I.<br>
    I try to publish my code as opensource, through a <a href='https://opensource.org/license/MIT'>MIT</a>, or <a href='https://www.gnu.org/licenses/gpl-3.0.en.html'>GPL</a> licence to allow others to consult it, and maybe give me some feedback or suggestions.<br>
    I also support a web free of systematic surveillance, because the end doesn't justify the means. Even privacy invasion swept aside, if to catch one the lives of a hundred thousands must exposed to random people at a random agency then it isn't not worth it.`,
    freelanceHTML:  `As a freelance I would prefer to work with clarity in mind.<br>
    To do so I would like to have clear projects goals from the begin, and client feedback from time to time.<br>
    During a project I would prefer to work in a <a href='https://en.wikipedia.org/wiki/Agile_software_development'>Agile</a> mindset. I would send a report every week containing what I did and what I will do next week with a deliverable if possible. Doing so the client can test the deliverable and send feedback if they think I'm going in a wrong direction.<br>
    Once all functionalities are in I can also procure the <a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name'>domain</a> and <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website'>deploy the website</a>, if negociated before, in a <a href='https://en.wikipedia.org/wiki/Virtual_private_server'>VPS</a> chosen by the client.
    In any case I will do a live demo to the client before finishing the contract to make sure all functionalities are in.<br>
    If some anomaly shows up later I will also fix it if it's in the functionalities decided at the begining of the project.<br>
    I hope my methods are in accord with you, but they can be arranged depending on the client, sometimes people just want to see the final product, I can in this case not contact the person unless it's really important. I'm open to differents ways of managing the project on my end.<br>
    You can check my projects below to see if you like my work. For now not much websites I admit, but I'm working on it.`,
    languages: [
      {name: "Portuguese", level: "Native (C2)"},
      {name: "French", level: "Native (C2)"},
      {name: "English", level: "Professional (B2)"}
    ],
    skills: [
      {name: "HTML", rating: 90},
      {name: "CSS", rating: 60},
      {name: "Javascript", rating: 70},
      {name: "Typescript", rating: 65},
      {name: "Angular", rating: 80},
      {name: "React", rating: 70},
      {name: "Java", rating: 50},
      {name: "C++", rating: 50},
      {name: "C", rating: 50},
      {name: "Bash", rating: 20},
    ],
    projectsIntroHTML: `These are the projects I'd like to highlight.`,
    projects: [
      {
        title: "portfolio-angular",
        year: "2023",
        tags: ["Angular", "Typescript", "Express", "Docker", "CSS"],
        link: "http://portfolio.ivocostacunha.com",
        githubLink: "https://github.com/IvoCostaCunha/portfolio.git",
        doc: "",
        imgs: ["assets/imgs/portfolio-app/portfolio-app.png"],
        description: "My personal portfolio to present myself and my projects. This website in fact. For now just a static website without any API or backend but I'm looking for improving it in a close future. It uses the <a href='https://angular.dev/'>Angular</a> framework, and a bunch of <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>CSS</a>, since at the start I had bigger ambitions for it. I'm planning to in the future build an <a href='https://github.com/IvoCostaCunha/portfolio-api.git'>API</a> that would allow me to edit content without the need to redeploy the entire website."
      },
      {
        title: "stegano-image",
        year: "2022",
        tags: ["Python", "React", "Flask", "REST API", "Steganography", "Amazon S3", "PostgreSQL"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/stegano-image.git",
        doc: "",
        imgs: ["assets/imgs/stegano-image/stegano-image.png"],
        description: "Website done with <a href='https://react.dev/'>React</a> and a <a href='https://www.python.org/'>Python</a> <a href='https://github.com/pallets/flask/'>Flask</a> API that together constitute an app that allow registered users to sign images in a png format using an implementation of the <a href='https://ieeexplore.ieee.org/document/9711628'>LSB steganographic method</a>. Right now the site is not deployed due to the cost since it uses multiple non free services. Started as a student projet but now I'm looking to improve it significantely since I didn't had time implement all I would have liked. This project at the time even incomplete allowed me learn about cryptographic techniques, authentification and security in general."
      },
      {
        title: "ter-wasabi",
        year: "2021",
        tags: ["Typescript", "Javascript", "D3.js", "Stencil", "Wasabi Song Corpus"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/ter-grp12-2022.git",
        doc: "assets/files/ter-wasabi/ter-wasabi.pdf",
        imgs: ["assets/imgs/ter-wasabi/ter-wasabi.png"],
        description: "A research project within the laboratory <a href='https://www.i3s.unice.fr/en/'>I3S</a> in Sophia-Antipolis whose objective was to graphically display the characteristics of data from the <a href='https://github.com/micbuffa/WasabiDataset'>Wasabi Song Corpus</a> using the <a href='https://getstencil.com/'>Stencil framework</a>, and <a href='https://d3js.org/'>D3.js</a> a graphical Javascript library. I worked mostly on data retrieval and parsing. The final objective was to the graph to be able to receive any data from the <a href='https://github.com/micbuffa/WasabiDataset'>Wasabi Song Corpus</a>."
      },
      {
        title: "audio-player",
        year: "2022",
        tags: ["Pure Web Component", "Javascript", "WebAudio", "CSS"],
        link: "",
        githubLink: "https://github.com/IvoCostaCunha/audio-player.git",
        doc: "",
        imgs: ["assets/imgs/audio-player/audio-player.png"],
        description: "Audio-player project that allows to play music in the web with <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'>Web Audio API</a>, and modify the stream of music using different parameters. A simple project but coded in pure Javascript and with it I could learn about <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_components'>Web Components</a> and the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM'>shadow DOM</a> which leads to <a href='https://angular.dev/'>Angular</a> and <a href='https://react.dev/' >React</a>."
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
    eduIntroHTML: `I did all my education in Nice, a city in the south of France, uninhabitable during summer.<br>
    After my scientific "Baccalauréat" I did a professional diploma, a BTS in France, that allowed me to learn about <a href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming'>OOP</a> (Object Oriented Paradigm) with <a href='https://dotnet.microsoft.com/en-us/'>C#</a> at the time.<br>
    I absolutely loved the freedom a developper had in creation, I understood experience was needed with the different technologies and languages, but I also saw that with some creativity the possibilities were endless.<br>
    So, I followed with a <a href='https://univ-cotedazur.fr/miage'>MIAGE Licence</a> that mixed software development with company management, to open myself to more corporate opportunities, and after that I managed to obtain a <a href='https://univ-cotedazur.fr/formation/offre-de-formation/master-methodes-informatiques-appliquees-a-la-gestion-des-entreprises'>Master MIAGE</a> option INTENSE.<br> 
    The master was mostly the continuation of the previous licence but with projects that combined the knowledge I had obtained previously and new notions.`,
    eduPhotoPath: "assets/imgs/site/nice/nice.jpg",
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
      },
      {
        title: "TOEIC (Written) (Score 920)",
        year: "2023",
        description: "English test certifiying my ability to understand and write English",
        filePath: "assets/imgs/toeic/toeic.pdf"
      }

    ]
  }

  ngOnInit() {
    this.websiteData.projects.sort((a: any, b: any) => { return Sort.sortByNumberDescending(a.year, b.year) })
    this.websiteData.certifications.sort((a: any, b: any) => {return Sort.sortByStringDescending(a.year, b.year) })
    // try {
    //   let data = (await this.getData())
    //   console.log(data)
    //   this.websiteData = data 
    // } catch(error) {
    //   console.error(error)
    // }
  }

  async getData(): Promise<any> {
    let data: any[] = []
    try {
       return await (await fetch(env.apiFullAdress + "/website-data")).json() as WebsiteData
    } catch (e) {
      console.error(e)
    }
  }

}
