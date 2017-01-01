import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'add-form',
  styleUrls: ['./add-form.component.css'],
  templateUrl: './add-form.component.html'
})

export class AddFormComponent {

  listingItemForm: any;

  constructor() {
    this.listingItemForm = {
      title: '',
      category: 'Tърси',
      postedOn: new Date().toLocaleTimeString(),
      author: 'Pesjo',
      content: '',
      isDeleted: false
    };
  }
  isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

 get spy(){
    return JSON.stringify(this.listingItemForm);
  }

}