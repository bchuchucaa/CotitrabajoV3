import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewArtesanoPage } from './view-artesano.page';

describe('ViewArtesanoPage', () => {
  let component: ViewArtesanoPage;
  let fixture: ComponentFixture<ViewArtesanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArtesanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewArtesanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
