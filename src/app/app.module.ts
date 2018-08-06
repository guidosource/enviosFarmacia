import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { AltaclienteComponent } from './components/altacliente/altacliente.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { HeaderComponent } from './shared/header/header.component';
import { AgendaComponent } from './components/agenda/agenda.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaclienteComponent,
    PendientesComponent,
    HeaderComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
