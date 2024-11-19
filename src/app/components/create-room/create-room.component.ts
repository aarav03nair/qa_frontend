import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../services/room-service.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent {
  roomName: string = '';
  userName: string = '';

  constructor(private roomService: RoomService, private router: Router) {}

  createRoom(): void {
    console.log(this.roomName);
    this.roomService.createRoom(this.roomName).subscribe(() => {
      alert('Room created');
    });
    
  }

  joinRoom(): void {
    this.roomService.joinRoom(this.roomName, this.userName).subscribe(() => {
      this.router.navigate(['/chat'], {
        queryParams: { room: this.roomName, name: this.userName },
      });
    });
  }
}
