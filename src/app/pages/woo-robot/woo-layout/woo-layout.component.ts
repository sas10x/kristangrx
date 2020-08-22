import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woo-layout',
  templateUrl: './woo-layout.component.html',
  styleUrls: ['./woo-layout.component.scss']
})
export class WooLayoutComponent implements OnInit {

  condition1: boolean = true;
  condition2: boolean;
  condition3: boolean;
  condition4: boolean;
  condition5: boolean;
  condition6: boolean;
  condition7: boolean;
  asideshow: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  asidehide() {
    if (this.asideshow == false)
    {
      this.asideshow = true;
      console.log(this.asideshow);
    }
    else {
      this.asideshow = false;
      console.log(this.asideshow);
    }
  }
  changeClass(i: number) {
    if (i === 1) {
      this.condition1 = true;
      this.condition2 = false;
      this.condition3 = false;
      this.condition4 = false;
      this.condition5 = false;
      this.condition6 = false;
      this.condition7 = false;
    }
    else if(i === 2){
      this.condition1 = false;
      this.condition2 = true;
      this.condition3 = false;
      this.condition4 = false;
      this.condition5 = false;
      this.condition6 = false;
      this.condition7 = false;
    }
    else if(i === 3){
      this.condition1 = false;
      this.condition2 = false;
      this.condition3 = true;
      this.condition4 = false;
      this.condition5 = false;
      this.condition6 = false;
      this.condition7 = false;
    }
    else if(i === 4){
      this.condition1 = false;
      this.condition2 = false;
      this.condition3 = false;
      this.condition4 = true;
      this.condition5 = false;
      this.condition6 = false;
      this.condition7 = false;
    }
    else if(i === 5){
      this.condition1 = false;
      this.condition2 = false;
      this.condition3 = false;
      this.condition4 = false;
      this.condition5 = true;
      this.condition6 = false;
      this.condition7 = false;
    }
    else if(i === 6){
      this.condition1 = false;
      this.condition2 = false;
      this.condition3 = false;
      this.condition4 = false;
      this.condition5 = false;
      this.condition6 = true;
      this.condition7 = false;
    }
    else if(i === 7){
      this.condition1 = false;
      this.condition2 = false;
      this.condition3 = false;
      this.condition4 = false;
      this.condition5 = false;
      this.condition6 = false;
      this.condition7 = true;
    }
  }
}
