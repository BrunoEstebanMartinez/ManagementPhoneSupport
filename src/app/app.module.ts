//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//MyProgress
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


//UI/UX
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigateComponent } from './navigate/navigate.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SchoolsComponent } from './schools/schools.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigateComponent,
    GraduatesComponent,
    SubjectsComponent,
    SchoolsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent]
})
export class AppModule { }
