import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeadBarComponent,
    FootBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
