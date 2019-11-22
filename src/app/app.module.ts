import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppComponent } from './app.component';
import { UserListComponent } from './home-user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './services/user.service';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent
    // JwPaginationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

