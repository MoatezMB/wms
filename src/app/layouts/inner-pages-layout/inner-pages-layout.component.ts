import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { setBannerData } from 'src/app/globals/banner-data';

@Component({
  selector: 'app-inner-pages-layout',
  templateUrl: './inner-pages-layout.component.html',
  styleUrls: ['./inner-pages-layout.component.css']
})
export class InnerPagesLayoutComponent implements OnDestroy {

  private _event: any;
  _data = {};

  constructor(private router: Router) {
    this._event = this.router.events.subscribe((event: Event) => {      
      if (event instanceof NavigationEnd) {
        this._data = setBannerData(event.url)
      }
    })
  }

  ngOnDestroy(): void {
    if (this._event) {
      this._event.unsubscribe();
    }
  }
}