import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishPage } from './wish.page';

describe('WishPage', () => {
  let component: WishPage;
  let fixture: ComponentFixture<WishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
