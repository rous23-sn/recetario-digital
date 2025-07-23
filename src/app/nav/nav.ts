import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, AsyncPipe],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class NavComponent {
  user$: typeof this.authService.user$;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  logout() {
    this.authService.logout().subscribe();
  }
}

