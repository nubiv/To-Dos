import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  token = this.authService.token;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserList() {
    return this.http.get(`/api/admin/users`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  updateUserAuthorization(userId: string, isAdmin: boolean) {
    const data = { isAdmin: isAdmin };
    console.log(isAdmin);
    return this.http.patch(`/api/admin/users/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  deleteUser(userId: string) {
    console.log(userId);
    return this.http.delete(`/api/admin/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }
}
