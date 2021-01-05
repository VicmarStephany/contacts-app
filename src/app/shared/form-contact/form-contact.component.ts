import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactModel } from 'src/app/data/contact.model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  @Input('contact') contact: ContactModel;

  contactForm: FormGroup;
  submitted: boolean;

  list: ContactModel[];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.list = JSON.parse(localStorage.getItem('contacts-list'));
    if (this.list == null) {
      this.list = [];
    }
    this.setForm();

  }

  /**
   * Identify if it is a create or update form. 
   */

  setForm() {
    if (this.contact != null) {
      this.contactForm = this.fb.group({
        id: [this.contact.id, Validators.required],
        name: [this.contact.name, Validators.required],
        address: [this.contact.address, Validators.required],
        phone: [this.contact.phone, Validators.required],
        birthday: [this.contact.birthday, Validators.required]
      })
    } else {
      this.contactForm = this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        birthday: ['', Validators.required]
      })
    }
  }
  
  /**
   * Creates a new contact or updates an existen one.
   */
  
  setContact() {

    let data = {
      id: this.contactForm.get('id').value,
      name: this.contactForm.get('name').value,
      address: this.contactForm.get('address').value,
      phone: this.contactForm.get('phone').value,
      birthday: this.contactForm.get('birthday').value,
    };

    if (this.contact != null) {

      let newList = this.list.filter(item => item.id !== this.contact.id);
      newList.push(data);

      localStorage.setItem('contacts-list', JSON.stringify(newList));
      this.router.navigate(['/contact-list']);

    } else {
      this.list.push(data);
      localStorage.setItem('contacts-list', JSON.stringify(this.list));
      this.router.navigate(['/contact-list']);

    }

    this.contactForm.reset;


  }

}
