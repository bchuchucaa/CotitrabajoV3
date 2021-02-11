import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearObraPage } from './crear-obra.page';

describe('CrearObraPage', () => {
  let component: CrearObraPage;
  let fixture: ComponentFixture<CrearObraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearObraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearObraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
