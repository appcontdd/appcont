import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmacionNuevoProveedorPage } from './confirmacion-nuevo-proveedor.page';

describe('ConfirmacionNuevoProveedorPage', () => {
  let component: ConfirmacionNuevoProveedorPage;
  let fixture: ComponentFixture<ConfirmacionNuevoProveedorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionNuevoProveedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmacionNuevoProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
