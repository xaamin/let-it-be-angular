import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEventsComponent } from './form-events.component';

describe('FormEventsComponent', () => {
  let component: FormEventsComponent;
  let fixture: ComponentFixture<FormEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
