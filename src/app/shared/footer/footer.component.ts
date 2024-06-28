import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/pages/listing/listing.service';
import { Employee } from '../types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private listingService: ListingService) {}
  page = 0;
  totalPages = 0;
  totalLength = 0;
  list: Employee[] = [];
  ngOnInit(): void {
    this.page = Number(localStorage.getItem('page')) ?? 0;
    this.totalPages = Number(localStorage.getItem('total')) ?? 0;
    this.totalLength = Number(localStorage.getItem('totalLength')) ?? 0;
    this.listingService.list$.subscribe({
      next: (res) => {
        if (res) {
          this.list = res;
        }
      },
    });
  }

  onClickPrev() {
    if (this.page == 1) {
      return;
    }
    this.listingService.prevList();
    this.page = Number(localStorage.getItem('page')) ?? 0;
    this.totalPages = Number(localStorage.getItem('total')) ?? 0;
  }
  onClickNext() {
    if (this.page == this.totalPages) {
      return;
    }
    this.listingService.nextList();
    this.page = Number(localStorage.getItem('page')) ?? 0;
    this.totalPages = Number(localStorage.getItem('total')) ?? 0;
  }
}
