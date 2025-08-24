import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

type LoginType = 'student' | 'teacher';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginType: LoginType = 'student';
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.loginType = queryParams['type'];
    });
    this.loginType = this.route.snapshot.queryParams['type'];
  }
  onLoginSuccess() {
    this.router.navigate(['/users']);
  }
}
