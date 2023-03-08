import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsageService } from 'src/app/services/usage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  userList: any = [];
  constructor(
    public authService: AuthService,
    public adminService: AdminService,
    public usageService: UsageService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getUserList()
      .subscribe((data: any) => (this.userList = data.users));
  }

  onGetHistoryUsage(event: any) {
    const target = event.target.parentElement as HTMLButtonElement;
    const userId = target.id;

    this.usageService.getHistoryUsage(userId).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        window.alert(
          'Something went wrong while retriving user history of usage'
        );
        console.log(err);
      }
    });
  }

  onUpdateUserAuthorization(event: any, isAdmin: boolean) {
    const target = event.target.parentElement as HTMLButtonElement;
    const userId = target.id;

    this.adminService.updateUserAuthorization(userId, isAdmin).subscribe({
      complete: () => {
        window.alert('User authorization state updated.');
      },
      error: (err) => {
        window.alert(
          'Something went wrong while modifying user authorization.'
        );
        console.log(err);
      }
    });
  }

  onDeleteUser(event: Event) {
    const target = event.target as HTMLInputElement;
    const li = target.parentElement as HTMLLIElement;
    const userId = li.id;

    this.adminService.deleteUser(userId).subscribe({
      complete: () => window.alert('User deleted.'),
      error: (err) => {
        window.alert('Something went wrong while deleting user.');
        console.log(err);
      }
    });
  }
}
