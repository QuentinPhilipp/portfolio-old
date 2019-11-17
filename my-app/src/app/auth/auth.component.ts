import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  badPassword: boolean = false;
  authStatus: boolean;
  username:string;
  password:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn(this.username,this.password).then(
      () => {
        if(this.authService.isAuth)
        {
          console.log('Sign in successful!');
          console.log(this.username);
          console.log(this.password);
          this.authStatus = this.authService.isAuth;
          this.router.navigate(['acceuil']);
        } else
        {
          this.authStatus = this.authService.isAuth;
          this.username='';
          this.password='';
          this.badPassword=true;
        }
      }
    );
}

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
