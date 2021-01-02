import {Component} from '@angular/core' ;
import { DataService } from '../data.service';
import { Post } from '../Post';


@Component({
    selector : "mi-clase" ,
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
 export class HelloWorld{
    title  =  "Pagina 1" ;
    posts : Post[] ; 
    constructor(private dataService: DataService){
        this.dataService.getData().subscribe( data=>{
            this.posts = data ; 
        });

    }
 }