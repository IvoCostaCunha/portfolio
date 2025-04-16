import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  @Input() aboutMeHTML: string = ""
  @Input() workMethodsHTML: string = ""
  @Input() mePhotoPath: string = ""
}
