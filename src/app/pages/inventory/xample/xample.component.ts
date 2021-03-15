import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { ProjectService } from 'src/app/services/inventory/project.service';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-xample',
  templateUrl: './xample.component.html',
  styleUrls: ['./xample.component.scss']
})
export class XampleComponent implements OnInit {
  inputValue: string;
  zmpq: [] = [];
  zva: [] = [];
  mb: [] = []
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  projects: any[] = [];
  constructor(private projectService: ProjectService, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    // this.getAllProject();
  }
  getData() {
    this.inventoryService.getZmpq25b(this.inputValue).subscribe(
      res => {this.zmpq = res;console.log(res)})
    this.inventoryService.getZva05n(this.inputValue).subscribe(
      res => {this.zva = res;console.log(res)})
    this.inventoryService.getMb51(this.inputValue).subscribe(
      res => {this.mb = res;console.log(res)})
  }
  addConsole() {
    console.log('finally')
  }

  onChange(value): void {
    console.log(value);
  }
  getAllProject()
  {
    this.projectService.getAllProjectUnderClient().subscribe(res => {this.projects = res;console.log(res)})
   
  }
 
}
