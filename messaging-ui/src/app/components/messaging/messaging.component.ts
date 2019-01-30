import { Component, OnInit } from '@angular/core';
import { MessageViewModel } from 'src/app/models/message.view.model';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  message: MessageViewModel = new MessageViewModel();
  msgId: string = "";

  constructor(private messagingService: MessagingService) { }

  send = () => {
    this.messagingService
      .sendMessage(this.message)
      .subscribe(msgId => {
        this.msgId = msgId;
      }, error => alert(error.message));
  }
}
