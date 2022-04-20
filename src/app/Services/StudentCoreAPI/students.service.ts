import {APICore} from '../../Services/API.service';
import { CoreMethodsBy } from '../CoreMethodsBy.service';
import { Inject } from '@angular/core';
import {studentCriteria} from './studentInt.service';
import { threadId } from 'worker_threads';


export class studentService implements CoreMethodsBy{

    
    constructor(private api: APICore, private NewStudent: studentCriteria[]){
   }
     
   retrive() {
      this.api.getData('/students');
   }
   save() {
        this.api.create('/students/', this.NewStudent).subscribe();
   }
   
}