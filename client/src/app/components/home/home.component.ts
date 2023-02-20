import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAdmin = false;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.afAuth.currentUser.then((user) => {
      user?.getIdTokenResult().then((data) => {
        const isAdmin = data.claims['isAdmin'];
        this.isAdmin = isAdmin;
      });
    });
  }
}
