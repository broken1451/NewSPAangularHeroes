import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeRoutingModule } from './heroe-routing.module';
import { HeroeComponent } from './heroe.component';


@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule
  ]
})
export class HeroeModule { }
