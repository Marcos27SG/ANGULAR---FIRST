import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorld } from './FirstComponent/first.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent ,
    HelloWorld,
    SecondComponentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
