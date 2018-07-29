import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
widgets:{};
  constructor() { }

  ngOnInit() {
    this.widgets=[{
      nodeType:'Text',
      count:'28',
      bgColor:'#0375d8'
    },
    {
      nodeType:'Article',
      count:'13',
      bgColor:'#5db75d'
    },
    {
      nodeType:'Picture',
      count:'12',
      bgColor:'#efad4d'

    },
    {
      nodeType:'Dpcument',
      count:'10',
      bgColor:'#d9544f'
    }];
  }

}
