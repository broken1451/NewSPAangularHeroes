import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NotFoundResultsComponent } from './not-found-results/not-found-results.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent,
    NotFoundResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
