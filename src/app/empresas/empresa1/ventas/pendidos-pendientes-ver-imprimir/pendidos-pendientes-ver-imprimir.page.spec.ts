import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendidosPendientesVerImprimirPage } from './pendidos-pendientes-ver-imprimir.page';

describe('PendidosPendientesVerImprimirPage', () => {
  let component: PendidosPendientesVerImprimirPage;
  let fixture: ComponentFixture<PendidosPendientesVerImprimirPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PendidosPendientesVerImprimirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendidosPendientesVerImprimirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
