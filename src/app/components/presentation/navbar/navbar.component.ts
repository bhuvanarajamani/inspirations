import { Component, OnInit } from '@angular/core';

import { Nav } from '../../../models/nav';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  navs: Nav[] = [
    {
      link : '/',
      name : 'Home',
      exact : true
    },
    {
      link : '/about',
      name : 'About',
      exact : false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
