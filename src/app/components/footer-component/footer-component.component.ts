import { Component } from '@angular/core';
import { FooterData } from '../../models/footer-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer-component',
  imports: [DatePipe],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.scss'
})
export class FooterComponentComponent {
  footerData:FooterData;
  constructor(){
    this.footerData={
      creatorName:'عبدالرحيم إسماعيل ناصف',
      creationTimestamp: new Date('2024-12-01 4:30:00'),
    }
  }

}
