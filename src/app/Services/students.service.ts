import {APICore} from '../Services/API.service';

export interface studentCriteria{
    id: number;
    LastName: string; 
    mLastName: String;
    Names: string;
    OldSchool: string;
    ActualSchool: string;
    NoEnrollSubjectYearActual: String; 
    NoEnrollSubjectLastYear: String;

}

export class studentService{
    StudentCriteria: studentCriteria[];
    URLComplementStudent: String = '/ViewStudents/';
    constructor(apiCore: APICore){}

    
}