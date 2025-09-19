import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponentComponent } from "./components/footer-component/footer-component.component";
import { NumberParentComponent } from './components/number-parent/number-parent.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, NumberParentComponent, FooterComponentComponent, TranslateModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {
  title = 'Number-dashboard';
    isModalOpen = false;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.updateDirection(this.translate.currentLang || 'ar');

    this.translate.onLangChange.subscribe(event => {
      this.updateDirection(event.lang);
    });
  }

  updateDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'ltr' : 'rtl';
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
