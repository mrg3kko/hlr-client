export class CourseEvent {

    id: number;
    date:string;
    startTime:string;
    endTime:string;
    location:string;
    availableSeats:number;
    registrations:number;    

    constructor(id: number, date: string, startTime:string, endTime:string, location:string, availableSeats:number, registrations:number) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.availableSeats = availableSeats;
        this.registrations = registrations;
    }


}