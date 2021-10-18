import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor( private http: HttpClient) { }

  getUsers(): Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/users/"

    return this.http.get<any>(url);
  }
}
