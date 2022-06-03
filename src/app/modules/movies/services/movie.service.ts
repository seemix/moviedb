import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, delay} from "rxjs";

import {urls} from "../../../constants";
import {IPage} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getALl(): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}`).pipe(delay(800));
  }

  getPage(page:string): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}&page=${page}`);
  }
}
