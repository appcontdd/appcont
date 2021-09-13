import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosPendientesEmpresa1Page } from './pedidos-pendientes-empresa1.page';

describe('PedidosPendientesEmpresa1Page', () => {
  let component: PedidosPendientesEmpresa1Page;
  let fixture: ComponentFixture<PedidosPendientesEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosPendientesEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosPendientesEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
