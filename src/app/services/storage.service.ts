import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  genresArr = new BehaviorSubject([]);
  currentPage = new BehaviorSubject(1);
  currentGenre = new BehaviorSubject(null);

  constructor() {
  }
}
