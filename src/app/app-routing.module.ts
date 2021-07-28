import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertQuoteComponent } from './components/insert-quote/insert-quote.component';
import { LoginComponent } from './components/login/login.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { RegisterComponent } from './components/register/register.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  {
    path: '',
    component: QuotesComponent
  },
  { 
    path: 'quotes',
    component: QuotesComponent
  },
  {
    path: 'insertQuote',
    component: InsertQuoteComponent
  },
  {
    path: 'insertQuote/:id',
    component: InsertQuoteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
