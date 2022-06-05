import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components';
import {MoviesRoutingModule} from "./movies-routing.module";
import { MovieComponent } from './components';
import { PageComponent } from './components';
import { PaginationComponent } from './components';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    PageComponent,
    PaginationComponent,
  ],

  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],

})
export class MoviesModule { }
