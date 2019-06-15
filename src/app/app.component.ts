import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  errors = [
    {text: 'There was a problem loading account remarks', code: 1234},
    {text: 'There was a problem loading account holds.', code: 12342}
  ]


  removeError(index: number) {
    this.errors = [...this.errors.slice(0, index), ...this.errors.slice(index + 1)];
  }
}
