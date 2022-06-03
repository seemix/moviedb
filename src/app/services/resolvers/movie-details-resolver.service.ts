import { Injectable } from '@angular/core';

import {MovieDetailsService} from "../movie-details.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IMovieDetailed} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolverService implements Resolve<IMovieDetailed>{

  constructor(private detailsService:MovieDetailsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieDetailed> | Promise<IMovieDetailed> | IMovieDetailed {
    const {id} = route.params;
    return this.detailsService.getById(id)
  }
}
