import { TestBed } from '@angular/core/testing';

import { UIAlertService } from './uialert.service';

describe('UIAlertService', () => {
  let service: UIAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
