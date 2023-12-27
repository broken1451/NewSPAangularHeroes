import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrl: './heroe-tarjeta.component.scss'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input({required: true}) heroe!: Heroes;
  @Input({ required: true }) idx!: number;
  @Output() heroeSeleccionado: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto() {
    this.heroeSeleccionado.emit(this.idx);
    // this.router.navigate(['/heroe', this.idx]);
  }

}
