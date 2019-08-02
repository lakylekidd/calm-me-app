import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDaysComponent } from './cal-days.component';

describe('CalDaysComponent', () => {
  let component: CalDaysComponent;
  let fixture: ComponentFixture<CalDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
