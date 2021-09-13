import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregasPendientesEmpresa1Page } from './entregas-pendientes-empresa1.page';

describe('EntregasPendientesEmpresa1Page', () => {
  let component: EntregasPendientesEmpresa1Page;
  let fixture: ComponentFixture<EntregasPendientesEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregasPendientesEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregasPendientesEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
