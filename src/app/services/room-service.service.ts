import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = 'http://localhost:3000/api/rooms';
  private messageUrl = 'http://localhost:3000/api/messages';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  createRoom(name: string): Observable<void> {
    console.log('hello');
    return this.http.post<void>(this.apiUrl, { name });
  }

  joinRoom(name: string, user: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/join`, { name, user });
  }

  getMessages(room: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.messageUrl}/${room}`);
  }
}
