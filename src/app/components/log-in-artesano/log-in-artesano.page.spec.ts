import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogInArtesanoPage } from './log-in-artesano.page';

describe('LogInArtesanoPage', () => {
  let component: LogInArtesanoPage;
  let fixture: ComponentFixture<LogInArtesanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInArtesanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogInArtesanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
