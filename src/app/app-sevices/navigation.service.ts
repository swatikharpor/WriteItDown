import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  selectedLeftNav = new Subject<string>();
  showLeftNav = new Subject<boolean>();
  selectedSubMenu = new Subject<string>();
  constructor() { }

}
