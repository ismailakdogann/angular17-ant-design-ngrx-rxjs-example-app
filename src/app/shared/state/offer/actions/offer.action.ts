import { createAction, props } from '@ngrx/store';

// model
import { Offer } from '../../offer/offer.model';

// actions
export const offerAddAction = createAction('[Offer] Add', props<Offer>());
export const offerRemoveAction = createAction('[Offer] Remove', props<{ id: number }>());