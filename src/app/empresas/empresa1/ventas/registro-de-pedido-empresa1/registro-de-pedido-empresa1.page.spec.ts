import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroDePedidoEmpresa1Page } from './registro-de-pedido-empresa1.page';

describe('RegistroDePedidoEmpresa1Page', () => {
  let component: RegistroDePedidoEmpresa1Page;
  let fixture: ComponentFixture<RegistroDePedidoEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDePedidoEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDePedidoEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
