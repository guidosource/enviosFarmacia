import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { MessageService } from 'primeng/api';

// Componentes
import { AppComponent } from './app.component';
import { AltaclienteComponent } from './components/altacliente/altacliente.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { HeaderComponent } from './shared/header/header.component';
import { AgendaComponent } from './components/agenda/agenda.component';


// Servicios
import { GlobalServices } from './services/global.services';
import { ClienteServices } from './services/cliente.services';
import { UsuarioServices } from './services/usuario.services';

// Rutas
import { AppRoutingModule } from './app.routes';
import { NuevoenvioComponent } from './components/nuevoenvio/nuevoenvio.component';
import { AgregaritemComponent } from './components/agregaritem/agregaritem.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaclienteComponent,
    PendientesComponent,
    HeaderComponent,
    AgendaComponent,
    NuevoenvioComponent,
    AgregaritemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [GlobalServices, ClienteServices, MessageService, UsuarioServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
