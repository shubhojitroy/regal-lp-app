import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FixedtopComponent } from './aside/fixedtop.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';

@Component({
  selector: 'app-root',
  imports: [
    FixedtopComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    MainBodyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Regal Funds Management';
}
