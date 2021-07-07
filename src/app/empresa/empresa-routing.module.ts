import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { EmpresaComponent } from './empresa.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
    {
        path:'',
        component: EmpresaComponent,
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

export class EmpresaRoutingModule {}