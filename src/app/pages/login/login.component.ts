import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  };

  router = inject(Router);

  onLogin() {
    if (this.loginObj.userName === 'admin' && this.loginObj.password === '112233') {
      localStorage.setItem('enquiryapp', 'admin');
      this.router.navigateByUrl('enquiry-list');
    } else {
      alert('Wrong Credentials');
    }
  }

}
