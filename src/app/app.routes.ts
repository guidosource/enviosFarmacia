import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PendientesComponent  } from './components/pendientes/pendientes.component';
import { AgendaComponent } from './components/agenda/agenda.component';

const ROUTES: Routes = [
    { path: '', component: PendientesComponent },
    { path: 'pendientes', component: PendientesComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: '**', component: PendientesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
