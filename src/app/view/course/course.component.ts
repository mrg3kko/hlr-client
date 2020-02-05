import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/Course';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: Course;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public courseService:CourseService
    ){
      
    }

  ngOnInit() {
    const params = this.route.snapshot.params;

    console.log('param.course: ' + params.course);

    this.course = this.courseService.getCourse(params.course);

  }

}
