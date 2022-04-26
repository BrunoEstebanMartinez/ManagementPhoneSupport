import {APICore} from '../API';
import { CoreMethodsBy } from '../CoreMethodsBy';
import { Injectable } from '@angular/core';
import { studentsData } from './studentsData';

@Injectable({
   providedIn: 'root'
})

export class studentService implements CoreMethodsBy{

   concept: any;

    constructor(private api: APICore){}
     
   retrive() {
      this.api.getData('/ViewStudents').subscribe((StudentsData: studentsData) => this.concept = {
         LastName: StudentsData.LastName,
         mLastName: StudentsData.mLastName, 
         Names:  StudentsData.Names,
         OldSchool: StudentsData.OldSchool,
         ActualSchool:  StudentsData.ActualSchool,
         NoEnrollSubjectYearActual:  StudentsData. NoEnrollSubjectYearActual, 
         NoEnrollSubjectLastYear:  StudentsData.NoEnrollSubjectLastYear,
      });
   }
   
   save(NewStudent: any) {
   }
     
}