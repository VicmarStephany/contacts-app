import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faUserCircle, faTrashAlt, faPen, faIdCard, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { ContactModel } from 'src/app/data/contact.model'
import { ConfirmationComponent } from 'src/app/shared/confirmation/confirmation.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  user = faUserCircle;
  editC = faPen;
  deleteC = faTrashAlt;
  id = faIdCard;
  address = faMapMarked;

  contacts: ContactModel[];
  confirmation: boolean = false;

  constructor( private dialog: MatDialog) { } 

  ngOnInit(): void {

    this.contacts = JSON.parse(localStorage.getItem('contacts-list'));
  }

  confirmDelete(id) {

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: { confirmation: this.confirmation }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.confirmation = result;
      if (this.confirmation == true) {
        this.deleteContact(id);
      }
    });
  }

  deleteContact(id){

    let list = this.contacts.filter(contact => contact.id !== id);
  
    localStorage.setItem('contacts-list', JSON.stringify(list));
    location.reload();

  }

}


