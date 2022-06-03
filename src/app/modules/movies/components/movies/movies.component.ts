import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IPage} from "../../../../models";
import {IMovie} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {maxPages} from "../../../../constants";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  result: IPage;
  movies: IMovie[];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({currentPage}) => {
      if(currentPage < 1 || currentPage > maxPages) currentPage = '1';
      this.movieService.getPage(currentPage).subscribe(value => {
        this.result = value;
        this.movies = this.result.results;
      });
    })
  }
}
