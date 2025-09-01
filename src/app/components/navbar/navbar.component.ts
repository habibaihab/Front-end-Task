import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], 
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    translate.use('ar');

  }

  onLangSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement | null;
    const lang = selectElement?.value; 
    if (lang) {
      this.translate.use(lang);
    }
  }
}
