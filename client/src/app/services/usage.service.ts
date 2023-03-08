import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsageService {
  token = this.authService.token;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getHistoryUsage(userId: string) {
    return this.http.get(`/api/admin/usages/${userId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  countAddTask() {
    const user = JSON.parse(localStorage.getItem('user')!);

    return this.http.patch(
      `/api/admin/usages/${user.uid}/add-task`,
      {},
      {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );
  }

  countTranslate() {
    const user = JSON.parse(localStorage.getItem('user')!);

    return this.http.patch(
      `/api/admin/usages/${user.uid}/translate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );
  }
}
