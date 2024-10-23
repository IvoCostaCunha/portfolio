import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login/login.component';
import { DataModificationComponent } from './data-modification/data-modification.component';

interface User {
  id: string
  email: string
  password: string
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, FormsModule, CommonModule,
    MatFormFieldModule, MatButtonModule, MatInputModule,
    LoginComponent,
    DataModificationComponent
],

  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {
  isloggedIn: boolean = false
  showLogin: boolean = true
  showModification: boolean = false

  loggedIn = ($event: boolean) => {
    this.isloggedIn = $event
    this.showLogin = false
    this.showModification = true
  }
}
