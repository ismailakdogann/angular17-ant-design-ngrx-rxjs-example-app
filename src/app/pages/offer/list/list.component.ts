import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Offer } from '../../../shared/state/offer/offer.model';
import { AppState } from '../../../shared/model/app-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {
  offers$: Observable<Offer[] | any>;

  constructor(private _store: Store<AppState>) {
    this.offers$ = this._store.select((state) => state.offers);
  }
}
