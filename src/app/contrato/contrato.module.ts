import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoComponent } from './contrato.component';
import { PortadaComponent } from './formulario/portada/portada.component';
import { PlantillaComponent } from './formulario/plantilla/plantilla.component';
import { EncargadosComponent } from './formulario/encargados/encargados.component';
import { ActividadesComponent } from './formulario/actividades/actividades.component';
import { ContratoRoutingModule } from './contrato-routing.module';
import { ElementosComponent } from './formulario/elementos/elementos.component';
import { FormularioContratoComponent } from './formulario-contrato/formulario-contrato.component';



@NgModule({
  declarations: [ContratoComponent, PortadaComponent, PlantillaComponent, EncargadosComponent, ActividadesComponent, ElementosComponent, FormularioContratoComponent],
  imports: [
    CommonModule,
    ContratoRoutingModule
  ]
})
export class ContratoModule { }
