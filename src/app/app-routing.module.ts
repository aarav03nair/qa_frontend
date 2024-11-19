import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-room', pathMatch: 'full' },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '/create-room' }, // Redirect any unknown paths to create-room
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
