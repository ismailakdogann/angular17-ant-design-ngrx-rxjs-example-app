import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

// breakpoints
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

// antd
import { NzMessageService } from 'ng-zorro-antd/message';

// ngrx and models
import { Store } from '@ngrx/store';
import { Offer } from '../../../shared/state/offer/offer.model';
import { offerAddAction } from '../../../shared/state/offer/actions/offer.action';
import { AppState } from '../../../shared/model/app-state.model';

// rxjs
import { merge, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

// autocomplete
interface AutocompleteOptionGroups {
  title: string;
  children?: AutocompleteOptionGroups[];
}

@Component({
  selector: 'app-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  // export class FormComponent {
  validateForm: FormGroup<{
    mode: FormControl<string>;
    movementType: FormControl<string>;
    incoterms: FormControl<string>;
    place: FormControl<string>;
    packageType: FormControl<string>;
    unit1: FormControl<string>;
    unit2: FormControl<string>;
    currency: FormControl<string>;
  }>;

  offers$: Observable<Offer[]>;

  form: Offer = {
    id: Date.now(),
    mode: '',
    movementType: '',
    incoterms: '',
    place: '',
    packageType: '',
    unit1: '',
    unit2: '',
    currency: '',
  };

  formItemLayout: Observable<string>;

  // autocomplete
  optionGroups: AutocompleteOptionGroups[] = [];

  // form
  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }
  reset(): void {
    this.validateForm.reset();
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.reset();
  }
  submitForm(): void {
    // offer
    try {
      this._store.dispatch(
        offerAddAction(Object.assign({}, this.form, this.validateForm.value))
      );
      this.reset();
      this.createMessage('success', 'Offer Form saved successfully!');
    } catch (error) {
      this.createMessage('error', 'Offer Form errored');
      console.log('error', error);
    }
  }

  // init
  ngOnInit(): void {
    // this.createMessage('success', "Offer Form");
    setTimeout(() => {
      this.optionGroups = [
        {
          title: 'USA',
          children: [
            { title: 'New York' },
            { title: 'Los Angeles' },
            { title: 'Miami' },
            { title: 'Minnesota' },
          ],
        },
        {
          title: 'China',
          children: [{ title: 'Beijing' }, { title: 'Shanghai' }],
        },
        {
          title: 'Turkey',
          children: [{ title: 'Istanbul' }, { title: 'Izmir' }],
        },
      ];
    }, 1000);
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private message: NzMessageService,
    private breakpointObserver: BreakpointObserver,
    private _store: Store<AppState>
  ) {
    this.validateForm = this.fb.group({
      mode: ['', [Validators.required]],
      movementType: ['', [Validators.required]],
      incoterms: ['', [Validators.required]],
      place: ['', [Validators.required]],
      packageType: ['', [Validators.required]],
      unit1: ['', [Validators.required]],
      unit2: ['', [Validators.required]],
      currency: ['', [Validators.required]],
    });

    this.offers$ = this._store.select((state) => state.offers);

    this.formItemLayout = merge(
      this.breakpointObserver
        .observe([Breakpoints.Handset, Breakpoints.XSmall, Breakpoints.Small])
        .pipe(
          map(({ matches }) => {
            return matches ? 'mobile' : '';
          })
        ),
      this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
        map(({ matches }) => {
          return matches ? 'tablet' : '';
        })
      ),
      this.breakpointObserver.observe(Breakpoints.Web).pipe(
        map(({ matches }) => {
          return matches ? 'web' : '';
        })
      )
    );
  }
}
