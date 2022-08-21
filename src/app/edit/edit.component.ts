import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuoteService } from '../services/quote.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public dialogRef2: MatDialogRef<EditComponent>,
   public editService:QuoteService, public rout:Router) { }

   ngOnInit(): void {
    this.editService.getQuote();
  }

  submit(form:NgForm){
    this.dialogRef2.close();
    console.log(form.value);
    this.editService.updateQuote(form.value).subscribe(res =>{
      console.log('edit success!');
      this.editService.getQuote();
    });
  }
  
  cancel(){
    this.dialogRef2.close();
  } 

}
function resetForm(arg0: any) {
  throw new Error('Function not implemented.');
}

