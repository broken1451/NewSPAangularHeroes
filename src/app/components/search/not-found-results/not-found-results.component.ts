import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-results',
  templateUrl: './not-found-results.component.html',
  styleUrl: './not-found-results.component.scss'
})
export class NotFoundResultsComponent implements OnInit {

  @Input({ required: true }) termino!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
