/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreateComponent } from './breate.component';

describe('BreateComponent', () => {
  let component: BreateComponent;
  let fixture: ComponentFixture<BreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
