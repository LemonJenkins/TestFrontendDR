import {Component} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  title: string = "LogIn".toLocaleUpperCase();

  login(nickname: string, password: string,) {
    let nick: string = nickname;
    let pass: string = password;
    console.log(nick, pass);
  }

}
