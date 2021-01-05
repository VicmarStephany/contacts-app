import { Component, OnInit } from '@angular/core';
import { faUsers  } from '@fortawesome/free-solid-svg-icons';
import { ContactModel } from 'src/app/data/contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  icon = faUsers;

  contactList = LIST;
  totalContact: number;
  totalBirthday: number;

  hoy;

  constructor() { }

  ngOnInit(): void {

    let list: [] = JSON.parse(localStorage.getItem('contacts-list'));
    this.totalContact = list.length;

    this.hoy = Date.now();
    console.log(this.hoy)
    //localStorage.setItem('contacts-list', JSON.stringify(this.contactList) );

  }

}

const LIST: ContactModel[] = [
  {id: '12345', name: 'Vicmar Rojas', phone: '0426-2933319', address: 'Urb Riberas del Caroní', birthday: null},
  {id: '12346', name: 'Pedro Perez', phone: '04252933319', address: 'Urb Los cocos', birthday: null},
  {id: '12347', name: 'Miguel José', phone: '8752933319', address: 'Paseo El Coloso', birthday: null},
  {id: '12344', name: 'Luisa Mendez', phone: '0478933319', address: 'Parque Las Trinitarias', birthday: null},
]
