import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-sendreminder',
  templateUrl: './sendreminder.component.html',
  styleUrls: ['./sendreminder.component.css']
})
export class SendreminderComponent implements OnInit {

  submitMessage: boolean = false;
  submitMessageDisplay: string = "";

  submitForm = this.formBuilder.group({
    email: '',
    message: '',
    ttl: 0
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private httpService: ApiService,
    private formBuilder: FormBuilder

  ) {
  
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("sendreminder componentngoninit")
  }


  onSubmit(): void {
    console.log(this.submitForm)

    if (this.submitForm.value.email && this.submitForm.value.message && this.submitForm.value.ttl) {
      this.httpService.sendReminder(this.submitForm.value.email, this.submitForm.value.message, this.submitForm.value.ttl).subscribe(
        response => {
          // console.log(response.body)
          // console.log(response.body.$metadata)
          // console.log(response.message)

          if (response.body.$metadata.httpStatusCode === 200) {
            this.submitForm.reset();
            this.submitMessage = true;
          }
          this.submitMessageDisplay = this.submitMessage ? "Reminder successfully sent!" : "Reminder failed to send"
        }
      )
    }

  }


}
