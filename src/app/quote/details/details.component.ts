import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/shared/quote.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number =0;
  que: Quote = new Quote;
  constructor(public serviceD : QuoteService, public activatedroute: ActivatedRoute) {
   //this.que = new Quote();
   
   }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(res =>{
      console.log(res);
      this.id=res['id'];
      console.log(this.id);
      
     });
    this.loadData(this.id);
    
  }

  loadData(id: any) {
    this.serviceD.getQuoteById(id).subscribe((data) => {
      this.que = data;
    })
  }

  logout(){
    
  }


}
