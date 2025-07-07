import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assignmentTask';

  assignmentForm: FormGroup = new FormGroup ({
    checkForm : new FormControl("",[Validators.required]),
    checkForm1 : new FormControl("",[Validators.required]),
    shuklaForm : new FormControl("",[Validators.required]),
    selectOne: new FormControl("",[Validators.required]),
    mobileNumber : new FormControl("",[Validators.required]),
    date : new FormControl ("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email])
  });

  showAlert(){
    alert("Please Fill all data")
  }
}
