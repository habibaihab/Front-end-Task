import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  imports: [DatePipe, DecimalPipe, CommonModule,TranslateModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input() tableData: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10; 
  totalItems: number = 55; 
  currentLang: string = 'ar';
  constructor( private translate:TranslateService){

  }
  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'ar';

    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get paginatedData() {
    if (!this.tableData) return [];
    const start = (this.currentPage - 1) * this.pageSize;
    return this.tableData.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

 changePageSize(event: Event) {
  const select = event.target as HTMLSelectElement;
  const size = Number(select.value);
  this.pageSize = size;
  this.currentPage = 1;
}


}
