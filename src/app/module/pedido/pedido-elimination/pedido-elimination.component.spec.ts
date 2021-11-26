import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEliminationComponent } from './pedido-elimination.component';

describe('PedidoEliminationComponent', () => {
  let component: PedidoEliminationComponent;
  let fixture: ComponentFixture<PedidoEliminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoEliminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEliminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
