import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakephotoComponent } from './takephoto.component';

describe('TakephotoComponent', () => {
  let component: TakephotoComponent;
  let fixture: ComponentFixture<TakephotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakephotoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
