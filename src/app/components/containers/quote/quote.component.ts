import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../models/quote';
import { Color } from '../../../models/color';
import { QuotesService } from '../../../services/quotes.service';
import { ColorsService } from '../../../services/colors.service';
import { Style } from '../../../utilities/style';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})

export class QuoteComponent implements OnInit {
  
  quotes: Quote[];
  colors: Color[];
  
  color: Color;
  style: Style;

  constructor(private quotesService: QuotesService, private colorsService: ColorsService) {}

  ngOnInit() {
    this.colors = this.colorsService.getColors();
    this.quotesService.getQuotes()
      .subscribe(
        quotes => {
          this.quotes = this.transformQuotes(quotes);
        }
      );
  }

  transformQuotes(quotes: Quote[]) : Quote[]{
    for (var i = 0; quotes.length > i; i++){
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.style = new Style();
      console.log("selected font ==>", this.style.getFont());
      let quote = <Quote>({
        id: quotes[i].id,
        saying : quotes[i].saying,
        author : quotes[i].author,
        tags: quotes[i].tags,
        bgcolor: this.color.bgcolor,
        fontcolor: this.color.color,
        font: this.style.getFont()
      });
      quotes[i] = quote;
    }
    return quotes;
  }

}
