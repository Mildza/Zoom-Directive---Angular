import { Component, OnInit } from '@angular/core';
import { StepService } from '../shared/step.service';

@Component({
  selector: 'app-directivies',
  templateUrl: './directivies.component.html',
  styleUrls: ['./directivies.component.css'],
})
export class DirectiviesComponent implements OnInit {
  constructor(private stepService: StepService) {}
  value: number;
  ngOnInit() {
    this.value = 50;
  }

  changeZoom(value) {
    this.stepService.setStep(value);
  }
}
