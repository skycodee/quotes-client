import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  public getQuotes(){
    return this.http.get<Quote[]>('http://localhost:3000/quotes');
  }
}
