import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainModule } from './app-modules/main.module';
import { FooterModule } from './app-modules/footer.module';
import { HeaderModule } from './app-modules/header.module';
import { LeftNavComponent } from './app-components/app-main/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent 
    
  ],
  imports: [
    BrowserModule,
    MainModule,
    FooterModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
