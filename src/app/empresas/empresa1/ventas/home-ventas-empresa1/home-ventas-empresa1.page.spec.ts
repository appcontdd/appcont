import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeVentasEmpresa1Page } from './home-ventas-empresa1.page';

describe('HomeVentasEmpresa1Page', () => {
  let component: HomeVentasEmpresa1Page;
  let fixture: ComponentFixture<HomeVentasEmpresa1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVentasEmpresa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeVentasEmpresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
