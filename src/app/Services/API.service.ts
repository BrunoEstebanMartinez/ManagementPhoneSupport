import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'    
})

export class APICore{
    URL: string =  'APIRestInLaravel';
    constructor(http: HttpClient){
        this.getURLAPI();
    }
    getURLAPI(){

    }

}
