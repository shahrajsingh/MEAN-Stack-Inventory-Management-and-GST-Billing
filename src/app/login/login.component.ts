import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading: Boolean;
  temp = 'changepass';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 2000);
    if (this.authService.getIsAuth()) {
      this.router.navigate(['/app']);
    }
  }
  login(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    } else {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (form.value.email.match(mailformat)) {
        this.authService.login(form.value.email, form.value.password);
      } else {
        alert('invalid mail');
        form.reset();
        return;
      }
    }
  }
}
