import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarNumeroPage } from './verificar-numero.page';

describe('VerificarNumeroPage', () => {
  let component: VerificarNumeroPage;
  let fixture: ComponentFixture<VerificarNumeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarNumeroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarNumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
