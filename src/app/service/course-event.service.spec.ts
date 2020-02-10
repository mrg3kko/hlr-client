import { TestBed } from '@angular/core/testing';

import { CourseEventService } from './course-event.service';

describe('CourseEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseEventService = TestBed.get(CourseEventService);
    expect(service).toBeTruthy();
  });
});
