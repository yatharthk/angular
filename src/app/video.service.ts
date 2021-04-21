import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {catchError} from  'rxjs/operators';
import { Video } from './video';

const endpoint="assets/json/videos.json";
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http:HttpClient) { }

  
  list(){
   return this.http.get(endpoint).pipe(
    map(response=>JSON.stringify(<[Video]>response)),
    catchError(err=>this.handleError));
  }

  get(slug){
    return this.http.get(endpoint).pipe(
     map(response=>(<[Video]>response).filter(item=>{
       if(slug==item.slug){
         return item;
       }
     })),
     catchError(err=>this.handleError));
   }


   search(query:string){
     let data=[];
    return this.http.get(endpoint).pipe(map(response=>{
      (<[Video]>response).filter(item=>{
        if((<string>item.name).toLowerCase().includes(query.toLowerCase())){
          data.push(item);
        }
      });
      console.log("service data is"+data);
      
      return data;
    }),
    catchError(err=>this.handleError));
   }

  private handleError(error:any,caught:any){
    console.log(error,caught);
  }
}
