import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AltaclienteComponent } from './components/altacliente/altacliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaclienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
