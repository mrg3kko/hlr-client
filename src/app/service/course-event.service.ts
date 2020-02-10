import { Injectable } from '@angular/core';
import { CourseEvent } from '../domain/CourseEvent';
import { MockDataService } from '../mock/MockDataService';

@Injectable({
  providedIn: 'root'
})
export class CourseEventService {

  constructor(public mockDataService: MockDataService) { }

  public getCourseEvents(id:number):Array<CourseEvent> {
    return this.mockDataService.getCourseEvents(id);
  }


}
