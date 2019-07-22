import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiviesComponent } from './directivies.component';

describe('DirectiviesComponent', () => {
  let component: DirectiviesComponent;
  let fixture: ComponentFixture<DirectiviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
