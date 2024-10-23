import { Component, Input } from '@angular/core';
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
export class SkillContainerComponent {
  @Input() skills: Skill[] = []

  getGradient(percent: number): string {
    let colorAccentA: string = getComputedStyle(document.body).getPropertyValue("--color-accentA")
    let colorAccentB: string = getComputedStyle(document.body).getPropertyValue("--color-accentC")
    let backgroundGradient: string = `background: linear-gradient(90deg, ${colorAccentA} ${percent}%, ${colorAccentB} ${100-percent}%);`
    if(percent < 50) {
      backgroundGradient = `background: linear-gradient(to left, ${colorAccentA} ${100-percent}%, ${colorAccentB} ${percent}%);`
    }
    return  backgroundGradient;
  }
}
