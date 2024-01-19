import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private http:HttpClient) { }

  searchTracks$(term:string):Observable<any>{
    return this.http.get(`${URL}/tracks?src=${term}`).pipe(
      map( (dataRaw:any) => dataRaw.data)
    );
  }

}
