import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroDeEntregaEmpresa1Page } from './registro-de-entrega-empresa1.page';

describe('RegistroDeEntregaEmpresa1Page', () => {
  let component: RegistroDeEntregaEmpresa1Page;
  let fixture: ComponentFixture<RegistroDeEntregaEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeEntregaEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDeEntregaEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
