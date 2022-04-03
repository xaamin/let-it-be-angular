import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.scss']
})
export class FormEventsComponent implements OnInit, OnDestroy {

  @Input('isBusy') isBusy: Boolean = false;

  @Output('onChange') onChange = new EventEmitter<any>();
  @Output('onCancel') onCancel = new EventEmitter<any>();
  @Output('onSubmit') onSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(data => {
      this.onChange.emit({
        isValid: this.form.valid,
        data: this.form.value,
      });
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.onChange.complete();
    this.onCancel.complete();
    this.onSubmit.complete();

    console.log('OnDestroy called, all of the subscribers were unsubscribed and free the allocated memory, thus prevents memory leaks.')
  }

  buildForm() {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('\\+[0-9]{12}')]),
    });
  }

  onCancelClick() {
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();

    this.form = this.fb.group({});

    this.onCancel.emit();

    this.buildForm();
  }

  onSubmitClick() {
    this.onSubmit.emit({
      isValid: this.form.valid,
      data: this.form.value,
      form: this.form
    });
  }
}

