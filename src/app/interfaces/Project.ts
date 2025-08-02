import { LINK_TYPE } from "../enums/LINK_TYPE";

export interface ProjectLink {
    name: LINK_TYPE;
    url: string;
}

export interface Project {
    title: string;
    description: string;
    year: string;
    tags: string[];
    imgs: string[];
    links: ProjectLink[];
}
