import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from 'src/app/data/contact.model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  idContact: string;
  contact: ContactModel;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idContact = this.route.snapshot.paramMap.get('id');
    
    let list = JSON.parse(localStorage.getItem('contacts-list'));
    this.contact = list.find(item => item.id === this.idContact);

  }

}
