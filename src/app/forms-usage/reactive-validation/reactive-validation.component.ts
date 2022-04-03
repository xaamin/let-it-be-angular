import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounce, interval, lastValueFrom, Subject, tap } from 'rxjs';
import { FakeStoreApiUserService } from '../services/fake-store-api-user.service';

export type EventLogType = {
  cancel: Boolean,
  submit: Boolean,
  valid: Boolean,
  invalid: Boolean
}

@Component({
  selector: 'reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss']
})
export class ReactiveValidationComponent implements OnInit, OnDestroy {

  events: Array<string> = [];
  isBusy: Boolean = false;
  response: any | undefined = undefined;
  timer: Subject<any> = new Subject();

  options: EventLogType = {
    cancel: true,
    submit: true,
    valid: true,
    invalid: false
  };

  constructor(private api: FakeStoreApiUserService) {}

  ngOnInit(): void {
    this._subscribe();
  }

  ngOnDestroy(): void {
    this.timer.complete();
  }

  _subscribe() {
    this.timer
      .pipe(
        tap(() => {
          this.response = undefined;
        }),
        debounce(() => {
            return interval(3 * 1000)
        })
      ).subscribe(() => {
        // Flush the events array to look nice =), and to prove knowledge about Observables
        this.events = [];
      });
  }

  handleOnChange($event: any) {
    this.timer.next($event);

    !!this.options.valid
      && !!$event.isValid
      && this._handleEventLog(`The form value was changed, the form is valid ${$event.isValid}`);

    !!this.options.invalid
      && !$event.isValid
      && this._handleEventLog(`The form value was changed, the form is valid ${$event.isValid}`);
  }

  handleOnCancel($event: any) {
    this.timer.next($event);

    !!this.options.cancel && this._handleEventLog('Cancel button clicked.');
  }

  async handleOnSubmit($event: any) {
    this.timer.next($event);

    !!this.options.submit && this._handleEventLog('Submit button clicked.');

    try {
        this.isBusy = true;

        // I really like this sintax instead of the subscribe because this looks more like
        // cleaner and seems like syncronous calls and it's more readable
        const response = await lastValueFrom(this.api.store($event.data));

        this.response = response;

        this.timer.complete();

        !!$event.form && $event.form.reset();

        this._subscribe();
    } catch (error) {
      console.error(error);
    } finally {
      // To simulate real network requests
      setTimeout( () => {
        this.isBusy = false;
      }, 500);
    }
  }

  private _handleEventLog(event: any) {
    this.events = this.events.concat(event);
  }

}
