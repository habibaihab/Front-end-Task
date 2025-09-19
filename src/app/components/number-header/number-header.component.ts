import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-number-header',
  imports: [DatePipe,DecimalPipe,CommonModule,TranslateModule],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.scss'
})
export class NumberHeaderComponent {
  @Input() data: any;
  @Input() dir: 'rtl' | 'ltr' = 'rtl';
  menuOpen = false;
constructor(translate:TranslateService){

  }
toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
}
