import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'question-filter', component: QuestionListComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '/user-login' }, // Redirect any unknown paths to create-room
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
