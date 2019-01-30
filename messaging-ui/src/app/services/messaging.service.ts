import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageViewModel } from '../models/message.view.model';
import { MessageModel } from '../models/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private http: HttpClient) { }

  sendMessage = (msgViewModel: MessageViewModel): Observable<string> => {
    const message = {
      recipients: msgViewModel.recipients.split(','),
      body: msgViewModel.body,
      subject: msgViewModel.subject
    } as MessageModel;

    return this.http.post<string>(msgViewModel.serviceUrl, message);
  }
}
