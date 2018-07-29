import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../app-sevices/navigation.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit, OnDestroy {
subMenuSubscription: Subscription;
selectedSubMenu:string;
  constructor(private navigation: NavigationService) { 
this.subMenuSubscription = this.navigation.selectedSubMenu.subscribe((res) => {
  if(res){
    this.selectedSubMenu = res;
  }
})
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subMenuSubscription.unsubscribe();
  }

}
