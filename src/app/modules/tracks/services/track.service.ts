import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, observable, of } from 'rxjs';
import { catchError, map, mergeMap,tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private httpClient:HttpClient) { 
    
  }
  private skipById(listTracks:TrackModel[],id:number):Promise<TrackModel[]>{
    return new Promise((resolve,reject) =>{
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp);
    })
  }
  /**
   * 
   * @returns {Array:TrackModel} Devolver todas las canciones
   */
  getAllTracks$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(map(({data}:any) =>{
      return data;
    }),
    catchError((error) =>{
      const {status, statusText} = error;
      console.log('Review me, status: ',[status,statusText]);
      return of([]);
    })
    )
  }
  /**
   * 
   * @returns Devolver canciones random
   */
  getAllRandom$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(mergeMap(({data}:any) =>this.skipById(data,2)),
      tap(data => console.log('🆗🆗🆗🆗🆗🆗',data)),
      catchError((error) => {
        const {status, statusText} = error;
        console.log('Review me, status: ',[status,statusText]);
        return of([]);
      })
    );

  }


}
