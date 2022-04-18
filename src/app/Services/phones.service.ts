import {APICore} from '../Services/API.service';

export interface PhoneCriteria{
  id: number, 
  nameInter: string, 
  model: string,
  enter: string,
  owner: string, 
}

export class PhonesService {

  constructor(apiCore: APICore) { 
      }
}
