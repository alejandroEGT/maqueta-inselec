import { ContratoComponent } from './contrato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path:'', component: ContratoComponent},
    { path:'**', pathMatch:'full', redirectTo:''}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class ContratoRoutingModule {}
