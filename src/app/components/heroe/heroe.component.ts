import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss'
})
export class HeroeComponent implements OnInit {

  public heroe!: Heroes;

  constructor(private activateRoute: ActivatedRoute, private heroeService: HeroesService, private router: Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(({ id }) => {
      this.heroe = this.getHeroe(id);
    });
  }

  
  getHeroe(id: number) {
    return this.heroeService.getHeroe(id);
  }

  back() {
    this.router.navigate(['/heroes']);
  }

}
