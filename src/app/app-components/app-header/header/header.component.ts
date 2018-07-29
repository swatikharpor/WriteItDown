import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../app-sevices/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }
  onHamburgerClick() {

    let ele = document.getElementsByClassName("hamburger");
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].classList.contains("open")) {
        ele[i].classList.remove("open");
        this.navigation.showLeftNav.next(false);
      }
      else {
        ele[i].classList.add("open");
        this.navigation.showLeftNav.next(true);
      }
    }
  }
}
