import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../interfaces/Project';
import { TagContainerComponent } from '../tag-container/tag-container.component';
import RedirectionsUtils from '../../utils/Redirections';
import Files from '../../utils/Files';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    TagContainerComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project: Project = {title: "", year: "", tags: [], link: "", imgs: [], doc: "", githubLink: "", description: ""}

  onClickDownload = (f: any) => {Files.onClickDownload(f)}
  onClickRedirect = (l: any) => {RedirectionsUtils.onClickRedirect(l)}
}
