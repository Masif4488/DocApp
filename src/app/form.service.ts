import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  }) 
export class FormService{
    uri='http://localhost:4000/form';
    constructor(private http:HttpClient){}
    addForm(firstName,lastName,email,password,confirmPassword){
        const obj={
          firstName: firstName,
          lastName:lastName,
          email:email,
          password:password,
          confirmPassword:confirmPassword
        };
       //console.log(obj);
      // console.log(`${this.uri}`);
        this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
      }
      getForms(email,password){
        const obj1={
          email:email,
          password:password
        };
        console.log(obj1);
        this.http.post(`${this.uri}/`, obj1).subscribe(res => console.log('Done'));
      }
}