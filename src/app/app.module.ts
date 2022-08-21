import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar'
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { DetailsComponent } from './quote/details/details.component';
import { CloseComponent } from './close/close.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { UpperPipe } from './upper.pipe';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { QuoteService } from './services/quote.service';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteComponent,
    DetailsComponent,
    CloseComponent,
    AddComponent,
    EditComponent,
    UpperPipe,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [ 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, 
    QuoteService,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
