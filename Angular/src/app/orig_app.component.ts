import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fontStyles: Array<{ icon: string, style: string }> = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    selectedFontStyleNames: string[] = [ "italic" ];

    constructor() {
        this.logSelectionChanged = this.logSelectionChanged.bind(this);
    }

    logSelectionChanged() {
        let message;
        if(this.selectedFontStyleNames.length > 0) {
            message = "The following styles are selected: " + this.selectedFontStyleNames.join(", ");
        } else {
            message = "There are no selected styles";
        }
        console.log(message);
    }
}