import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { app_routing } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DatoscontactoComponent } from './components/datoscontacto/datoscontacto.component';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { DomicilioComponent } from './components/domicilio/domicilio.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ExpedientesComponent } from './components/expedientes/expedientes.component';
import { NivelprofesionalComponent } from './components/nivelprofesional/nivelprofesional.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContratoComponent,
    CursosComponent,
    DatoscontactoComponent,
    DatospersonalesComponent,
    DomicilioComponent,
    EmpresaComponent,
    ExpedientesComponent,
    NivelprofesionalComponent,
    VacacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
