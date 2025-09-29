import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[parallax]',
  standalone: true
})
export class ParallaxDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrolled = window.scrollY;
    this.el.nativeElement.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}
