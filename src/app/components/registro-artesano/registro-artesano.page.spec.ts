import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroArtesanoPage } from './registro-artesano.page';

describe('RegistroArtesanoPage', () => {
  let component: RegistroArtesanoPage;
  let fixture: ComponentFixture<RegistroArtesanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroArtesanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroArtesanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
