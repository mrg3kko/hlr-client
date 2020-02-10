import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './view/course/course.component';
import { CourseCatalogueComponent } from './view/course-catalogue/course-catalogue.component';
import { HomeComponent } from './view/home/home.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {path: 'start', component: HomeComponent},
  {path: 'kurskatalog', component: CourseCatalogueComponent},
  {path: 'kurs/:course', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
