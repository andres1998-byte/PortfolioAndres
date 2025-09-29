import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[fadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.remove('opacity-0', 'translate-y-6');
          element.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(element);
  }
}
