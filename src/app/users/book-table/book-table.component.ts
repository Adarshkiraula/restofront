import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { error_messages } from '../../error_message'
import { Router } from '@angular/router';
import { UserService } from '../user.service'
 
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  bookForm: FormGroup;
  error_message = error_messages;
  hide = true;
  namePattern = "^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$";

  constructor(private fb: FormBuilder,private router :Router,private service:UserService) {
    this.bookForm = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(this.namePattern)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      PhoneNo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      date: new FormControl('', Validators.compose([
        Validators.required
      ])),
      time: new FormControl('', Validators.compose([
        Validators.required
      ])),
      no_of_guest: new FormControl('', Validators.compose([
        Validators.required
      ])),
      // reservation_by: new FormControl('', Validators.compose([
      //   Validators.required
      // ])),
      msg: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
   }

  ngOnInit(): void {
  }
   
  book_Table(){
    this.service.bookTable(this.bookForm.value).subscribe((result)=>{
      console.log(result);
      
    })

  }
}
