import { NgModule } from '@angular/core';
import { LazyCounterLibComponent } from './lazy-counter-lib.component';
import { routing } from './lazy-counter-lib.routes';



@NgModule({
  declarations: [LazyCounterLibComponent],
  imports: [
    routing
  ],
  exports: [LazyCounterLibComponent]
})
export class LazyCounterLibModule { }
