import { TestBed } from '@angular/core/testing';

import { CourseCatalogueService } from './course-catalogue.service';

describe('CourseCatalogueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseCatalogueService = TestBed.get(CourseCatalogueService);
    expect(service).toBeTruthy();
  });
});
