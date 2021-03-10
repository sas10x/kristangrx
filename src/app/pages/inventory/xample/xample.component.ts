import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/inventory/project.service';

@Component({
  selector: 'app-xample',
  templateUrl: './xample.component.html',
  styleUrls: ['./xample.component.scss']
})
export class XampleComponent implements OnInit {

  projects: any[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject()
  {
    this.projectService.getAllProjectUnderClient().subscribe(res => {this.projects = res;console.log(res)})
   
  }
 
}
