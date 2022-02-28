import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  api_key = 'http://localhost:3000/'
  constructor( private http: HttpClient) { }


  userList(){
    return this.http.get(this.api_key + 'getUser', this.httpOptions)
  }
}
