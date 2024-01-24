import { TestBed } from '@angular/core/testing';

import { SessionGuard } from './session.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('SessionGuard', () => {
  let guard: SessionGuard;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(SessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
