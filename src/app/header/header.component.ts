import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'Online Application';
  constructor(private router: Router) {}
  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}
