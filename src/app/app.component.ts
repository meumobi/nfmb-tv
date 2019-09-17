import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item, ItemService } from '@meumobi/nfmb-data-mgmt';

@Component({
  selector: 'nfmb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items$ = this.itemService.data$;
  }
}
