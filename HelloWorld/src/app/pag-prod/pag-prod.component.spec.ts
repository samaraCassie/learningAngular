import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagProdComponent } from './pag-prod.component';

describe('PagProdComponent', () => {
  let component: PagProdComponent;
  let fixture: ComponentFixture<PagProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
