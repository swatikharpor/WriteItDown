import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../app-sevices/navigation.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit, OnDestroy {
selectedPage;
selectedPageSub: Subscription;
  constructor(private navigation : NavigationService) { 
    this.selectedPageSub = this.navigation.selectedLeftNav.subscribe((res) => {
      if(res) {
        this.selectedPage = res;
      } 
    });
  }

  ngOnInit() {
    this.selectedPage = 'Dashboard';
  
  }
  ngOnDestroy() {
    this.selectedPageSub.unsubscribe();
  }
}
