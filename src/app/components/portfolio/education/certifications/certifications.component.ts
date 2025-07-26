import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../../interfaces/Certification';
import { Lib } from '../../../../lib/lib';

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
    @Input() certifications: Certification[] = [];
}
