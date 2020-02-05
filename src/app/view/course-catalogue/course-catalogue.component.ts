import { Component, OnInit } from '@angular/core';
import { CourseCatalogueService } from '../../service/course-catalogue.service';
import { CourseCatalogueEntry } from 'src/app/domain/CourseCatalogueEntry';

@Component({
  selector: 'app-course-catalogue',
  templateUrl: './course-catalogue.component.html',
  styleUrls: ['./course-catalogue.component.scss']
})
export class CourseCatalogueComponent implements OnInit {

  entries: Array<CourseCatalogueEntry>

  constructor(public courseCatalogueService:CourseCatalogueService) { }

  ngOnInit() {

    this.entries = this.courseCatalogueService.getCourseCatalogueEntries();

  }

}
