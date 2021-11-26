import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEliminationComponent } from './product-elimination.component';

describe('ProductEliminationComponent', () => {
  let component: ProductEliminationComponent;
  let fixture: ComponentFixture<ProductEliminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEliminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEliminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
