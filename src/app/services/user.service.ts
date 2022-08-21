import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Logintk } from '../shared/logintk';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userI: User;
  readonly baseUrl = "https://localhost:44395/";

  constructor(private myhttp:HttpClient) { 
    this.userI = new User();
  }

  //login and register users
  login(formData:any){
    console.log('login()')
    let body = new URLSearchParams();
    body.set('username',formData['username'])
    body.set('password',formData['password'])
    body.set('grant_type','password');
    return this.myhttp.post<Logintk>(this.baseUrl + 'token', body, {headers:{ 'content-type' : 'application/x-www-form-urlencoded'
    }})
  }

  register(formData:any){
    console.log('register in process');
    let body = {
      "Email":formData['username'],
      "Password":formData['password'],
      "ConfirmPassword": formData['confirm']
    } 
    return this.myhttp.post(this.baseUrl + 'api/Account/Register', body, 
    {headers:{ 'content-type' : 'application/json'}})
  }

  logout(){
    localStorage.removeItem('token');
  }
}
function register() {
  throw new Error('Function not implemented.');
}

