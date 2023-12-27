import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [HeroesComponent, HeroeTarjetaComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
  exports: []
})
export class HeroesModule { }
