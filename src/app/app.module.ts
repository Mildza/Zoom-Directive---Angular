import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectiviesComponent } from './directivies/directivies.component';
import { ZoomDirective } from './shared/zoom.directive';

@NgModule({
  declarations: [AppComponent, DirectiviesComponent, ZoomDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
