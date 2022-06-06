import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';

import {StorageService} from "../../../../services";
import {maxPages} from "../../../../constants";

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

  constructor(private storageService: StorageService, private router: Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page, genre}) => {
      if(!page) {
        this.storageService.currentPage.next(1);}
      else {this.storageService.currentPage.next(page)};
      if(!genre) this.storageService.currentGenre.next(null);
    })
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
      {queryParams: {genre: this.currentGenre, page: +this.currentPage-1}}).then(() => {
      this.storageService.currentPage.next(+this.currentPage);
    })
  }


  nextPage() {
    this.router.navigate([],
      {queryParams: {genre: this.currentGenre, page: +this.currentPage+1}}).then(() => {
      console.log(this.currentGenre);
      console.log(this.currentPage);
      this.storageService.currentPage.next(+this.currentPage);
    })
  }
}
