import { createReducer, on } from '@ngrx/store';

// model
import { Offer } from '../offer.model';

// action
import * as OfferActions from '../actions/offer.action';

// initial state
export const initalState: Offer[] = JSON.parse(
  localStorage.getItem('offers') || '[]'
);

// reducer
export const offerReducer = createReducer(
  initalState,
  on(OfferActions.offerAddAction, (state, offer) => {
    localStorage.setItem('offers', JSON.stringify([...state, offer]));
    return [...state, offer];
  })
);
