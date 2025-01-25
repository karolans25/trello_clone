import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { checkToken } from '../interceptors/check-token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getMeProfile() {
    return this.http.get<User>(`${this.apiUrl}/api/v1/me/profile`, {
      context: checkToken(),
    });
  }
}
