import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDayItemComponent } from './cal-day-item.component';

describe('CalDayItemComponent', () => {
  let component: CalDayItemComponent;
  let fixture: ComponentFixture<CalDayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalDayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
