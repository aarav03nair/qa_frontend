import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private baseUrl='https://qa-backend-b94f.onrender.com'
  private apiUrl = `${this.baseUrl}/api/rooms`;
  private messageUrl = `${this.baseUrl}/api/messages`;

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
