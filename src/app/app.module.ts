import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElevesComponent } from './Components/eleves/eleves.component';
import { LayoutComponent } from './Components/layout/layout.component';
import {MatDividerModule} from '@angular/material/divider';
import { ClassComponent } from './Components/class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    ElevesComponent,
    LayoutComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
