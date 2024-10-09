import { Component, EventEmitter, Output } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { env } from '../../environment/env';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule, FormsModule,
    MatButtonModule, MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userEmail: string = "user@domain.com"
  userPassword: string = "<password>"
  @Output() isLoggedIn = new EventEmitter<boolean>()

  async signIn(email: string, password: string): Promise<any> {
    try {
      let res = await fetch(env.apiFullAdress + "/sign-in", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.userEmail, password: this.userPassword })
      })

      if (res.status == 200) {
        this.isLoggedIn.emit(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  onSignIn(event: any): void {
    this.signIn(this.userEmail, this.userPassword)
  }
}
