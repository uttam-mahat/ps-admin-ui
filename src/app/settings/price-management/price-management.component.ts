import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;

@Component({
  selector: 'app-price-management',
  templateUrl: './price-management.component.html',
  styleUrls: ['./price-management.component.scss']
})
export class PriceManagementComponent implements OnInit {

  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;

  constructor() { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();

    /*
      this.companyService.getCompanies()
       .subscribe((company: Company[]) => {
          this.companies = company;

          // You'll have to wait that changeDetection occurs and projects data into
          // the HTML template, you can ask Angular to that for you ;-)
          this.chRef.detectChanges();

          // Now you can use jQuery DataTables :
          const table: any = $('datatables');
          this.dataTable = table.DataTable();
       });
    */
  }

}
