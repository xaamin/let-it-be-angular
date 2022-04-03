import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsageComponent } from './table-usage.component';

describe('TableUsageComponent', () => {
  let component: TableUsageComponent;
  let fixture: ComponentFixture<TableUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
