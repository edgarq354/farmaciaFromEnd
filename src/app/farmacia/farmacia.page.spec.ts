import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaPage } from './farmacia.page';

describe('FarmaciaPage', () => {
  let component: FarmaciaPage;
  let fixture: ComponentFixture<FarmaciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
