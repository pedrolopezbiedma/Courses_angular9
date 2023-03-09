import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer: string;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm): void {
    console.log('form is -->', form);
  }

  isFormInvalid(form: NgForm){
    return form.invalid;
  }
}
