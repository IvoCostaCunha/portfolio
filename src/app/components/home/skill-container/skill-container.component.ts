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
  colorAccentA: string = ""
  colorAccentB: string = ""

  mediaQuery: any = window.matchMedia("(prefers-color-scheme: light)")

  ngOnInit() {
    console.log(this.mediaQuery)
    this.colorAccentA = getComputedStyle(document.body).getPropertyValue("--color-accentA")
    this.colorAccentB = getComputedStyle(document.body).getPropertyValue("--color-accentC")
    this.mediaQuery.addEventListener("change", (e: Event) => {
      this.colorAccentA = getComputedStyle(document.body).getPropertyValue("--color-accentA")
      this.colorAccentB = getComputedStyle(document.body).getPropertyValue("--color-accentC")
    })
  }

  getGradient(percent: number): string {
    let backgroundGradient: string = `background: linear-gradient(90deg, ${this.colorAccentA} ${percent}%, ${this.colorAccentB} ${100-percent}%);`
    if(percent < 50) {
      backgroundGradient = `background: linear-gradient(to left, ${this.colorAccentA} ${100-percent}%, ${this.colorAccentB} ${percent}%);`
    }
    return  backgroundGradient;
  }
}
