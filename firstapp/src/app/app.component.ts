import { Component } from '@angular/core';

import {DataService} from './data.service' ;  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  users: string[]= ['Marcos' , 'Ramiro' , 'Saavedra' , 'Garcia'];
  activated : boolean = false; 
  nombre : string = 'Hola '; 
  number : number = 20 ;
  age : number  = 25;
  city : {
    name : number , 
    location : any 

  }
  posts = [] ; 
  sports : string[];
   constructor(private dataService : DataService){
    this.dataService.getData().subscribe(data =>{
      console.log(data);
this.posts = data; 
    });
    this.city = {
      name : 20 , 
      location : 'hola' 
    }
    this.sports = ['futobol' , 'basker'  , 'ping pang'] ; 
  }

  sayHello(){
    alert('Hello');
  }
  deleteUser(sport){
    for (let index = 0; index < this.sports.length; index++) {
      if (sport == this.sports[index]){
        this.sports.splice(index , 1) ; 
      }
      
    }
    

  }
  addUser(newSport){
    this.sports.push(newSport.value);
    newSport.value = '' ; 
    newSport.focus();
    return false; 
  }

}
