import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/Quote';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {

  pageTitle = "Quotes List";
  quotes: Quote[] = [];

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    
    this.quotesService.getQuotes().subscribe(data => {
      this.quotes = data;
    })

  }

}
