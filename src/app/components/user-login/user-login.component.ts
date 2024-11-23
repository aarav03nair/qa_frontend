import { Component } from '@angular/core';
import { RoomService } from '../../services/room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  roomName: string = '';
  userName: string = '';
  loading: boolean = false;
  constructor(private roomService: RoomService, private router: Router) {}

  createRoom(): void {
    console.log(this.roomName);
    this.roomService.createRoom(this.roomName).subscribe(() => {
      alert('Room created');
    });
    
  }

  joinRoom(): void {
    this.loading=true;
    this.roomService.joinRoom(this.roomName, this.userName).subscribe(() => {
      this.router.navigate(['/chat'], {
        queryParams: { room: this.roomName, name: this.userName },
      });
      this.loading=false;
    });
    this.loading=false;
  }
}
