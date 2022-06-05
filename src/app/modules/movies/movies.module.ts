import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import { MovieComponent } from './components/movie/movie.component';
// import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
  ],

  imports: [
    CommonModule,
    MoviesRoutingModule,
    // AppModule
  ],

})
export class MoviesModule { }
