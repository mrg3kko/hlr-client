import { Injectable } from '@angular/core';
import { Course } from '../domain/Course';
import { MockDataService } from '../mock/MockDataService';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public mockDataService: MockDataService) { }

  public getCourse(id:number):Course {
    return this.mockDataService.getCourse(id);
  }

}
