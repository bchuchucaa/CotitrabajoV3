import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObraPage } from './obra.page';

describe('ObraPage', () => {
  let component: ObraPage;
  let fixture: ComponentFixture<ObraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
