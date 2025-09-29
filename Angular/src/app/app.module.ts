import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonGroupModule } from 'devextreme-angular/ui/button-group';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DxButtonGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
