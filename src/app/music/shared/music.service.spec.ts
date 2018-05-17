import { TestBed, inject } from '@angular/core/testing';

import { MusiceService } from './musice.service';

describe('MusiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusiceService]
    });
  });

  it('should be created', inject([MusiceService], (service: MusiceService) => {
    expect(service).toBeTruthy();
  }));
});
