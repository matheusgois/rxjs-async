import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface User {
  id: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly url = 'https://6164ac3c09a29d0017c88e2b.mockapi.io/api/v1/';

  users$ = this.getUsers();
  
  constructor(private http: HttpClient) { }
  

  getUsers(){
    return this.http.get<User[]>(`${this.url}/users`).pipe(
      delay(5000),
      tap(console.log)
    );
  }
}
