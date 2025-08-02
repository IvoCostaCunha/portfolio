import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../interfaces/Project';
import { TagContainerComponent } from '../tag-container/tag-container.component';
import { Lib } from '../../lib/lib';

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
    @Input() project: Project = {
        title: "", description: "", year: "", tags: [], imgs: [], links: []
    };
    getIcon = Lib.getIcon;
}
