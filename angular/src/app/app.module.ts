import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DxButtonGroupModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxButtonGroupModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }