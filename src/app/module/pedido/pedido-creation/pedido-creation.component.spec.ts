import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCreationComponent } from './pedido-creation.component';

describe('PedidoCreationComponent', () => {
  let component: PedidoCreationComponent;
  let fixture: ComponentFixture<PedidoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
