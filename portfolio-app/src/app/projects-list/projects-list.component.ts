import { Component, Input, OnChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortHeader } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';



@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, CommonModule,
    MatTableModule, MatSortHeader
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})

export class ProjectsListComponent implements OnChanges{

  @Input() search: string = "eeeee";

  ngOnChanges() {
    console.log("changes")
  }

  minYear: number = 2015
  maxYear: number = new Date().getFullYear()
  minYearSearch: number = this.minYear
  maxYearSearch: number = this.maxYear
  displayedColumns: string[] = ["name", "year(D)", "tags", "link", "githubLink"]
  allProjectsData: any[] = []
  displayedProjects: any[] = []
  searchTags: string[] = []

  ngOnInit() {
    this.allProjectsData = this.getProjectsData()
    this.displayedProjects = this.allProjectsData
  }

  getProjectsData(): any[] {
    let projects: any[] = [
      {name: 'Infomatics', year: "2015", tags: ["Angular", "Spring", "C++"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'VortexForge', year: "2016", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'AquaPulse', year: "2017", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'PLuminaSphere', year: "2021", tags: ["Angular", "Spring", "C++", "C"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'EchoShift', year: "2018", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'SolarSpectra', year: "2019", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'NovaQuasar', year: "2020", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'HorizonHive', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'PixelPulse', year: "2023", tags: ["Angular", "Spring", "C++"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'DreamForge', year: "2024", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'ZenithZone', year: "2018", tags: ["Angular", "Spring", "C"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'AlphaWave', year: "2019", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'CrystalCove', year: "2020", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'BlissBlaze', year: "2022", tags: ["Angular", "Spring", "C"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'MysticMingle', year: "2023", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
      {name: 'TitaniumTrek', year: "2024", tags: ["Angular", "Spring", "C"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    ]
    projects.sort(this.sortByYearDescending)
    return projects
  }

  sortByYearAscending(a: any, b: any): number {
    const dateA: Number = a.year
    const dateB: Number = b.year
    return (dateA < dateB) ? -1 : 1 
  }

  sortByYearDescending(a: any, b: any): number {
    const dateA: Number = a.year
    const dateB: Number = b.year
    return (dateA < dateB) ? 1 : -1 
  }

  sortByNameAscending(a: any, b: any): number {
    const nameA: string = a.name
    const nameB: string = b.name
    return (nameA < nameB) ? -1 : 1
  }

  sortByNameDescending(a: any, b: any): number {
    const nameA: string = a.name
    const nameB: string = b.name
    return (nameA < nameB) ? 1 : -1
  }

  showDetails(project: any) {
    alert(project.details) 
  }


  filter(): void {
    let tagFilteredData: any[] = []
    let finalData: any[] = []

    // Filter by name & tags
    if(this.searchTags.length > 0) {
      this.allProjectsData.forEach(element => {
        let searchedTags: string[] = Array.from(element.tags)
        searchedTags.push(element.name)
        this.searchTags.forEach(searchTag => {
          searchedTags.forEach(tag => {
            if(tag.toUpperCase() == searchTag.toUpperCase()) {
              tagFilteredData.push(element)
            }
          });
        });
      });
    }
    else {
      tagFilteredData = this.allProjectsData
    }

    // Filter by dates
    tagFilteredData.forEach(element => {
      if(element.year >= this.minYearSearch)
        if(element.year <= this.maxYearSearch)
          finalData.push(element);
    });

    this.displayedProjects = finalData
  }

  onNameClick(event: any): void {
    this.displayedProjects.sort(this.sortByNameAscending)
  }

  onYearClick(event: any): void {
    this.displayedProjects.sort(this.sortByYearAscending)
  }

  onMinRangeInputChange(event: any): void {
    if(event.target.value > this.maxYearSearch) {
      event.target.value = this.maxYearSearch
    }
    this.minYearSearch = event.target.value
    this.filter()
  }

  onMaxRangeInputChange(event: any): void {
    if(event.target.value < this.minYearSearch) {
      event.target.value = this.minYearSearch
    }
    this.maxYearSearch = event.target.value
    this.filter()
  }

  onKeyDownTagInput(event: any): void {
    if(event.key == "Enter") {
      if(event.target.value != "") {
        this.searchTags.push(event.target.value)
      }
      event.target.value = ""
    }
    this.filter()
  }

  onSearchTagClick(event: any): void {
    this.searchTags = this.searchTags.filter((value) => { return value != event.target.innerText} )
    this.filter()
  }
  
}
