import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public dialogRef1: MatDialogRef<AddComponent>,public addService:QuoteService
   ) { }

  //rest form to empty
  ngOnInit(): void {
    this.addService.getQuote();
  }

  type!: string;
  showType(e:any){
    console.log(e.target.value);
    this.type = e.target.value
  }

  //cloase dialog and call post httprequest
  submit(form : NgForm){
    this.dialogRef1.close();
    this.addService.postQuote(form.value).subscribe(res => {
      console.log('add success!')  
      form.reset;
      this.addService.getQuote();
    })   
  }
  
  //close this dialog
  cancel(){
    this.dialogRef1.close();
  } 

}

function form(form: any) {
  throw new Error('Function not implemented.');
}
