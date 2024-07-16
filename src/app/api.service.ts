import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "http://localhost:8000/"
  // baseURL = "https://rps-delta-nine.vercel.app/"

  constructor(private http:HttpClient) { }

  contactForm(body:any):Observable<any> {
    const url = this.baseURL+'messages';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'  
    });

    return this.http.post(url, body, {headers});
  }

  getImage(): Observable<any> {
    const url = this.baseURL+'image';
    return this.http.get(url, { responseType: 'blob' });
  }
}
