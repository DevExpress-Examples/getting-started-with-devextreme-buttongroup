import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  fontStyles: { icon: string; style: string }[] = [{
    icon: 'bold',
    style: 'bold',
  }, {
    icon: 'italic',
    style: 'italic',
  }, {
    icon: 'underline',
    style: 'underline',
  }, {
    icon: 'strike',
    style: 'strike',
  }];

  selectedFontStyleNames: string[] = ['italic'];

  constructor() {
    this.logSelectionChanged = this.logSelectionChanged.bind(this);
  }

  logSelectionChanged(): void {
    const message = this.selectedFontStyleNames.length > 0
      ? `The following styles are selected: ${this.selectedFontStyleNames.join(', ')}`
      : 'There are no selected styles';
    console.log(message); // eslint-disable-line no-console
  }
}
