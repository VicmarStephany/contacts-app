import { formatDate } from '@angular/common';
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

  contactList: ContactModel[];
  totalContact: number = 0;
  totalBirthday: number = 0;

  today = Date.now();


  constructor() { }

  ngOnInit(): void {

    this.contactList = JSON.parse(localStorage.getItem('contacts-list'));
    this.totalContact = this.contactList.length;
    
    this.getBirthdayUsers();

  }
  
  getBirthdayUsers(){
    let todayFormated = formatDate(this.today, 'MMM d', 'en-US')
    this.contactList.forEach(item => {
      let aux = formatDate(item.birthday, 'MMM d', 'en-US')
      if (todayFormated == aux) {
        this.totalBirthday += 1;
      }
      ;
    });
  }


}


