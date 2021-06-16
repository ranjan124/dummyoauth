import {Component} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sapp';

  constructor(private auth: AuthService) {

  }

  login() {
    this.auth.loginWithRedirect({redirect_uri: "mytestapp://callback"}).subscribe(login => console.log('login'));
  }

  logout() {
    this.auth.logout({returnTo: "mytestapp://callback"});
  }
}
