import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from "../../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  currentPage: number;
  @Input()
  page: number;
  @Input()
  genre: number | null;

  constructor(private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.storageService.currentPage.subscribe(value => this.currentPage = value);
  }

  changePage(page: number, genre: number | null) {
    this.genre = genre;
    this.router.navigate([],
      {queryParams: {genre, page}}).then(() => {
      this.storageService.currentPage.next(page);
    })
  }
}
