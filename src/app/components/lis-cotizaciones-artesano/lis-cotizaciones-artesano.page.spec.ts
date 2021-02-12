import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LisCotizacionesArtesanoPage } from './lis-cotizaciones-artesano.page';

describe('LisCotizacionesArtesanoPage', () => {
  let component: LisCotizacionesArtesanoPage;
  let fixture: ComponentFixture<LisCotizacionesArtesanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisCotizacionesArtesanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LisCotizacionesArtesanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
