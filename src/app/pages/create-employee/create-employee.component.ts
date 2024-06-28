import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from '../listing/listing.service';
import { Employee } from 'src/app/shared/types';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  constructor(private router: Router,
    private listingService:ListingService
  ) {}

  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    address: new FormControl('', Validators.required),
  });
  isSubmitted = false;

  ngOnInit(): void {}

  onCancel() {
    this.createForm.reset();
    this.isSubmitted = false
  }

  onAddEmployee() {
    this.isSubmitted = true;
    console.log('form', this.createForm);

    if (!this.isSubmitted || this.createForm.invalid) {
      return;
    }
    this.listingService.addEmployee(this.createForm.value as Employee)
    this.router.navigate(['/list']);
  }

  get nameControl() {
    return this.createForm.controls['name'];
  }
  get emailControl() {
    return this.createForm.controls['email'];
  }
  get phoneControl() {
    return this.createForm.controls['phone'];
  }
  get addressControl() {
    return this.createForm.controls['address'];
  }
}
