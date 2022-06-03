import {Component, OnInit} from '@angular/core';
import {MovieDetailsService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {IGenre, IMovieDetailed} from "../../models";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovieDetailed;
  genres: IGenre[];

  constructor(
    private movieDetailsService: MovieDetailsService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.movieDetailsService.getById(id).subscribe(value => this.movie = value);
    })
  }

  openDetails() {
    this.dialog.open(PopupComponent, {data: `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`})
  }

  goBack() {
   history.back();
  }
}
