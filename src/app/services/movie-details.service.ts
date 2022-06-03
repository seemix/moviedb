import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {environment} from "../../environments/environment";
import {IMovieDetailed} from "../models";
const {apiKey} = environment;

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private httpClient:HttpClient) { }
  getById(id:string): Observable<IMovieDetailed> {
    return this.httpClient.get<IMovieDetailed>(`${urls.byId}/${id}?api_key=${apiKey}`)
  }
}
