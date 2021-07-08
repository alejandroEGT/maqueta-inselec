import { HomeComponent } from './home/home.component';
import { PadreComponent } from './padre/padre.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    component:PadreComponent,

    children: [
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'empresa',
        loadChildren: ()=> import('./empresa/empresa.module').then(m => m.EmpresaModule)
      },
      {
        path:'personal',
        loadChildren: ()=> import('./personal/personal.module').then(m => m.PersonalModule)
      },
      {
        path:'contrato',
        loadChildren: ()=> import('./contrato/contrato.module').then(m => m.ContratoModule)
      },
      {
        path:'**',
        pathMatch:'full', redirectTo:'/auth/home'
      }
    ]
  },

  {
    path:'**',
    pathMatch:'full', redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
