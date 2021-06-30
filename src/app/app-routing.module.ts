import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleQuoteComponent } from './components/single-quote/single-quote.component';

const routes: Routes = [
  {
    path: '',
    component: QuotesListComponent
  },
  { 
    path: 'quotes',
    component: QuotesListComponent
  },
  {
    path: 'singleQuote',
    component: SingleQuoteComponent
  },
  {
    path: 'singleQuote/:id',
    component: SingleQuoteComponent
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
