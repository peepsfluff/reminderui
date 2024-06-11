import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetreminderComponent } from './getreminder/getreminder.component';
import { SendreminderComponent } from './sendreminder/sendreminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from  '@angular/common/http';
import { ApiService } from './api.service';
import { HomepageComponent } from './homepage/homepage.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GetreminderComponent,
    SendreminderComponent,
    HomepageComponent,
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HomepageModule
    MatButtonModule,
    NoopAnimationsModule
    
  ],
  exports: [
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
