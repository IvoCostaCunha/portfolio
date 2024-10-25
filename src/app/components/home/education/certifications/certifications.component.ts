import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Certification } from '../../../../interfaces/Certification';

import Files from '../../../../utils/Files';
import Redirections from '../../../../utils/Redirections';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  @Input() certifications: Certification[] = []
  onClickDownload = (f: any) => {Files.onClickDownload(f)}
  onClickRedirect = (l: any) => {Redirections.onClickRedirect(l)}
}
