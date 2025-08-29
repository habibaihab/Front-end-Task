import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponentComponent } from "./components/footer-component/footer-component.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Number-dashboard';
}
