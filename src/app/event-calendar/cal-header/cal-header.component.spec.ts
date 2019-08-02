import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalHeaderComponent } from './cal-header.component';

describe('CalHeaderComponent', () => {
  let component: CalHeaderComponent;
  let fixture: ComponentFixture<CalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
