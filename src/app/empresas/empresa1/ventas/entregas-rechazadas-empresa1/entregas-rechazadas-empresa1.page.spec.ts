import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregasRechazadasEmpresa1Page } from './entregas-rechazadas-empresa1.page';

describe('EntregasRechazadasEmpresa1Page', () => {
  let component: EntregasRechazadasEmpresa1Page;
  let fixture: ComponentFixture<EntregasRechazadasEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregasRechazadasEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregasRechazadasEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
