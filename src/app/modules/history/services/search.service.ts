import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private http:HttpClient) { }
  
  private returnQueriedTracks = (term:string):Observable<any> => {
    return this.http.get(`${this.URL}/tracks?src=${term}`).pipe(
      map( (dataRaw:any) => {
        let {data} = dataRaw;
        return data.filter( (element:any) => element?.name.includes(term) || element?.artist.name.includes(term) || element?.artist.nickname.includes(term) )
      }
      ));
  }
  searchTracks$(term:string):Observable<any>{
    return this.returnQueriedTracks(term);
  }

}
