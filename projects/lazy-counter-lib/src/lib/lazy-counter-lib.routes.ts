import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyCounterLibComponent } from './lazy-counter-lib.component';

const routes: Routes = [
  { path: '', component: LazyCounterLibComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);