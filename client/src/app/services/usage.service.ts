import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsageService {
  token = this.authService.token;

  constructor(private http: HttpClient, private authService: AuthService) {}

  countAddTask() {
    const user = JSON.parse(localStorage.getItem('user')!);

    return this.http.get(`/api/${user.uid}/tasks`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  countTranslate() {}
}
