import { Component, OnInit,Inject, OnChanges, SimpleChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../shared/quote.model';

export interface DialogData {
  choice : 'yes' | 'no' ;
}

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent implements OnInit, OnChanges{

  qu: Quote;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef3: MatDialogRef<CloseComponent>, 
    public serD : QuoteService) {
      this.qu = this.data;
     }

  ngOnInit(): void {
    this.serD.getQuote();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.serD.getQuote();
  }

  yes(){
    this.dialogRef3.close();
    console.log('yes delete')
    this.serD.deleteQuote(this.qu.QuoteId).subscribe(res =>{
      this.serD.getQuote();
    });  
  }
  
  no(){
    this.dialogRef3.close();
  }   
}
