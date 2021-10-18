import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor( private http: HttpClient) { }

  getAlbums(): Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos"

    return this.http.get<any>(url);
  }
}
