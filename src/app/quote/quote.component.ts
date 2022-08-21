import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Quote } from '../shared/quote.model';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CloseComponent } from '../close/close.component';
import { EditComponent } from '../edit/edit.component';
import { AddComponent } from '../add/add.component';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../services/quote.service';
import { identifierName } from '@angular/compiler';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quoteQ: Quote[];
  p:number = 1;;   
  leg: number; 
  am:number =20;

  constructor(public dialog: MatDialog, private actRoute: ActivatedRoute, public service : QuoteService, public su : UserService) {
    this.quoteQ = this.service.list;
    this.leg =0;
   }
   
  ngOnInit(){
    this.service.getQuote();
    // this.service.getQuote().subscribe(
    //   {
    //   next:(quotes) =>{
    //     this.quoteQ = quotes as Quote[];
    //     console.log(this.quoteQ);
    //     this.leg = this.quoteQ.length;
    //   }
    // });
  }

  //make authorization log out
  logOut(){
    console.log('log out');
    this.su.logout();//add user service for log out
  }

  /*
   * The following methods for 3 types of table controls 
   * page, sort, search
   */

  //1. use pagination with the input
  selectedPage!: number;
  showPage(e:any){
    console.log(e.target.value);
    this.selectedPage = e.target.value  }

  //2. sort by selected key value and change to decending
  selectedKey : any;
  reverse: boolean = true;
  showKey(e:any){
    this.selectedKey = e.target.value;
    this. reverse = false;
  }

  checked:boolean = false;
  decend(e:any){
      this.checked = e.target.checked;
      if(this.checked === true){
        this.reverse = true;
      }else{
        this.reverse =false;
      }
  }

  //3.search() by compare the input with value
  searchBox :any;    
  Search(){
    console.log('yes '+this.searchBox)
    console.log(this.quoteQ);
    if(this.searchBox == ""){
      this.ngOnInit();
    }else{
      this.quoteQ = this.quoteQ.filter(res =>{
        return res.Description.match(this.searchBox) ||
        res.QuoteType.match(this.searchBox) ||
        res.SalesPerson.match(this.searchBox)
      })
    }
  }

 
  /**
   * the 5 method following 
   * handle http request and dialog
   */

  //1. show add dialog and transfer to add com.
  addQuoteDia(){
    //this.quotes.add(q);
    console.log('add a query');
    const dialogConfig1 = new MatDialogConfig();

        dialogConfig1.disableClose = true;
        dialogConfig1.autoFocus = true;
        dialogConfig1.position = {
          top: '8%',
          left: '18%'
      };
    this.dialog.open(AddComponent,dialogConfig1)
  }

  //2. a help method to get current object
  populateForm(qu : Quote){
    this.service.quoteI = Object.assign({},qu);
  }

  //4. pass a que and pass a quote object
  editD(q2:Quote){
    const dialogConfig2 = new MatDialogConfig();
        dialogConfig2.disableClose = true;
        dialogConfig2.autoFocus = true;
        dialogConfig2.position = {
          top: '8%',
          left: '18%'
      };
        dialogConfig2.data =q2;
    this.dialog.open(EditComponent,dialogConfig2);
  }
  
  //5. open close dialog and pass a quote object
  deleteDH(q3:Quote){
    const dialogConfig3 = new MatDialogConfig();

        dialogConfig3.disableClose = true;
        dialogConfig3.autoFocus = true;
        dialogConfig3.position = {
          top: '15%',
          left: '33%'
      };
        dialogConfig3.data= q3;
        console.log(q3);
    this.dialog.open(CloseComponent,dialogConfig3);
  }

}
function DialogOverviewExampleDialog(DialogOverviewExampleDialog: any, arg1: { width: string; data: { name: any; animal: any; }; }) {
  throw new Error('Function not implemented.');
}




