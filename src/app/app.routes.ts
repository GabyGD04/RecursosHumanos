import { RouterModule, Routes } from '@angular/router';
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

const app_routes: Routes =[
    {path: 'contactos', component: ContactosComponent},
    {path: 'contrato', component: ContratoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'datoscontacto', component: DatoscontactoComponent},
    {path: 'datospersonales', component: DatospersonalesComponent},
    {path: 'domicilio', component: DomicilioComponent},
    {path: 'empresa', component: EmpresaComponent},
    {path: 'expedientes', component: ExpedientesComponent},
    {path: 'nivelprofesional', component: NivelprofesionalComponent},
    {path: 'vacaciones', component: VacacionesComponent},

    {path: '**', pathMatch: 'full', redirectTo: 'contactos'}
];
export const app_routing =RouterModule.forRoot(app_routes);

