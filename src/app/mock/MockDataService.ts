import { Injectable } from '@angular/core';
import { Course } from '../domain/Course';
import { CourseCatalogueEntry } from '../domain/CourseCatalogueEntry';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

    
  
    courses: Array<Course>;
    catalogueEntries: Array<CourseCatalogueEntry>;

    constructor() {
        
        this.courses = new Array<Course>();

        this.courses.push(new Course(1, "Instruktörsutbildning i Vuxen-HLR med hjärtstartare", "Sahlgrenska"));
        this.courses.push(new Course(2, "Repetitionsutbildning Instruktör S-HLR Vuxen", "Sahlgrenska"));
        this.courses.push(new Course(3, "A-HLR vuxen kurs för läkare", "Sahlgrenska"));
        this.courses.push(new Course(4, "S/A-HLR för Läkarstudenter T6", "Sahlgrenska"));
        this.courses.push(new Course(5, "Vuxen-HLR", "Sahlgrenska"));
        this.courses.push(new Course(6, "Vuxen-HLR för läkare i larmteam", "Sahlgrenska"));
        this.courses.push(new Course(7, "A-HLR Barn - grundutbildning, DSBUS", "DSBUS"));
        this.courses.push(new Course(8, "FoGrundutbildning i A-HLR barno", "Sahlgrenska"));

        this.catalogueEntries = new Array<CourseCatalogueEntry>();
        
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[0], 4));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[1], 5));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[2], 3));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[3], 2));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[4], 5));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[5], 2));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[6], 5));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[7], 3));
    }

    public getCourseCatalogueEntries():Array<CourseCatalogueEntry> {
    
    return this.catalogueEntries;

  }

  public getCourse(id:number):Course {
    return this.courses[id];
  }


}
