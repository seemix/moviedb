import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IPage} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getALl(): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}`)

  }

  getPage(page:number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}&page=${page}`);
  }
  getByGenre(genreId:string): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.byGenre)
  }
}
