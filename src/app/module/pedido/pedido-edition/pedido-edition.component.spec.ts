import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEditionComponent } from './pedido-edition.component';

describe('PedidoEditionComponent', () => {
  let component: PedidoEditionComponent;
  let fixture: ComponentFixture<PedidoEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
