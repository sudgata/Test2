import { Component, OnInit } from '@angular/core';
import {AuthorizationService } from 'services/Authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

   result:any;
   constructor(private authService: AuthorizationService) { }
   ngOnInit(){
     
     this.authService.GetData().subscribe(res=>this.result=res);
   }
  
}
