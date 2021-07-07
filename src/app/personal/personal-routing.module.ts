
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonalComponent } from './personal.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
    {
        path:'',
        component: PersonalComponent,
        children:[
            { path: 'formulario', component: FormularioComponent },
            { path: 'listado', component: ListadoComponent },
        ]
    },

    {
        path:'**',
        pathMatch:'full', redirectTo:''
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class PersonalRoutingModule{}
