import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Certification } from '../../../interfaces/Certification';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule, CertificationsComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() eduIntroHTML: string = ""
  @Input() eduPhotoPath: string = ""
  @Input() certifications: Certification[] = []
}
