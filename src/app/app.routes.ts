import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { NewModelComponent } from './new-model/new-model.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { ModelManagerComponent } from './model-manager/model-manager.component';
import { AuthGuard } from './core/auth.guard';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-logged', component: HomeLoggedComponent },
  { path: 'new-model', component: NewModelComponent },
  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'model-manager', component: ModelManagerComponent },
];
