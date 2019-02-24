import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:52625/api/Users');
  
  }

  getUser(userId) {
    return this.http.get('http://localhost:52625/api/Users/GetUserByID/'+userId);
  }

  getPosts() {
    return this.http.get('http://localhost:52625/api/Posts');
  }
}
