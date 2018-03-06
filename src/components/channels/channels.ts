import { Component } from '@angular/core';

/**
 * Generated class for the ChannelsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'channels',
  templateUrl: 'channels.html'
})
export class ChannelsComponent {

  text: string;

  constructor() {
    console.log('Hello ChannelsComponent Component');
    this.text = 'Hello World';
  }

}
