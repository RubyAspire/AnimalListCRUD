import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "http://localhost:5000/api";
  constructor(private http:HttpClient) { }

  getAnimals():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/animal");
  }

  getDetails(val:any){
    return this.http.get<any>(this.APIurl+"/animal/"+val);
  }

  addAnimal(val:any){
    return this.http.post<any>(this.APIurl+"/animal",val);
  }

  updateAnimal(val:any){
    return this.http.put<any>(this.APIurl+"/animal",val);
  }

  deleteAnimal(val:any){
    return this.http.delete<any>(this.APIurl+"/animal/"+val);
  }
}
