import { Routes } from '@angular/router';
import { CounterComponent } from './count/counter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
];
