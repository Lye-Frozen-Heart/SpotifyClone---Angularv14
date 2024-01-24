import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListBodyComponent } from './play-list-body.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayListBodyComponent,
      OrderListPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
