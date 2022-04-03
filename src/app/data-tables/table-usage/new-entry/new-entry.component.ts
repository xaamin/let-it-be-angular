import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { NewEntryDialogComponent } from '../new-entry-dialog/new-entry-dialog.component';

// Some typings
export enum EventNames {
  cancel,
  success
}

export type NewEntryEvent = {
  type: EventNames,
  data?: {
    [key: string]: string
  }
}

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit, OnDestroy {

  @Output('onCancel') onCancel = new EventEmitter<NewEntryEvent>();
  @Output('onSuccess') onSuccess = new EventEmitter<NewEntryEvent>();

  constructor(
    public dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.openDialog();

    // To show how the events are raised, this should be, by design, in
    // parent components in the html file =)
    this.onCancel.subscribe(result => {
      console.log('this.onCancel gets a next value with result', result)
    });

    this.onSuccess.subscribe(result => {
      console.log('this.onSuccess gets a next value with result', result)
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.onCancel.complete();
    this.onSuccess.complete();

    console.log('OnDestroy called, all of the subscribers were unsubscribed and free the allocated memory, thus prevents memory leaks.')
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewEntryDialogComponent, {
      disableClose: true,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: NewEntryEvent | undefined) => {
      if (!!result) {
        this.onSuccess.emit(result);
      } else {
        this.onCancel.emit({
          type: EventNames.cancel
        });
      }

      this._router.navigate(['/tables']);
    });
  }
}
