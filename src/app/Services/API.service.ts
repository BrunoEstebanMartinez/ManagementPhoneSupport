import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'    
})

export class APICore{

    URLBaseInitial: string =  'http://apirestinlaravel/api/';
    service: boolean = false; 
    URLComplement: string = ''; 
    

        constructor(private http: HttpClient){
        this.URLComplement; 
        }
    
        protected getData(): any{
        return this.http.get(this.URLBaseInitial + this.URLComplement);
        }

    
        create(data): any{
        return this.http.post(this.URLBaseInitial + this.URLComplement, data);
        }

        showMeBy(byname): any {
            return this.http.get(this.URLBaseInitial + this.URLComplement + byname);
        }

        update(byname, data): any{
            return this.http.put(this.URLBaseInitial + byname, data);
        }
    
        destroyAll(): any{
            return this.http.delete(this.URLBaseInitial);
        }
    
        destroyBy(byname): any{
            return this.http.delete(this.URLBaseInitial + byname);
        }
    
        showMeByName(byName): any{
            return this.http.get(this.URLBaseInitial + byName);
        }
}
