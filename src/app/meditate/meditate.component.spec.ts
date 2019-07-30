/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeditateComponent } from './meditate.component';

describe('MeditateComponent', () => {
  let component: MeditateComponent;
  let fixture: ComponentFixture<MeditateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
