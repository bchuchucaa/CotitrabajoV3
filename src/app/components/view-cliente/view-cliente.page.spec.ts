import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewClientePage } from './view-cliente.page';

describe('ViewClientePage', () => {
  let component: ViewClientePage;
  let fixture: ComponentFixture<ViewClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
