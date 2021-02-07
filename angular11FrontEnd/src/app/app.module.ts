import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedService } from './shared.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './animal/edit/edit.component';
import { AddComponent } from './animal/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
