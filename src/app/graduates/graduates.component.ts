import { Component, OnInit } from '@angular/core';
import { studentService } from '../Services/StudentCoreAPI/students.service'; 
import { studentCriteria } from '../Services/StudentCoreAPI/studentInt.service';
@Component({
  selector: 'app-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['../app.component.scss']
})
export class GraduatesComponent implements OnInit, studentCriteria {

    LastName: any = '';
    mLastName: any = '';
    Names: any = '';
    OldSchool: any = '';
    ActualSchool: any = '';
    NoEnrollSubjectYearActual: any = ''; 
    NoEnrollSubjectLastYear:  any = '';

    titleGraduets: string = "Alumnos";
    statusGraduets: string = "Status";

  
  constructor(private graduets: studentService) { }

  ngOnInit(): void {
    this.myGetGraduets();
  }

  myGetGraduets(){
      this.graduets.retrive();
  }
}
