import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 


@Injectable()
export class AuthorizationService{
    url:string="http://localhost:53560/api/values";
    constructor(private http: HttpClient){
        
    }


    GetData(){
        //let headers = new HttpHeaders();
    //this.createAuthorizationHeader(heade
    const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'personID': '1234'
        })
        }; 
        return this.http.get(this.url,httpOptions);
    }
}