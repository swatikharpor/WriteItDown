import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
@Input() widget;
  constructor() { }

  ngOnInit() {
  }

}
