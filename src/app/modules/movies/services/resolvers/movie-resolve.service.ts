import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {IPage} from "../../../../models";
import {Observable} from "rxjs";
import {MovieService} from "../movie.service";

@Injectable({
  providedIn: 'root'
})
export class MovieResolveService implements Resolve<IPage> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPage> | Promise<IPage> | IPage {
    return this.movieService.getALl();
  }
}
