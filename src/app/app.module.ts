import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteService } from '../app/services/route.service';
import { NotesService } from  '../app/services/news.service';
import { AuthenticationService } from './services/authentication.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import { CanActivateRouteGuard } from '../app/guards/can-activate.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewsStoriesComponent } from './news-stories/news-stories.component';
import { NewsStoryCardComponent } from './news-story-card/news-story-card.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateRouteGuard],
  children :[
    {path:'overview' ,component : NewsStoriesComponent},
    {path:'contact', component: NewsStoryCardComponent}
  ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,FooterComponent, NewsStoriesComponent, NewsStoryCardComponent],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [RouteService,
    NotesService,
    AuthenticationService,
    CanActivateRouteGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }