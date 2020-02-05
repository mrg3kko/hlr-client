import { Injectable } from '@angular/core';
import { CourseCatalogueEntry } from '../domain/CourseCatalogueEntry';
import { MockDataService } from '../mock/MockDataService';

@Injectable({
  providedIn: 'root'
})
export class CourseCatalogueService {

  constructor(public mockDataService: MockDataService) { }
  
  public getCourseCatalogueEntries():Array<CourseCatalogueEntry> {
    
    return this.mockDataService.getCourseCatalogueEntries();

  }


}
