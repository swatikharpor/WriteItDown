import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../app-components/app-main/dashboard/dashboard.component';
import { PageLayoutComponent } from '../app-components/app-main/page-layout/page-layout.component';
import { WidgetsComponent } from '../app-components/app-main/dashboard/widgets/widgets.component';
import { NewNoteComponent } from '../app-components/app-main/new-note/new-note.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent,
    PageLayoutComponent,
    WidgetsComponent,
    NewNoteComponent],
    exports: [DashboardComponent,
    PageLayoutComponent,
    WidgetsComponent,
    NewNoteComponent]
})
export class MainModule { }
