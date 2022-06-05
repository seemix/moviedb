import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import { MovieComponent } from './components/movie/movie.component';
import { PageComponent } from './components/page/page.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    PageComponent,
  ],

  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],

})
export class MoviesModule { }
