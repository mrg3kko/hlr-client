import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/Course';
import { CourseEvent } from 'src/app/domain/CourseEvent';
import { CourseService } from '../../service/course.service'
import { CourseEventService } from '../../service/course-event.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: Course;
  courseEvents: Array<CourseEvent>;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public courseService:CourseService,
      public courseEventService:CourseEventService
    ){
      
    }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.course = this.courseService.getCourse(params.course);
    this.courseEvents = this.courseEventService.getCourseEvents(params.course);
  }

}
