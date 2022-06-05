import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../services";
import {IGenre} from "../../models";
import {StorageService} from "../../services/storage.service";
import {Params, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres: IGenre[];
  constructor(private genreService:GenreService,
              private storageService:StorageService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(value =>  {
      this.genres = value.genres;
      this.storageService.genresArr.next(value.genres);
    });

  }

  selectGenre(id: number) {

    const queryParams: Params={genre: id}
      this.router.navigate([],
        {queryParams}

    )
  }
}
