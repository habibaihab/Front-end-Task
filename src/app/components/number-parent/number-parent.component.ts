import { DatePipe } from '@angular/common';
import { NumberHeaderComponent } from '../number-header/number-header.component';
import { Headerdata } from './../../models/header-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-number-parent',
  imports: [NumberHeaderComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss'
})
export class NumberParentComponent {
  headerData:Headerdata;
  constructor(){
    this.headerData={
      protocolName:'فودافون مصر',
      country:'المملكة الأردنية الهاشمية',
      currentClient:'الشركة الألمانية للإبادة',
      extensionCount:9,
      lastShipmentDate:new Date('2024-12-29'),
      currentCredits:5000,
      clientUsedCredits:5000,
      totalUsedCredits:5000,

    }
  }

}
