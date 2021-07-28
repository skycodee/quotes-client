import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertQuoteComponent } from './insert-quote.component';

describe('InsertQuoteComponent', () => {
  let component: InsertQuoteComponent;
  let fixture: ComponentFixture<InsertQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
