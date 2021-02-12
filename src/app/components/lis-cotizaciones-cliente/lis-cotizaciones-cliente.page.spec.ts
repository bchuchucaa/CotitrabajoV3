import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LisCotizacionesClientePage } from './lis-cotizaciones-cliente.page';

describe('LisCotizacionesClientePage', () => {
  let component: LisCotizacionesClientePage;
  let fixture: ComponentFixture<LisCotizacionesClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisCotizacionesClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LisCotizacionesClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
