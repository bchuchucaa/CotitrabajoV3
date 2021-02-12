import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CotizacionPage } from './cotizacion.page';

describe('CotizacionPage', () => {
  let component: CotizacionPage;
  let fixture: ComponentFixture<CotizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CotizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
