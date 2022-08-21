import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { Quote } from '../shared/quote.model';
import { map } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quoteI : Quote;
  list: Quote[] =[];
  readonly rootURL = "https://localhost:44395/api/quotes/";
  
  constructor(private http:HttpClient) {
    this.quoteI = new Quote();
   }

  postQuote(quoteI : Quote){
    let token = localStorage.getItem('token');
    return this.http.post(this.rootURL,this.quoteI,{headers:{'content-type':'application/json','Authorization': 'bearer '+ token}});
  }

  getQuote(){
    let token = localStorage.getItem('token');
    return this.http.get(this.rootURL,{headers:{'Authorization': 'bearer '+ token}}).toPromise().then(res =>this.list = res as Quote[])
  };

  // getQuote(){
    // let token = localStorage.getItem('token');
    // return this.http.get(this.rootURL,{headers:{'Authorization': 'bearer '+ token}})
  // };

  getQuoteById(id: number) {
    let token = localStorage.getItem('token');
    const x = this.http.get<any>(this.rootURL+id,{headers:{'Authorization': 'bearer '+ token}})
    return x;
  }

  updateQuote(formData:any){
    let token = localStorage.getItem('token');
    console.log(formData);
    //this.quoteI = quoteI;
    return this.http.put(this.rootURL+this.quoteI.QuoteId, formData, {headers:{'content-type':'application/json','Authorization': 'bearer '+ token}});
  }
  
  deleteQuote(id : number){
    console.log('delete')
    let token = localStorage.getItem('token');
    return this.http.delete(this.rootURL+id, {headers:{'Authorization': 'bearer '+ token}});
  }
}
