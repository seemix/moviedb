import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../services";
import {IGenre} from "../../models";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres: IGenre[];
  constructor(private genreService:GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(value => {console.log(value); this.genres = value.genres});
    console.log(this.genres);
  }

}
