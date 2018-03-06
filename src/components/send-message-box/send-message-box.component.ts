import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {
@Output() MessageContent: EventEmitter<string>;

  messageContent: string;

  constructor() {
    this.MessageContent = new EventEmitter<string>();
  }

  send() {
    this.MessageContent.emit(this.messageContent);
    this.messageContent="";
  }
}
