import { Component, Input } from '@angular/core';
import { Contact } from '../../interfaces/Contact';
import { Lib } from '../../lib/lib';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})

export class ContactComponent {
    @Input() contact: Contact = {
        tel: "", mail: "", proMail: "",
        github: "", codeberg: "", linkedIn: ""
    };
    sendMail = Lib.sendMail;
}
