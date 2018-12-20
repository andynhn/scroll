import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = "scroll";
  user = {
    "username": '',
    "email": '',
    "password": ''
  }
  errors = {};
  
  constructor(
    private _userService: UserService, 
    private _router: Router
  ) { }


  ngOnInit() {
  }
  create(){
    let observable = this._userService.createUser(this.user);
    observable.subscribe(data => {
      if(data['status'] == "not ok"){
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/dashboard']);
      }
    });
  }

  create_user() {
    console.log(this.newUser);
    this._router.navigate(['/dashboard']);
  }

}
