import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-header',
  imports: [DatePipe,DecimalPipe,CommonModule],
  templateUrl: './number-header.component.html',
  styleUrl: './number-header.component.scss'
})
export class NumberHeaderComponent {
  @Input() data: any;
  @Input() dir: 'rtl' | 'ltr' = 'rtl';
  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
}
