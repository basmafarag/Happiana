import { TestBed, inject } from '@angular/core/testing';

import { OneTagService } from './one-tag.service';

describe('OneTagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneTagService]
    });
  });

  it('should be created', inject([OneTagService], (service: OneTagService) => {
    expect(service).toBeTruthy();
  }));
});
