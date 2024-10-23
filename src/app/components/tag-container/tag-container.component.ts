import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-container',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tag-container.component.html',
  styleUrl: './tag-container.component.css'
})
export class TagContainerComponent {
  @Input() tags: string[] = []


}
