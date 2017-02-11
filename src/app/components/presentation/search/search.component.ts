import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

import { Quote } from '../../../models/quote';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges{
  
  @Input()
  searchterm: string = "";

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes) {
    if (changes.searchterm) {
      this.searchterm = changes.searchterm.currentValue;
    }
  }

  onSearch(value: string){
    this.searchterm = value;
    this.search.emit(this.searchterm);
  }

}
