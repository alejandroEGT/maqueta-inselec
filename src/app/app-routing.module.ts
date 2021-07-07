import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'empresa',
    loadChildren: ()=> import('./empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path:'personal',
    loadChildren: ()=> import('./personal/personal.module').then(m => m.PersonalModule)
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
