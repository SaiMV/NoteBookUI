import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  showLoginForm:boolean = true;
  ngOnInit() {
  }
  
  showRegstrationForm(){
    this.showLoginForm = false;
  }

}
