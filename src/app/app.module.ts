import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { NewModelComponent } from './new-model/new-model.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { UserNavComponent } from './user-nav/user.component';
import { ModelManagerComponent } from './model-manager/model-manager.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditUserComponent,
    NewModelComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    HomeLoggedComponent,
    UserNavComponent,
    ModelManagerComponent
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [FirebaseService, EditUserResolver, AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
