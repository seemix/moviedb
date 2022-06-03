import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent
  ],

  imports: [
    CommonModule,
    MoviesRoutingModule
  ],

})
export class MoviesModule { }
