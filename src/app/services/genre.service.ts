import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IPage} from "../models";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {

    return this.httpClient.get<any>(urls.genres);
  }

  getById(id:number, page:number): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.byGenre+id.toString()+'&page='+page.toString())
  }
}
