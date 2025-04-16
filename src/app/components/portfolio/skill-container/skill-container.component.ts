import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Skill } from '../../../interfaces/Skill';

@Component({
  selector: 'app-skill-container',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skill-container.component.html',
  styleUrl: './skill-container.component.css'
})
export class SkillContainerComponent implements OnInit {
  @Input() skills: Skill[] = []
  colorPositive: string = ""
  colorNegative: string = ""

  mediaQuery: any = window.matchMedia("(prefers-color-scheme: light)" || "(prefers-color-scheme: dark)")

  ngOnInit() {
    this.colorPositive = getComputedStyle(document.body).getPropertyValue("--color-accent-positive")
    this.colorNegative = getComputedStyle(document.body).getPropertyValue("--color-accent-negative")
    this.mediaQuery.addEventListener("change", () => {
      console.log("Mode changed.")
      this.colorPositive = getComputedStyle(document.body).getPropertyValue("--color-accent-positive")
      this.colorNegative = getComputedStyle(document.body).getPropertyValue("--color-accent-negative")
    })
  }

  getGradient(percent: number): string {
    let backgroundGradient: string = `background: linear-gradient(to right, ${this.colorPositive} ${percent}%, ${this.colorNegative} ${percent}%);`
    return  backgroundGradient;
  }
}
