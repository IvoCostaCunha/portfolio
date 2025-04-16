# Documentation of Portfolio

## Table of contents
1.  [Introduction](#introduction)
2.  [General architecture](#general-architecture)
3.  [Docker](#docker)
4.  [SSL](#ssl)
5.  [Tests](#tests)
6.  [Angular App](#angular-app)
    1.  [Components](#components)
    2.  [Interfaces](#interfaces)
    3.  [Utils](#utils)

## Introduction
Portfolio is the general name of the project which objective is to build a website containing my portfolio in a webpage format.

This project consists of 2 distinctive parts, the Angular frontend whose source code is contained in this repository named Portfolio and an [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) named Portfolio-API.

The final objective is to have the data in the frontend fetched via [GET requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) from Portfolio-API, and also be able to edit this data via [POST requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) at the same API. These two objectives should result in a website which contents can be edited without the need of a redeployment expect on updates, a kind of light in features but also in loading times [CMS](https://developer.mozilla.org/en-US/docs/Glossary/CMS) (Content Management System).

This documentation covers the dev branch and so the main branch may be missing features present in this documentation.

## General architecture
... Concerns frontend <-> backend interactions. To be written later ...

## Docker
This app uses [Docker](https://www.docker.com). Docker allows easy crossplatform development and deployment.

2 different Dockerfiles exist, one for a SSL version of the frontend and another for a non SSL version.
Nether the less both can be build with docker [compose](https://docs.docker.com/compose) with ```docker compose up```.
- ```docker compose up ssl``` builds and start the container for the SSL version at port 443. Also see the [SSL](#ssl) section.
- ```docker compose up no-ssl ``` builds and start the container for the no-SSL version at port 80.

The application can always be lauched with node. In any way check the README.md for build and lauch instructions.

## SSL
To use [HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS) a private, public and domain certificate are necessary. These must be set up correctly with a [Certificate Authority](https://developer.mozilla.org/en-US/docs/Glossary/Certificate_authority) like [Let's encrypt](https://letsencrypt.org/) if they are to be used on internet or [self-signed](https://en.wikipedia.org/wiki/Self-signed_certificate) for a local test.  The certificates that I use wont be present in this repository, so you will need your own.

## Tests
Unit testing is done using [Jasmine](https://jasmine.github.io/index.html).

## Angular App
The frontend follows a normal Angular structure.
For now it's quite simple.

### Components
The component follow this structure :
```txt
src/app/components/
├── admin
│   ├── data-modification
│   └── login
├── contact
├── environment
├── footer
├── menu
├── portfolio
│   ├── about-me
│   ├── education
│   ├── skill-container
│   └── language-container
├── project
├── projects-list
└── tag-container
```

The top level components are to be reused like menu, footer or project.
The second level components are specific to their top level component.

### Interfaces
Interfaces act like custom global types in this project.
```txt
src/app/interfaces/
├── Certification.ts
├── Contact.ts
├── Language.ts
├── Project.ts
├── Skill.ts
└── WebsiteData.ts
```

These interfaces represent objects that are used later in components.

### Utils
Utils are global functions that are meant to be used regularly in components.
```txt
src/app/utils/
├── Files.ts
├── Mail.ts
├── Redirections.ts
└── Sort.ts
```

