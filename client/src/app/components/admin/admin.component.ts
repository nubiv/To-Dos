import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  userList: any = [];
  constructor(
    public authService: AuthService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getUserList()
      .subscribe((data: any) => (this.userList = data.users));
  }

  onUpdateUserAuthorization(event: Event, isAdmin: boolean) {
    const target = event.target as HTMLInputElement;
    const li = target.parentElement as HTMLLIElement;
    const userId = li.id;

    this.adminService
      .updateUserAuthorization(userId, isAdmin)
      .subscribe(() => 'updated');
  }

  onDeleteUser(event: Event) {
    const target = event.target as HTMLInputElement;
    const li = target.parentElement as HTMLLIElement;
    const userId = li.id;

    this.adminService
      .deleteUser(userId)
      .subscribe(() => console.log('deleted.'));
  }
}
