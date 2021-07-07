import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoComponent } from './contrato.component';
import { PortadaComponent } from './formulario/portada/portada.component';
import { PlantillaComponent } from './formulario/plantilla/plantilla.component';
import { EncargadosComponent } from './formulario/encargados/encargados.component';
import { ActividadesComponent } from './formulario/actividades/actividades.component';



@NgModule({
  declarations: [ContratoComponent, PortadaComponent, PlantillaComponent, EncargadosComponent, ActividadesComponent],
  imports: [
    CommonModule
  ]
})
export class ContratoModule { }
