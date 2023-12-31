import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request1 } from './request.class';
import { User } from '../user/user.class';
import { SystemService } from '../user/system.service';

@Injectable({
  providedIn: 'root'
})
export class Request1Service {

  // url: string = "http://localhost:2222/api/requests";
  get url() { return `${this.sys.config.baseurl}/api/requests`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Request1[]>{
    return this.http.get(`${this.url}`) as Observable<Request1[]>;
  }
  get(id: number): Observable<Request1>{
    return this.http.get(`${this.url}/${id}`) as Observable<Request1>;
  }
  getReviews(userId: number): Observable<Request1>{
    return this.http.get(`${this.url}/reviews/${userId}`) as Observable<Request1>;
  }
  create(req: Request1): Observable<Request1> {
    return this.http.post(`${this.url}`, req) as Observable<Request1>;
  }
  change(req: Request1): Observable<any>{
    return this.http.put(`${this.url}/${req.id}`, req) as Observable<any>;
  }
  review(req: Request1): Observable<any>{
    return this.http.put(`${this.url}/review/${req.id}`, req) as Observable<any>;
  }
  approve(req: Request1): Observable<any>{
    return this.http.put(`${this.url}/approve/${req.id}`, req) as Observable<any>;
  }
  reject(req: Request1): Observable<any>{
    return this.http.put(`${this.url}/reject/${req.id}`, req) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
