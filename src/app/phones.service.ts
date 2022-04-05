import { Injectable } from '@angular/core';
import {API} from '../APIs ';

export interface PhoneCriteria{
  id: number, 
  nameInter: string, 
  model: string,
  enter: string,
  owner: string, 
}

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  constructor(API: APICore) { 

  }
}
