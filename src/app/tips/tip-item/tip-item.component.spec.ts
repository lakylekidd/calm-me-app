/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipItemComponent } from './tip-item.component';

describe('TipItemComponent', () => {
  let component: TipItemComponent;
  let fixture: ComponentFixture<TipItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
