import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroDeVentaEmpresa1Page } from './registro-de-venta-empresa1.page';

describe('RegistroDeVentaEmpresa1Page', () => {
  let component: RegistroDeVentaEmpresa1Page;
  let fixture: ComponentFixture<RegistroDeVentaEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeVentaEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDeVentaEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
