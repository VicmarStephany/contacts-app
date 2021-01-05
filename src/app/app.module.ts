import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { CreateContactComponent } from './pages/create-contact/create-contact.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';
import { FormContactComponent } from './shared/form-contact/form-contact.component';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactListComponent,
    CreateContactComponent,
    UpdateContactComponent,
    FormContactComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material Moduls
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,

    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],

  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
