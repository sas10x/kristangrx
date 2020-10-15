import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/product/report.service';

@Component({
  selector: 'app-woo-reports',
  templateUrl: './woo-reports.component.html',
  styleUrls: ['./woo-reports.component.scss']
})
export class WooReportsComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getTopSellers();
  }

  getTopSellers() {
    this.reportService.getTopSellers({}).subscribe(
      res => console.log(res)
    )
  }
}
