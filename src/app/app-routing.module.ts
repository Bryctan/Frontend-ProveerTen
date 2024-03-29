import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Register component
import { RegisterComponent } from './components/auth/register/register/register.component';

// Login component
import { LoginComponent } from './components/auth/login/login/login.component';

// Home component
import { HomeComponent } from './components/home/home.component';

// View component
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { ViewProfileCompanyComponent } from './components/profile/view-profile-company/view-profile-company.component';
import { ViewProfileProviderComponent } from './components/profile/view-profile-provider/view-profile-provider.component';
import { ViewProfileGrocerComponent } from './components/profile/view-profile-grocer/view-profile-grocer.component';

// 404 component
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Guards
import { homeGuard } from 'src/app/guards/guards-components/home.guard';
import { grocerGuard } from 'src/app/guards/role-guards/grocer.guard';
import { offlineGuard } from 'src/app/guards/role-guards/offline.guard';
import { providerGuard } from 'src/app/guards/role-guards/provider.guard';
import { companyGuard } from 'src/app/guards/role-guards/company.guard';
import { profileCompanyGuard } from 'src/app/guards/guards-components/profileCompany.guard';
import { profileProviderGuard } from 'src/app/guards/guards-components/profileProvider.guard';
import { profileGrocerGuard } from 'src/app/guards/guards-components/profileGrocer.guard';
import { DeleteDataProfileGrocerComponent } from './components/profile/delete-data-profile/delete-data-profile-grocer/delete-data-profile-grocer.component';
import { profileUploadImageGuard } from './guards/guards-components/profile-upload-image.guard';
import { profileGuard } from './guards/guards-components/profile.guard';
import { RegisterGoogleGuard } from './guards/guards-components/register-google.guard';
import { RegisterMainGoogleComponent } from './components/auth/register-google/register-main/register-main-google.component';
import { LoginGoogleComponent } from './components/auth/login-google/login-google/login-google.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [homeGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register/:role',
    component: RegisterMainGoogleComponent,
    canActivate: [RegisterGoogleGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/:role',
    component: LoginGoogleComponent
  },
  {
    path: 'profile/:id',
    component: ViewProfileComponent,
    canActivate: [profileGuard],
    canDeactivate: [profileUploadImageGuard]
  },
  {
    path: 'profile/company/:id',
    component: ViewProfileCompanyComponent,
    canActivate: [profileCompanyGuard],

  },
  {
    path: 'profile/provider/:id',
    component: ViewProfileProviderComponent,
    canActivate: [profileProviderGuard]
  },
  {
    path: 'profile/grocer/:id',
    component: ViewProfileGrocerComponent,
    canActivate: [profileGrocerGuard]
  },
  {
    path: 'delete/data/grocer/:id',
    component: DeleteDataProfileGrocerComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
