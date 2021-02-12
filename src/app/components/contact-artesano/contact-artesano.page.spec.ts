import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactArtesanoPage } from './contact-artesano.page';

describe('ContactArtesanoPage', () => {
  let component: ContactArtesanoPage;
  let fixture: ComponentFixture<ContactArtesanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactArtesanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactArtesanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
