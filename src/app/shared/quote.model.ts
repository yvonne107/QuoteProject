export class Quote {
    QuoteId : number;
    QuoteType : string;
    Description : string;
    SalesPerson : string;
    DueDate : Date;
    PremiumAmount : number;

    constructor(){
        this.QuoteId = 0;
        this.QuoteType = '';
        this.Description = '';
        this.SalesPerson = '';
        this.DueDate = new Date();
        this.PremiumAmount = 0;
    }
}
