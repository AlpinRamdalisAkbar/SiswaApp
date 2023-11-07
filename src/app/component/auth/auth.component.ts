import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor (private auth : AuthenticationService) {}

  logOutBtn() {
    this.auth.logout();
  }

}
