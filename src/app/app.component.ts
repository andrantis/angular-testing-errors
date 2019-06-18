import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/operators';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    //   trigger('EnterLeave', [
    //     state('flyIn', style({ transform: 'translateX(0)' })),
    //     transition(':enter', [
    //       style({ transform: 'translateX(-100%)' }),
    //       animate('0.5s 300ms ease-in')
    //     ]),
    //     transition(':leave', [
    //       animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    //     ])
    //   ])


    // trigger('EnterLeave', [
    //   state('flyIn', style({ transform: 'translateY(0)' })),
    //   transition(':enter', [
    //     style({ transform: 'translateY(-100%)' }),
    //     animate('300ms ease-in')
    //   ]),
    //   transition(':leave', [
    //     animate('0.3s ease-out', style({ transform: 'translateY(100%)' }))
    //   ])
    // ])



    trigger('fadeInOut', [
      // state('*', style({
      //   // opacity: 0,
      //   // height: 0
      // })),
      state('void', style({
        opacity: 0,
        height: 0
      })),
      transition('void <=> *', animate(300)),
    ])
  ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  // errors: Observable<Array<any>>;
  errors = [];

  ngOnInit() {
  }

  addError() {
    this.errors = [...this.errors, { text: 'There was a problem loading account holds.', code: parseInt((Math.random() * 100000).toString() ,10) }
    ]
  }

  removeError(index: number) {
    this.errors = [...this.errors.slice(0, index), ...this.errors.slice(index + 1)];
  }
}
