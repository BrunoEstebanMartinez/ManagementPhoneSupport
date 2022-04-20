import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {coreAPI} from '../Services/CoreAPI.service';


import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'    
})

export abstract class APICore implements coreAPI{

        protected URLBaseInitial: string = 'http/apirestinlaravel/api/';
        constructor(private http: HttpClient){}

        getData(URLComplement: string): any{
            return this.http.get(this.URLBaseInitial + URLComplement);
        }

        create(URLComplement: string, data: any): Observable<any> {
        return this.http.post(this.URLBaseInitial + URLComplement, data);
        }

        showMeBy(URLComplement: string, byname: any): any{
            return this.http.get(this.URLBaseInitial + URLComplement + byname);
        }

        update(byname: string, data: any): any{
            return this.http.put(this.URLBaseInitial + byname, data);
        }
    
        destroyAll(): any{
            return this.http.delete(this.URLBaseInitial);
        }
    
        destroyBy(byname:string): any{
            return this.http.delete(this.URLBaseInitial + byname);
        }
    
        showMeByName(byName: string): any{
            return this.http.get(this.URLBaseInitial + byName);
        }
}
