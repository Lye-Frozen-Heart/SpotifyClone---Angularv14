import { TestBed } from '@angular/core/testing';

import { TrackService } from './track.service';

import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TrackService', () => {
  let service: TrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
