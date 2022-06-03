import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', loadChildren: () => import('./modules/home').then(value => value.HomeModule)},
      {path: 'movies', loadChildren: () => import('./modules/movies').then(value => value.MoviesModule)},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      // {path: '../../movie-details/:id', component: MovieDetailsComponent, resolve: {data: MovieDetailsResolverService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
