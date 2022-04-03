import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EventNames } from '../new-entry/new-entry.component';

@Component({
  selector: 'new-entry-dialog',
  templateUrl: 'new-entry-dialog.component.html',
  styleUrls: ['./new-entry-dialog.component.scss']
})
export class NewEntryDialogComponent {

  form: FormGroup;
  nameControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  phoneControl = new FormControl('', [Validators.required, Validators.pattern('\\+[0-9]{12}')]);

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<NewEntryDialogComponent>,
  ) {
    this.form = fb.group({
      name: this.nameControl,
      email: this.emailControl,
      phone: this.phoneControl,
    });
  }

  onSave() {
    this.dialogRef.close({
      type: EventNames.success,
      data: this.form.value
    });
  }

}
