import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../../interfaces/Language';

@Component({
  selector: 'app-language-container',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './language-container.component.html',
  styleUrl: './language-container.component.css'
})
export class LanguageContainerComponent {
  @Input() languages: Language[] = [{name: "", level: ""}]
}
