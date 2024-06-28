import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing/listing.service';
import { Employee } from 'src/app/shared/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService
  ) {}
  id = 0;
  employee!: Employee | null;

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (res) => {
        this.id = res['id'];
        this.employee = this.listingService.getEmployeeById(this.id);
      },
    });
  }
}
