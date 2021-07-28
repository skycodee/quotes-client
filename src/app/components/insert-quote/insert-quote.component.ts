import { HttpClient } from '@angular/common/http';
import { Component, Host, OnInit, Input } from '@angular/core';
import { Quote } from '../../models/Quote';
import { QuotesService } from '../../services/quotes.service';
import { QuotesListComponent } from '../quotes-list/quotes-list.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert-quote',
  templateUrl: './insert-quote.component.html',
  styleUrls: ['./insert-quote.component.scss']
})
export class InsertQuoteComponent implements OnInit {

  
  @Input('quote')
  quote: Quote = new Quote();

  @Input('edit')
  edit: boolean = false;

  constructor(private quotesService: QuotesService,
  private http: HttpClient, private parent: QuotesComponent, 
  private router: Router) { }


  ngOnInit(): void {
    
  }


  insertQuote(quote: Quote) {

    this.http.post('http://localhost:3000/', quote).subscribe(data => {
      if (data) {
        alert("Insert successful!");
        this.router.navigateByUrl('/quotes');
      }
      else {
        alert("Error while inserting!");
      }
    })

    }

  updateQuote(quote: Quote){
    if (confirm("Are you sure?")) {
      this.quotesService.updateQuote(quote)
    }
  }

}
