import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { appBasicHighlightDirective } from './Directives/BasicHighlight/basic-highlight.directive';
import { appBetterHighlightDirective } from './Directives/BetterHighlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    appBasicHighlightDirective,
    appBetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
