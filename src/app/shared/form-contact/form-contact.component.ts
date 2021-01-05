import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.list = JSON.parse(localStorage.getItem('contacts-list'));

    this.contactForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthday: ['', Validators.required]
    })
  }

  createContact(){
    
    let data = {
      id: this.contactForm.get('id').value,
      name: this.contactForm.get('name').value,
      address: this.contactForm.get('address').value,
      phone: this.contactForm.get('phone').value,
      birthday: this.contactForm.get('birthday').value,
    };

    console.log(this.contactForm.value);
    this.list.push(data);
    console.log('Lista: ',this.list)

    localStorage.setItem('contacts-list', JSON.stringify(this.list));

  }

}
