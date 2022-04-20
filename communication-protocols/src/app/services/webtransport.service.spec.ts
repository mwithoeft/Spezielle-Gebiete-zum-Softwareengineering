import { TestBed } from '@angular/core/testing';

import { WebtransportService } from './webtransport.service';

describe('WebtransportService', () => {
  let service: WebtransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebtransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
