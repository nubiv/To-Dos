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
    public adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getUserList()
      .subscribe((data: any) => (this.userList = data.users));
  }

  onUpdateUserAuthorization(event: any, isAdmin: boolean) {
    const target = event.target.parentElement as HTMLButtonElement;
    const userId = target.id;

    this.adminService.updateUserAuthorization(userId, isAdmin).subscribe(
      () => {
        window.alert('User authorization state updated.');
      },
      (err) => {
        window.alert(
          'Something went wrong while modifying user authorization.'
        );
        console.log(err);
      }
    );
  }

  onDeleteUser(event: Event) {
    const target = event.target as HTMLInputElement;
    const li = target.parentElement as HTMLLIElement;
    const userId = li.id;

    this.adminService.deleteUser(userId).subscribe(
      () => window.alert('User deleted.'),
      (err) => {
        window.alert('Something went wrong while deleting user.');
        console.log(err);
      }
    );
  }
}
