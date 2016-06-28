import {Component} from '@angular/core';
import {Desktop} from 'components/desktop/desktop';

@Component({
  selector: 'master-app',
  template: '<desktop></desktop>',
  directives: [Desktop]
})
export class AppComponent { }
