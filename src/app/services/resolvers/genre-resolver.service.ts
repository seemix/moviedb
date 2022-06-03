import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {IGenre} from "../../models";
import {GenreService} from "../genre.service";

@Injectable({
  providedIn: 'root'
})
export class GenreResolverService implements Resolve<IGenre[]> {

  constructor(private genreService: GenreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenre[]> | Promise<IGenre[]> | IGenre[] {
    return this.genreService.getAll();
  }
}
