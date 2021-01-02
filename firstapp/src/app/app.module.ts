import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule , Route} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorld } from './FirstComponent/first.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http' ; 
import {DataService} from './data.service' ; 

const routes: Route[]  = [
  {path : '' , component: UserComponent} ,
  {path : 'about' , component: SecondComponentComponent} ,
  {path : 'data' , component: HelloWorld} ,
]
@NgModule({
  declarations: [
    AppComponent ,
    HelloWorld,
    SecondComponentComponent,
    UserComponent
  ], 
  imports: [
    BrowserModule , 
    FormsModule , 
    HttpClientModule , 
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
