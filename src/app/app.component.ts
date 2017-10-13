import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 heading:string = "US TIME ZONE DISPLAY";
 selectedVal = null;
 today = new Date();
 time = null;

 getTime(timezone){
   this.today = new Date();
   
    if(timezone === 'PST'){
      this.time = this.today;
    }
    else if (timezone === 'MST') {
      this.time = this.today.setHours(this.today.getHours() + 1);
    } else if (timezone === 'CST') {
      this.time =this.today.setHours(this.today.getHours() + 2);
    } else if (timezone === 'EST') {
      this.time = this.today.setHours(this.today.getHours() + 3);
    }
    this.selectedVal = timezone;
 }

 clear(){
  
   this.selectedVal = "clear";
   this.time = "";
 }

 }
 


