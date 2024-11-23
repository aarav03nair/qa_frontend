import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {
  rooms: string[] = ['0930', '1035', '1140', 'Room D'];
  selectedRoom: string | null = null; // Currently selected room
  messages: any[] = []; // Messages for the selected room

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // Fetch messages for the selected room
  fetchMessages(): void {
    if (!this.selectedRoom) return;

    this.http.get<any[]>(`https://qa-backend-b94f.onrender.com/api/messages/${this.selectedRoom}`)
      .subscribe(
        (messages) => {
          this.messages = messages;
        },
        (error) => {
          console.error('Error fetching messages:', error);
        }
      );
  }
}
