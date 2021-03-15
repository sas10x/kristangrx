import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-zva05n',
  templateUrl: './upload-zva05n.component.html',
  styleUrls: ['./upload-zva05n.component.scss']
})
export class UploadZva05nComponent implements OnInit {

  data: any[];
  loading: boolean = false;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  onFileChange(ev) {
    // const target = e.target.result;
    // const wb = XLSX.read(target,{type:'binary',cellText:false,cellDates:true});
    // const wsname = wb.SheetNames[0];
    // const ws = wb.Sheets[wsname];
    // const data = XLSX.utils.sheet_to_json(ws, {header:1,raw:false,dateNF:'yyyy-mm-dd'});
    let workBook = null;
    let jsonData = null;

    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet, {raw:false,dateNF:'yyyy-mm-dd'});
        // initial[name] = XLSX.utils.sheet_to_json(sheet);
        // console.log(initial[name]);
        this.data = (initial[name]);
        console.log(this.data)
        return initial;
      }, {});
    }
    reader.readAsBinaryString(file);
  }
  addM() {
    this.loading = true;
    from(this.data)
    .pipe(concatMap(res => this.inventoryService.addZva05n(res)))
    .subscribe(res => {
      console.log(res)
    },
      err => console.error('Observer got an error: ' + err),
      () => {console.log('Observer got a complete notification');this.loading = false;
    })
    // this.inventoryService.addMovement(this.data).subscribe(
    //   res => console.log(res)
    // )
  }

}
