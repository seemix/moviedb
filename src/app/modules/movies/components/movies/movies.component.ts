import {Component, OnInit} from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {IPage} from "../../../../models";
import {IMovie} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {StorageService} from "../../../../services";
import {GenreService} from "../../../../services";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  result: IPage;
  movies: IMovie[];
  currentGenre: number | null;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private genreService: GenreService
  ) {
  }

  ngOnInit(): void {

    this.storageService.currentGenre.subscribe(value => this.currentGenre = value);
    this.activatedRoute.queryParams.subscribe(({page, genre}) => {
      if (genre) {
        if (!page) page = 1;
        this.storageService.currentGenre.next(genre);
        console.log(genre);
        this.storageService.currentPage.next(page);
        this.genreService.getById(genre, page).subscribe(data => {
          this.result = data;
          this.movies = this.result.results;
        })
      } else {
        if (!page) page = 1;
        this.movieService.getPage(page).subscribe(data => {

          this.result = data;
          this.movies = this.result.results;
        })
      }
    })
  }
}
