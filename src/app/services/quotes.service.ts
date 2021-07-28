import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  public getQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>('http://localhost:3000/quotes');
  }

  public insertQuote(data: Quote[]){
    return this.http.put<Quote[]>('http://localhost:3000/quotes', data);
  }

  public deleteQuote(data: number) {
    return this.http.delete<Quote[]>('http://localhost:3000/:id');
  }

  public updateQuote(data: Quote) {
    return this.http.post<Quote[]>('http://localhost:3000/', data);
  }
}
