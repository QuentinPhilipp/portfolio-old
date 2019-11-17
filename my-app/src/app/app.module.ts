import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule} from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from "./services/auth.service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from "./services/auth-guard.service";
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { MsgChatComponent } from './msg-chat/msg-chat.component';
import { ChatService} from './services/chat.service';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DocumentComponent } from './document/document.component';
import { MultipleDocumentComponent } from './multiple-document/multiple-document.component';
import { DocService} from './services/doc.service';



// canActivate:[AuthGuard],

const appRoutes: Routes = [
  { path: 'chat', canActivate:[AuthGuard],component: ChatComponent },
  // { path: 'acceuil',  canActivate:[AuthGuard],component: AcceuilComponent },
  // { path: 'appareils/:id',canActivate:[AuthGuard], component: SingleAppareilComponent },
  { path: 'docs', component: MultipleDocumentComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    ErrorPageComponent,
    UsersComponent,
    ChatComponent,
    MsgChatComponent,
    AcceuilComponent,
    DocumentComponent,
    MultipleDocumentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    ChatService,
    DocService
  ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
