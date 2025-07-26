// import { env } from '../environment/env';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteData } from '../../interfaces/WebsiteData';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { SkillContainerComponent } from './skill-container/skill-container.component';
import { LanguageContainerComponent } from './language-container/language-container.component';
import { Lib } from '../../lib/lib';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [
        // RouterLink, RouterLinkActive,
        CommonModule,

        SkillContainerComponent, EducationComponent, ProjectComponent,
        LanguageContainerComponent, MenuComponent, FooterComponent, ContactComponent,
        AboutMeComponent
    ],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})

export class PortfolioComponent implements OnInit {
    version: string = "1.0.1";

    websiteData: WebsiteData = {
        contact: {
            tel: "+351 962 998 386",
            mail: "dev@ivocostacunha.com",
            proMail: "pro@ivocostacunha.com",
            github: "https://github.com/IvoCostaCunha",
            gitlab: "https://gitlab.com/IvoCostaCunha",
            linkedIn: "https://www.linkedin.com/in/ivo-costa-cunha/"
        },
        mePhotoPath: "imgs/site/me/me.jpg",
        aboutMeHTML: `
        Hello, my name is Ivo Costa Cunha and I work as developer. I am currently looking for opportunities as a freelance or in a company.<br> I am fond of <a href="https://archive.org/details/foundationsofcryptographyaprimerodedgoldreich/page/n1/mode/2up">cryptographic</a> technologies and techniques nowadays since I am trying to improve my abilities in creating <a href="https://developer.mozilla.org/en-US/docs/Web/Security">secure</a> websites. I like to inform people about these same technologies. As internet still grow wider I think that by transferring what I know about the subject I may sensibilise people to it and its implications, security and privacy wise.<br> I appreciate to learn and experience new things so I like to change subjects on my personal projects in way to not work on the same type of project twice in a row. That gives me a way to extend my knowledge and be more polyvalent. I am also an organized person so I like to keep my projects organized and maintanable by various means like an up-to-date documentation, and to keep predictable future releases with a Kanban and milestones.<br> I am also currently learning to play guitar despite the difficulties. I like it since in a way music is just like programming languages, it is a code defining sounds.<br> Overall what I enjoy the most is the feeling of an accomplishment, independent of the domain.`,
        workMethodsHTML: `
        I have two work methodologies, one applies to when I work alone in a personal project, the other when I am a member of a team or as a professional.<br> In a team I focus on communication and reliability. For that if needed I will always propose some basic utilities of project management. In a small team I think a <a href="https://kanbanguides.org/wp-content/uploads/2021/01/Kanban-Guide-2020-12.pdf">Kanban</a> board, a global communication channel and finally a shared <a href="https://git-scm.com/">code repository</a> are a must have.<br> For large teams I have during my Master learned about the Agile Methods like <a href="https://www.scrum.org/resources/scrum-guide">SCRUM</a> or <a href="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf">Spotify</a> but also the non Agile Methods like <a href="https://en.wikipedia.org/wiki/V-model_(software_development)">V</a> and W (double V) cycles.<br> Alone in a personal project I reduce the project management to a minimum, but I still produce documentation even if only for myself. If the project grows with a lot of features I may use a Kanban board for myself to not lose feature focus if needed.<br> I still prefer to keep my personal projects small because it allows me to do multiple different projects instead of a large one.<br> When I work alone but as a professional or freelance I follow the same principles as a small team, but the communication channel will only be between me and the client.<br> I am looking for opportunities as a freelance, so if you think I can code something for you do no hesitate to contact me.<br> You can check my projects in the section <a href="#projects">Projects</a> bellow.`,
        beliefsHTML: `
        I support the Open Source licensing model.
        Code licensed as <a href="https://opensource.org/">Open Source</a> is publicly accessible, modifiable and redistributable depending on the licence conditions. Popular licences are <a href="https://opensource.org/license/MIT">MIT Licence</a>, <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3 Licence</a>, <a href="https://opensource.org/license/BSD-3-clause">BSD Licence</a> and <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache v2 Licence</a>. Those Licences in general allow to consult, modify and redistribute the code but on different conditions, for example GPLv3 Licence forces the code englobing the licensed GPLv3 code to also be licensed with the same Licence. The MIT Licence is less restrictive, since the licensed code can be englobed into a Copyrighted Closed Source code, so each licence has its use case.<br>
        The most important to me is that the source code can be read. I believe that source code should be open to anyone using the product which is the said code compiled. It can then be trusted if the person using the product is able to understand the source code, or has anyone available to verify it for him or her.<br>
        Since the code is publicly accessible I think in cases of smaller projects or projects with good documentation a lot can be learned. <br>
        Since the codebase is also redistributable a competent person can modify the Open Source code to adapt it to her or his needs, a good example being the <a href="https://www.vim.org/">Vim</a> command line text editor and its alternative version in <a href="https://www.lua.org/">Lua</a> <a href="https://neovim.io/">Neovim</a>.<br>
        Finaly that ensure that a program abandoned can always be forked and updated from the main branch or reused.`,
        languages: [
            { name: "Portuguese", level: "Native (C2)" },
            { name: "French", level: "Native (C2)" },
            { name: "English", level: "Professional (B2)" }
        ],
        skills: [
            { name: "HTML", rating: 90 },
            { name: "CSS", rating: 60 },
            { name: "Javascript", rating: 70 },
            { name: "Typescript", rating: 65 },
            { name: "Lua", rating: 70 },
            { name: "Python", rating: 70 },
            { name: "C", rating: 70 },
            { name: "C++", rating: 25 },
            { name: "C#", rating: 50 },
            { name: "Java", rating: 50 },
            { name: "SQL", rating: 50 },
            { name: "Bash", rating: 20 },
            { name: "Angular", rating: 80 },
            { name: "React", rating: 70 },
            { name: "Docker", rating: 30 },
            { name: "PHP", rating: 50 }
        ],
        projects: [
            {
                title: "wasabi-parallel-graph",
                year: "2021",
                tags: ["Typescript", "Javascript", "D3.js", "Stencil", "Wasabi Song Corpus", "Semantic Web", "Web 3.0"],
                link: "",
                githubLink: "https://github.com/IvoCostaCunha/wasabi-parallel-graph.git",
                gitlabLink: "https://gitlab.com/IvoCostaCunha/wasabi-parallel-graph.git",
                doc: "files/ter-wasabi/ter-wasabi.pdf",
                imgs: ["imgs/ter-wasabi/ter-wasabi.png"],
                description: `
                A research project within the laboratory <a href="https://www.i3s.unice.fr/en/">I3S</a> in Sophia-Antipolis whose objective was to graphically display with <a href="https://d3js.org/">D3.js</a>, a Javascript library, the characteristics of data retrieved and parsed from the <a href="https://github.com/micbuffa/WasabiDataset">Wasabi Song Corpus</a> using the <a href="https://getstencil.com/">Stencil</a> framework. I worked mostly on data retrieval and parsing. The final objective was for the graph to be able to receive any data from the <a href="https://github.com/micbuffa/WasabiDataset">Wasabi Song Corpus</a>, put in evidence graphically the relevant characteristics of said data and how these are shared with similar data. This project also uses concepts of <a href="https://en.wikipedia.org/wiki/Semantic_Web">Semantic Web</a> research also called Web 3.0 whose objective is to have the all the Web readable by machines.
        `
            },
            {
                title: "stegano-image",
                year: "2022",
                tags: ["Python", "React", "Flask", "REST API", "Steganography", "Cryptography", "Amazon S3", "PostgreSQL"],
                link: "",
                githubLink: "https://github.com/IvoCostaCunha/stegano-image.git",
                gitlabLink: "https://gitlab.com/IvoCostaCunha/stegano-image.git",
                doc: "files/stegano-image/stegano-image.pdf",
                imgs: ["imgs/stegano-image/stegano-image.png"],
                description: `
                Website done with <a href="https://react.dev/">React</a> and a <a href="https://www.python.org/">Python</a> <a href="https://flask.palletsprojects.com/en/stable/">Flask</a> API that together constitute an app that allow registered users to sign images in a png format using an implementation of the <a href="https://www.researchgate.net/publication/330565811_Hiding_data_in_images_using_DCT_steganography_techniques_with_compression_algorithms">LSB</a> (Least Significant Bit) <a href="https://en.wikipedia.org/wiki/Steganography">steganographic</a> method. Right now the site is not deployed due to the cost since it uses multiple non free services. Started as a student projet but now I'm looking to improve it meaningfully since I didn't had time to implement all I would have liked. This project at the time even incomplete allowed me learn about cryptographic techniques, authentification and security in general.
        `
            },

            {
                title: "audio-player",
                year: "2022",
                tags: ["Pure Web Component", "Javascript", "WebAudio"],
                link: "",
                githubLink: "https://github.com/IvoCostaCunha/audio-player.git",
                gitlabLink: "https://gitlab.com/IvoCostaCunha/audio-player.git",
                doc: "",
                imgs: ["imgs/audio-player/audio-player.png"],
                description: `
                Audio-player project that allows to play music in the web using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a>, and modify the stream of music using frequency, speed and stereo parameters. A simple project but coded in pure Javascript. With it I learned about <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components">Web Components</a> and the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">shadow DOM</a>, techniques which <a href="https://react.dev/">React</a> and <a href="https://angular.dev/">Angular</a> rely upon heavily.
        `
            },
            {
                title: "portfolio",
                year: "2023",
                tags: ["Angular", "Typescript", "Express", "Docker"],
                link: "#about-me",
                githubLink: "https://github.com/IvoCostaCunha/portfolio.git",
                gitlabLink: "https://gitlab.com/IvoCostaCunha/portfolio.git",
                doc: "",
                imgs: ["imgs/portfolio-app/portfolio-app.png"],
                description: `
                My personal portfolio to present myself and my projects. For now just a static website without any API or backend but I'm looking for improving it in a near future. It is build upon the <a href="https://angular.dev/">Angular</a> framework. I'm planning in the future to build an API that would allow me to edit content without the need to redeploy the entire website.
        `
            },
        ],
        eduIntroHTML: `
        I did all my education in Nice, a touristic city in the south of France.<br>
        After obtaining a high school baccalaureate , biology speciality, i followed up with an <a href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers">Advanced Technician Diploma specialised in Software Development</a> in which I learned about <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming">OOP</a> (Object Oriented Paradigm) in <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">C#</a> at the the time.<br>
        I absolutely loved the freedom a developper had in creation, while understanding that experience or at least theoretical knowledge was needed to fully explore that freedom. So I followed up once again with a <a href="https://www.miage.fr/reseau-miage-france/">MIAGE</a> Bachelor Degree (acronym of Computer Methods Applied to Company Management) that fused together software development and company management in order to open myself for eventual business management positions.<br>
        Later on I completed a <a href="https://univ-cotedazur.fr/formation/offre-de-formation/master-methodes-informatiques-appliquees-a-la-gestion-des-entreprises-miage-parcours-numerique-responsable-numres">MIAGE Master speciality INTENSE</a> (acronym of Innovation and Digital Transformation of an Organisation) that is the capstone of my education for now at least.
    `,
        eduPhotoPath: "imgs/site/nice/nice.jpg",
        certifications: [
            {
                title: "BTS SIO",
                year: "2016-2018",
                description: "Advanced Technician Diploma from the Lycée Estienne d'Orves (Nice, France).",
                filePath: "files/bts-sio/bts-sio.pdf",
                link: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
            },
            {
                title: "MIAGE Bachelor Degree",
                year: "2018-2020",
                description: "Bachelor Degree from the Université Côte d'Azur (Nice, France).",
                filePath: "",
                link: "https://www.miage.fr/reseau-miage-france/"
            },
            {
                title: "Master MIAGE",
                year: "2020-2023",
                description: "Master from the Université Côte d'Azur (Nice, France).",
                filePath: "",
                link: "https://univ-cotedazur.fr/formation/offre-de-formation/master-methodes-informatiques-appliquees-a-la-gestion-des-entreprises-miage-parcours-numerique-responsable-numres"
            },
            {
                title: "TOEIC (Written) (Score 920)",
                year: "2023",
                description: `English test certifiying my ability to understand and write English<br>
                Valid until 2025.`,
                filePath: "files/toeic/toeic.pdf",
                link: "https://www.ets.org/toeic.html"
            }

        ]
    };

    ngOnInit() {
        this.websiteData.certifications.sort((a: any, b: any) => {
            return Lib.sortByStringDescending(a.year, b.year);
        });
        // try {
        //   let data = (await this.getData())
        //   console.log(data)
        //   this.websiteData = data
        // } catch(error) {
        //   console.error(error)
        // }
    }

    // async getData(): Promise<any> {
    //   let data: any[] = []
    //   try {
    //      return await (await fetch(env.apiFullAdress + "/website-data")).json() as WebsiteData
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }

}
