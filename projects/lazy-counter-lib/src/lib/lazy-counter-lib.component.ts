import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <p><b>Lazy Library</b> Component</p>
    <button (click)="increaseCounter()">Increase Counter</button>
    <p>Counter: {{ counterService.counter }}</p>
  `
})
export class LazyCounterLibComponent  { 
  
  constructor(@Inject('CounterService') public counterService: CounterInterface) {}

  increaseCounter() {
    this.counterService.counter += 1;
  }
}

export interface CounterInterface {
  counter: number;
}