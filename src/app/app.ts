import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav'; // Adjust path if 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
