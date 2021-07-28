import { Component, Input, OnInit } from '@angular/core';
import { QuotesListComponent } from '../quotes-list/quotes-list.component';
import { InsertQuoteComponent } from '../insert-quote/insert-quote.component';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  
  pageTitle = "Quotes List";
  quotes: Quote[] = [];
  selectedQuote: Quote = new Quote();

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {


    this.quotesService.getQuotes().subscribe(data => {
      this.quotes = data;
      console.log("Quotes: ", this.quotes);
    })

  }

  deleteQuote(quote: Quote) {
    if (confirm("Are you sure? ")) {
      this.quotesService.deleteQuote(quote.id).subscribe(data => {
        if (data) {
          alert("Quote deleted!");
          this.ngOnInit();
        }
        else {
          alert("Error while deleting quote!");
        }
      })
    }
  }

}
