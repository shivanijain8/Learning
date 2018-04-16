import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LearningComponent } from './learning/learning.component';
import { SessionComponent } from './session/session.component';
import { SectionsComponent } from './sections/sections.component';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { CustomStructuralDirective } from './directives/custom-structural-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    SessionComponent,
    SectionsComponent,
    CustomDirectiveDirective,
    CustomStructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
