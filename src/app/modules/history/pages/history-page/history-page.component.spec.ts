import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageComponent } from './history-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ HistoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
