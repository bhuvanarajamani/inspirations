import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';
import { QuotesService } from '../../services/quotes.service';
import { Style } from '../../utilities/style';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})

export class QuoteComponent implements OnInit {
  
  quotes: Quote[];
  style: Style;

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotesService.getQuotes()
      .subscribe(
        quotes => {
          this.quotes = this.transformQuotes(quotes);
        }
      );
  }

  transformQuotes(quotes: Quote[]) : Quote[]{
    this.style = new Style();
    for (var i = 0; quotes.length > i; i++){
      let quote = <Quote>({
        id: quotes[i].id,
        saying : quotes[i].saying,
        author : quotes[i].author,
        tags: quotes[i].tags,
        bgcolor: this.style.getBgColor(),
        font: this.style.getFont(),
        fontcolor: this.style.getFontColor()
      });
      quotes[i] = quote;
    }
    return quotes;
  }

}
