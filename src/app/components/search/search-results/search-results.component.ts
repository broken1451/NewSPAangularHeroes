import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroes } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {

  @Input({ required: true }) auxheroes: Heroes[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe(id?: number): void {
    this.router.navigate(['/heroe', id]);
  }
  
}
