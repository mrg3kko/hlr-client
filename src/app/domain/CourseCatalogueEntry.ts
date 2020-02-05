import { Course } from './Course';

export class CourseCatalogueEntry {

    course: Course;
    numCourseEventsWithSeats: number;

    constructor(course: Course, numCourseEventsWithSeats:number) {
        this.course = course;
        this.numCourseEventsWithSeats = numCourseEventsWithSeats;
    }

}