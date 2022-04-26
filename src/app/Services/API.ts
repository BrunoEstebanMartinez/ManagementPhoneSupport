import {HttpClient} from '@angular/common/http';
import {coreAPI} from './CoreAPI';


export abstract class APICore implements coreAPI{

        protected URLBaseInitial: string = 'http://apirestinlaravel.test/api/';
        
        
        constructor(private http: HttpClient){}

        getData(URLComplement: string){
            return this.http.get<any>(this.URLBaseInitial + URLComplement);
        }

        create(URLComplement: string, data: any){
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
