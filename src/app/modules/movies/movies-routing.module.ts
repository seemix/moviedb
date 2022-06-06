import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesComponent, MovieComponent} from "./components";
import {MovieResolveService} from "./services/resolvers";
import {MovieDetailsComponent} from "../../components/movie-details/movie-details.component";
import {MovieDetailsResolverService} from "../../services";


const routes: Routes = [
  {path: ':currentPage', component: MoviesComponent, resolve: {data: MovieResolveService}},
  {
    path: '', component: MoviesComponent, resolve: {data: MovieResolveService}, children: [
      {path: 'movie/:id', component: MovieComponent}
    ],
  },
  {path: 'movie-details/:id', component: MovieDetailsComponent, resolve: {data: MovieDetailsResolverService}},
  // {path: ':page/movie-details/:id', component: MovieDetailsComponent, resolve: {data: MovieDetailsResolverService}},
  // {path: 'genres/:genreId', component: MoviesComponent, resolve: {data: MovieResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
