import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  constructor() {}

  private step = new BehaviorSubject(50);

  setStep(value) {
    this.step.next(value);
  }

  getStep() {
    return this.step;
  }
}
