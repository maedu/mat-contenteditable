import { TestBed } from '@angular/core/testing';

import { MatContenteditableService } from './mat-contenteditable.service';

describe('MatContenteditableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatContenteditableService = TestBed.get(MatContenteditableService);
    expect(service).toBeTruthy();
  });
});
