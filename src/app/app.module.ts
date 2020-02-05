import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { CourseCatalogueComponent } from './view/course-catalogue/course-catalogue.component';
import { CourseComponent } from './view/course/course.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { ContentComponent } from './elements/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseCatalogueComponent,
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
