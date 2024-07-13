// Example auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '/api/auth'; // Adjust as per your backend routes
  
  constructor(private http: HttpClient) {}
  
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
  
  // Add more methods for other API endpoints
}
