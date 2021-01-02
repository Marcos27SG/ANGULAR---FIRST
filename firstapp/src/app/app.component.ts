import { Component } from '@angular/core';

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
  age : number ;
  city : {
    name : number , 
    location : any 

  }
  sports : string[];
   constructor(){
    this.age = 27;
    
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
