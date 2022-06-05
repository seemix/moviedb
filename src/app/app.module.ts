import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './components/menu/menu.component';
import {GenreResolverService} from "./services";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PopupComponent } from './components/popup/popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    MenuComponent,
    MovieDetailsComponent,
    PopupComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    GenreResolverService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
