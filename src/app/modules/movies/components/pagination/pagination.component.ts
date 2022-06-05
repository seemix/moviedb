import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../../services/storage.service";
import {maxPages} from "../../../../constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentPage: number;
  currentGenre: number | null;
  pagesArr: number[];
  maxPages: string = maxPages;

  constructor(private storageService: StorageService, private router: Router,) {
  }

  ngOnInit(): void {
    this.storageService.currentGenre.subscribe(genre => this.currentGenre = genre);
    this.storageService.currentPage.subscribe(value => {
      let offset = 1;
      if (value >= 6) offset = value - 5;
      const arr = [];
      for (let i = offset; i < offset + 10; i++) arr.push(i);
      this.pagesArr = arr;
      this.currentPage = value;

    });

  }

  previousPage() {

    this.router.navigate([],
      {queryParams: {page: this.currentPage - 1}}).then(() => {
      this.storageService.currentPage.next(this.currentPage - 1);
    })
  }

  nextPage() {
    this.router.navigate([],
      {queryParams: {page: this.currentPage + 1}}).then(() => {
      this.storageService.currentPage.next(this.currentPage + 1);
    })

  }
}
