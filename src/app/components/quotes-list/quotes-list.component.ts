import { Component, Host, OnInit, Input, Output } from '@angular/core';
import { Quote } from '../../models/Quote';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {

  pageTitle = "Quotes List";
  @Input() quotes: Quote[] = [];
  @Input() selectedQuote : Quote = new Quote();

  constructor(@Host() private parent: QuotesComponent) { }

  ngOnInit(): void { 
 }

 selectQuote(quote: Quote) {
   this.parent.selectedQuote = quote;
 }

 deleteQuote(quote: Quote) {
   this.parent.deleteQuote(quote);
 }
 
}
