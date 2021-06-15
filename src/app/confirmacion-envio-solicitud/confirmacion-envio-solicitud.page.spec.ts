import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmacionEnvioSolicitudPage } from './confirmacion-envio-solicitud.page';

describe('ConfirmacionEnvioSolicitudPage', () => {
  let component: ConfirmacionEnvioSolicitudPage;
  let fixture: ComponentFixture<ConfirmacionEnvioSolicitudPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionEnvioSolicitudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmacionEnvioSolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
