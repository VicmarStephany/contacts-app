import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { CreateContactComponent } from './pages/create-contact/create-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'create-contact', component: CreateContactComponent },
  { path: 'update-contact/:id', component: UpdateContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
