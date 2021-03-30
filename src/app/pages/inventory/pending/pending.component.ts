import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  data: any[];
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getPending();
  }
  getPending() {
    this.inventoryService.getPendingZva05n().subscribe(
      res => {
        console.log(res);
        this.data = res}
    )
  }

}
