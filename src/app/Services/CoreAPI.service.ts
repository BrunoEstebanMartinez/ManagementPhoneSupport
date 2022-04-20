import { CoreMethodsBy } from "./CoreMethodsBy.service";

export interface coreAPI{
   
   
     // API methods
    getData(URL: any, URLAuxiliar: any): void;
    create(URL: any, URLAuxiliar: any, data: any): void;
    showMeBy(URL: any, URLAuxiliar: any, byName: any): void;
    update(URL: any, byname: any, data: []): void;
    destroyAll(URL: any): void;
    destroyBy(URL: any, byname: any):void;
    showMeByName(URL: any, byname: any): void;
    

}