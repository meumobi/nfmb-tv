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
  currentSlide = 0;
  sliderLength: number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items$ = this.itemService.data$;

    this.items$.subscribe(data => {
      this.sliderLength = data.length;
      console.log('Slides number: ', this.sliderLength);
    });

    setInterval(() => {
      this.updateCurrentSlide();
    }, 2000);
  }

  private updateCurrentSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderLength;
  }

  public isActive(index: number) {
    return this.currentSlide === index;
  }
}
