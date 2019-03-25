import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { PeopleComponent } from './component/about/people/people.component';
import { PhilosophyComponent } from './component/about/philosophy/philosophy.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, RoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, FooterComponent, AboutComponent, PeopleComponent, PhilosophyComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
