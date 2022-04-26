import { Component, OnInit } from '@angular/core';
import { studentService } from '../Services/StudentCoreAPI/students.service'; 


@Component({
  selector: 'app-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['../app.component.scss']
})
export class GraduatesComponent implements OnInit{

    graduetStudent: any; 
    
    graduet = {
      LastName:  '',
      mLastName:  '',
      Names:  '',
      OldSchool:  '',
      ActualSchool:  '',
      NoEnrollSubjectYearActual:  '', 
      NoEnrollSubjectLastYear:  '',
    }; 

    titleGraduets: string = "Alumnos";
    statusGraduets: string = "Status";

  constructor(private graduets: studentService) {}
  

  ngOnInit(): void {
    this.myGetGraduets();
  }

  myGetGraduets(){ 
      this.graduets.retrive();
  }
}
