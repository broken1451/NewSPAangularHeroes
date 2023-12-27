import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../interfaces/heroes.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  public heroes: Heroes[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }


  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroesService.getHeroes();
  }

  goto(event: number) {
    this.router.navigate(['/heroe', event]);
  }
}
