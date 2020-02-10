import { Injectable } from '@angular/core';
import { Course } from '../domain/Course';
import { CourseEvent } from '../domain/CourseEvent';
import { CourseCatalogueEntry } from '../domain/CourseCatalogueEntry';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
    courses: Array<Course>;
    courseEvents: Array<CourseEvent>;
    catalogueEntries: Array<CourseCatalogueEntry>;

    constructor() {
        
        this.courses = new Array<Course>();

        this.courses.push(
          new Course(
            1,
            "Instruktörsutbildning i Vuxen-HLR med hjärtstartare",
            "Sahlgrenska",
            "<h3>Målgrupp</h3><p>För dig som skall utbilda dina arbetskamrater i Vuxen-HLR med hjärtstartare</p><h3>Förkunskaper</h3><p>Läst in instruktörsboken i Vuxen-HLR med hjärtstartare</p><h3>Lärandemål</h3><p>Som blivande instruktör skall du kunna:</p><ul><li>planera och genomföra grundutbildning</li><li>bedöma kursdeltagarnas teknik med hjärtstartare</li><li>bedöma deltagarnas teknik vid luftvägsstopp</li><li>använda aktivt lärande</li><li>motivera betydelsen av mycket träning under utbildningen</li><li>förstå vikten av att följa det standardiserade utbildningsprogrammet</li><li>värna om kvalitet på utförd HLR samt utbildning</li><li>förstå vikten av repetitionsutbildning och hur den kan organiseras</li><li>reflektera över sitt eget lärande</li></ul>"
          )
        );
        this.courses.push(
          new Course(
            2,
            "Repetitionsutbildning Instruktör S-HLR Vuxen",
            "Sahlgrenska",
            "<h3>Målgrupp</h3><p>För dig som skall utbilda dina arbetskamrater i Vuxen-HLR med hjärtstartare</p><h3>Förkunskaper</h3><p>Läst in instruktörsboken i Vuxen-HLR med hjärtstartare</p><h3>Lärandemål</h3><p>Som blivande instruktör skall du kunna:</p><ul><li>planera och genomföra grundutbildning</li><li>bedöma kursdeltagarnas teknik med hjärtstartare</li><li>bedöma deltagarnas teknik vid luftvägsstopp</li><li>använda aktivt lärande</li><li>motivera betydelsen av mycket träning under utbildningen</li><li>förstå vikten av att följa det standardiserade utbildningsprogrammet</li><li>värna om kvalitet på utförd HLR samt utbildning</li><li>förstå vikten av repetitionsutbildning och hur den kan organiseras</li><li>reflektera över sitt eget lärande</li></ul>"
          )
        );
        this.courses.push(
          new Course(
            3,
            "A-HLR vuxen kurs för läkare",
            "Sahlgrenska",
            "Lorem"
          )
        );
        this.courses.push(
          new Course(
            4,
            "S/A-HLR för Läkarstudenter T6",
            "Sahlgrenska",
            "Lorem"
          )
        );
        this.courses.push(
          new Course(
            5,
            "Vuxen-HLR",
            "Sahlgrenska",
            "Lorem"
          )
        );
        this.courses.push(
          new Course(
            6,
            "Vuxen-HLR för läkare i larmteam",
            "Sahlgrenska",
            "Lorem"
          )
        );
        this.courses.push(
          new Course(
            7,
            "A-HLR Barn - grundutbildning, DSBUS",
            "DSBUS",
            "Lorem"
          )
        );
        this.courses.push(
          new Course(
            8,
            "Grundutbildning i A-HLR barn",
            "Sahlgrenska",
            "Lorem"
          )
        );

        this.catalogueEntries = new Array<CourseCatalogueEntry>();
        
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[0], 4));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[1], 5));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[2], 3));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[3], 2));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[4], 5));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[5], 2));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[6], 5));
        this.catalogueEntries.push(new CourseCatalogueEntry(this.courses[7], 3));

        this.courseEvents = new Array<CourseEvent>();
        
        this.courseEvents.push(
          new CourseEvent(
            0,
            '2020-03-01',
            '08.00',
            '17.00',
            'HLR-Centrum',
            4,
            14
          )
        );

        this.courseEvents.push(
          new CourseEvent(
            1,
            '2020-04-01',
            '08.00',
            '17.00',
            'HLR-Centrum',
            14,
            4
          )
        );

        this.courseEvents.push(
          new CourseEvent(
            1,
            '2020-05-01',
            '08.00',
            '17.00',
            'HLR-Centrum',
            0,
            12
          )
        );

    }

    public getCourseCatalogueEntries():Array<CourseCatalogueEntry> {
      return this.catalogueEntries;
    }

    public getCourse(id:number):Course {
      return this.courses[id];
    }

    public getCourseEvents(id:number):Array<CourseEvent> {
      return this.courseEvents;
    }


}
