import { Component, Input } from '@angular/core';

import Redirections from '../../utils/Redirections';
import Mail from '../../utils/Mail';

import { Contact } from '../../interfaces/Contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  @Input() contact: Contact = {tel: "", mail: "", github: "", gitlab: "", linkedIn: ""}
  onClickRedirect = (l: any) => {Redirections.onClickRedirect(l)}
  onClickSendMail = (a: any) => {Mail.sendMail(a)}
}
