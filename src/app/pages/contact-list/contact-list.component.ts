import { Component, OnInit } from '@angular/core';
import { faUserCircle, faTrashAlt, faPen  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contact = faUserCircle;
  editC = faPen;
  deleteC = faTrashAlt;

  constructor() { } 

  ngOnInit(): void {
  }

  deleteContact(){

  }

}
