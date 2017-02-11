import { Component, Input } from '@angular/core';
import { Quote } from '../../../models/quote'

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})

export class QuoteComponent {
  
  @Input()
  card: Quote;
  constructor() {}

}
