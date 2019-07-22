import { Directive, ElementRef, HostListener, Renderer2, HostBinding, Input, OnInit } from '@angular/core';
import { StepService } from './step.service';

@Directive({
  selector: '[zoom]',
})
export class ZoomDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2, private stepService: StepService) {}

  @Input() step: number;
  @HostBinding('style.boxShadow') bohShadow: string;

  checkStep: number;

  ngOnInit() {
    if (this.step) this.stepService.setStep(+this.step);
    this.stepService.getStep().subscribe(value => (this.checkStep = value));
    this.renderer.setStyle(this.el.nativeElement, 'height', '200px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
  }

  private border(color: string = null, type: string = null, width: string = null) {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'border-style', type);
    this.renderer.setStyle(this.el.nativeElement, 'border-width', width);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.border('black', 'dashed', '2px');
    this.bohShadow = '5px 10px #999999';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border();
    this.bohShadow = '';
  }
  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'height', '200px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'default');
    this.border();
  }

  @HostListener('wheel', ['$event']) onWheel(event: any) {
    event.preventDefault();
    if (event.deltaY > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'zoom-out');
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'red');
      this.changeSize(-this.checkStep);
    }
    if (event.deltaY < 0) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'zoom-in');
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'lime');
      this.changeSize(this.checkStep);
    }
  }

  private changeSize(sizechange: any) {
    let height = this.el.nativeElement.offsetHeight;
    let newHeight: any = height + sizechange;
    if (newHeight < 100) {
      newHeight = 100;
      this.noZoom();
    }
    if (newHeight > 800) {
      newHeight = 801;
      this.noZoom();
    }
    this.renderer.setStyle(this.el.nativeElement, 'height', newHeight + 'px');
  }

  private noZoom() {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'no-drop');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
  }
}
