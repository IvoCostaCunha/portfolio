import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortHeader } from '@angular/material/sort';
import { CommonModule } from '@angular/common';



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

export class ProjectsListComponent {
  minYear: Number = 2015
  maxYear: Number = new Date().getFullYear()
  minYearSearch: Number = this.minYear
  maxYearSearch: Number = this.maxYear

  projects = [
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},
    {name: 'Project1', year: "2022", tags: ["Angular", "Spring"], link: "test.com", githubLink: "testGithub",  details: "Bla bla bla bla bla bla bla"},


  ];

  displayedColumns: string[] = ["name", "year", "tags", "link", "githubLink"];

  showDetails(project: any) {
    alert(project.details) 
  }

  onMinRangeInputChange(event: any): void {
    this.minYearSearch = event.target.value
  }

  onMaxRangeInputChange(event: any): void {
    this.maxYearSearch = event.target.value
  }

  onKeyDownTagInput(event: any): void {
    if(event.key == "Enter") {
      console.log(event.target.value)
    }
  }
}
