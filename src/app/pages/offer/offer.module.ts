import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { OfferRoutingModule } from './offer-routing.module';

// ngrx
import { StoreModule } from '@ngrx/store';
import { offerReducer } from '../../shared/state/offer/reducers/offer.reducer';

// antd
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';

// forms
import { ReactiveFormsModule } from '@angular/forms';

// components
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzDividerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzSelectModule,
    NzTableModule,
    OfferRoutingModule,
    StoreModule.forFeature('offers', offerReducer),
  ],
})

export class OfferModule {}
