import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiUserService {

  constructor(private http: HttpClient) { }

  store(data: any): Observable<any> {
    // It should be a post request, but CORS is a so blocking policy =(
    return this.http.get('@api/users', data)
  }
}
