import { Injectable } from '@angular/core';
import { RequestLine } from './requestline.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  url: string = "http://localhost:2222/api/requestlines";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<RequestLine[]>{
    return this.http.get(`${this.url}`) as Observable<RequestLine[]>;
  }
  get(id: number): Observable<RequestLine>{
    return this.http.get(`${this.url}/${id}`) as Observable<RequestLine>;
  }
  create(reql: RequestLine): Observable<RequestLine> {
    return this.http.post(`${this.url}`, reql) as Observable<RequestLine>;
  }
  change(reql: RequestLine): Observable<any>{
    return this.http.put(`${this.url}/${reql.id}`, reql) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
