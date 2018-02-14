import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpModule} from '@angular/http'
import { AppComponent }  from './app.component';
import { UserComponent } from "./components/user.component";
import { RegistrationComponent } from "./components/registration.component";
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule ,routing, HttpModule],
  declarations: [ AppComponent ,UserComponent,RegistrationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
