import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiUsersService {

  constructor(private http: HttpClient) { }

  lists(params: any = {}): Observable<any> {
    return this.http.get<any[]>('@api/users', { params })
  }

}
