import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {

  @Input() form!: FormGroup;

  addressControl = new FormControl('', Validators.required);
  cityControl = new FormControl('', [Validators.required]);
  countryControl = new FormControl('', [Validators.required]);

  constructor(
    public fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form.addControl('address', this.fb.group({
      address: this.addressControl,
      city: this.cityControl,
      country: this.countryControl,
    }));
  }

}
