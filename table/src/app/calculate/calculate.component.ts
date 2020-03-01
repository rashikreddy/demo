import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor() { }

  index = [];
  @Input() public number:number;  

  ngOnInit(): void {
    for(var i=1; i<=10; i++){
      this.index.push(i);
    }
  }

}
