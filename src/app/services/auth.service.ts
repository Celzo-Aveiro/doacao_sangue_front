import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://doacaosangueapi-production.up.railway.app/api/login'; 

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
  const body = { username, password };
  return this.http.post<any>(this.loginUrl, body, { headers: { 'Content-Type': 'application/json' } });
}


}
