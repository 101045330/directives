import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { NetterHighlightDirective } from './netter-highlight/netter-highlight.directive';
import { NumberOnlyDirective } from './number-only.directive';


@NgModule({
  declarations: [
    AppComponent,
    NetterHighlightDirective,
    NumberOnlyDirective,
    //BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
