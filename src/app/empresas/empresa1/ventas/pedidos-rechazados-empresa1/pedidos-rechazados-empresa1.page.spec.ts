import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidosRechazadosEmpresa1Page } from './pedidos-rechazados-empresa1.page';

describe('PedidosRechazadosEmpresa1Page', () => {
  let component: PedidosRechazadosEmpresa1Page;
  let fixture: ComponentFixture<PedidosRechazadosEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosRechazadosEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosRechazadosEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
