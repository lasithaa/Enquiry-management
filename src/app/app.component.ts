import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enquiry-management';

  router = inject(Router);

  get isLoggedIn(): boolean {
    return localStorage.getItem('enquiryapp') != null;
  }

  get username(): string {
    return localStorage.getItem('enquiryapp') || 'User';
  }

  login() {
    this.router.navigateByUrl('login');
  }

  logout() {
    localStorage.removeItem('enquiryapp');
    this.router.navigateByUrl('login');
  }
}
