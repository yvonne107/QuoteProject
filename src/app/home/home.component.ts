import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  register: boolean = true;//for top button
  login:boolean = false;

  constructor(public serviceU:UserService, public router : Router) {
   }

  ngOnInit(): void {
   
  }

  loginUser(form:NgForm){
    this.serviceU.login(form.value).subscribe({
    next : (data)=>{
      console.log(data)
      console.log('login success')
      let token = data['access_token']
      localStorage.setItem('token',token);
      console.log(token);
      this.router.navigate(['/quote/']);
      form.reset();
      }
    })
  }



  registerUser(form:NgForm){
    console.log(form);
    //this.serviceU.userI = form.value;
    //this.serviceU.userI = form.value;
    this.serviceU.register(form.value).subscribe({
      next : ()=>{
        console.log("register success")  
        this.showLogin();
        form.reset();
      }
    })
  }

  //button for top
  //add property binding and *ngIf for showing forms
  showLogin(){
    this.register = false;
    this.login = true;
  }

  showRegister(){
    this.register = true;
    this.login = false; 
  }
}
