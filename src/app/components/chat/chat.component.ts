import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../services/room-service.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  url: string = 'https://qa-backend-b94f.onrender.com';
  socket = io(this.url);
  room: string = '';
  name: string = '';
  message: string = '';
  messages: any[] = [];

  constructor(private route: ActivatedRoute, private roomService: RoomService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.room = params['room'];
      this.name = params['name'];
      this.joinRoom();
      this.loadMessages();
    });

    this.socket.on('message', (message: any) => {
      this.messages.push(message);
    });
  }

  loadMessages(): void {
    this.roomService.getMessages(this.room).subscribe((messages) => {
      this.messages = messages;
    });
  }

  joinRoom(): void {
    this.socket.emit('join-room', { room: this.room, user: this.name });
  }

  sendMessage(): void {
    this.socket.emit('send-message', { room: this.room, user: this.name, message: this.message });
    this.message = '';
  }
}
