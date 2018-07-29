import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../app-sevices/navigation.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit, OnDestroy {


  showLeftNavSubscription: Subscription;
  showLeftNav = false;
  leftNavMenu: {};
  selectedLeftNav: string;
  selectedLeftNavSubscription: Subscription;


  constructor(private navigation: NavigationService) {
    this.showLeftNavSubscription = this.navigation.showLeftNav.subscribe((res) => {
      this.showLeftNav = res;

    });
    this.selectedLeftNavSubscription = this.navigation.selectedLeftNav.subscribe((res) => {
      if (res) {
        this.selectedLeftNav = res;
      }
    })

  }

  ngOnInit() {
    this.selectedLeftNav = 'Dashboard';
    this.leftNavMenu = [{
      menuName: 'Dashboard',
      subMenu: {}
    },
    {
      menuName: 'Notes',
      subMenu: [{
        name: 'Text',
      },
      {
        name: 'Article',
      },
      {
        name: 'Picture',
      },
      {
        name: 'Document',
      }
      ]
    }]
  }

  onItemClick(menu) {
    this.navigation.selectedLeftNav.next(menu)
  }

  onSubItemClick(subMenu) {
    this.navigation.selectedSubMenu.next(subMenu);
  }
  ngOnDestroy() {
    this.showLeftNavSubscription.unsubscribe();
    this.selectedLeftNavSubscription.unsubscribe();
  }
}
