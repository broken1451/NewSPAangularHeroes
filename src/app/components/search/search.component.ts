import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../interfaces/heroes.interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  
  public heroes: Heroes[] = [];
  public auxheroes: Heroes[] = [];
  public termino: string = '';

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Suscribe al parámetro 'termino' de la ruta activa y realiza una búsqueda de héroes utilizando dicho término.
   * Asigna los resultados de la búsqueda a las propiedades 'heroes' y 'auxheroes'.
   */
  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ termino }) => {
      this.termino = termino;
      this.heroes = this.getHeroeByTerm(termino);
      this.auxheroes = Object.assign([], this.heroes);
    });
  }
  

  getHeroeByTerm(termino: string): Heroes[] {
   return this.heroesService.searchHeroes(termino)!;
  }
}
