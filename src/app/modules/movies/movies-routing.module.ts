import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesComponent} from "./components/movies/movies.component";
import {MovieResolveService} from "./services/resolvers";
import {MovieComponent} from "./components/movie/movie.component";
import {MovieDetailsComponent} from "../../components/movie-details/movie-details.component";
import {MovieDetailsResolverService} from "../../services";


const routes: Routes = [
  {path: ':currentPage', component:MoviesComponent, resolve: {data: MovieResolveService}},
  {
    path: '', component: MoviesComponent, resolve: {data: MovieResolveService}, children: [
      {path: 'movie/:id', component: MovieComponent}
    ],
  },
   {path: 'movie-details/:id', component: MovieDetailsComponent, resolve: {data: MovieDetailsResolverService}},
   {path: ':page/movie-details/:id', component: MovieDetailsComponent, resolve: {data: MovieDetailsResolverService}}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
