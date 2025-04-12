import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNetterHighlight]',
  standalone: false
})
export class NetterHighlightDirective {
  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'red';
  @Input() fontSize: string = '16px';
  @Input() fontWeight: string = 'bold';
  
  // Hoist the defaultColor2 property
  @Input('dc') defaultColor2: string = 'blue';

  constructor() { }

  ngOnInit(): void {
    // This is where you can add the logic for the directive
    console.log('NetterHighlightDirective initialized');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyHighlight(this.highlightColor, this.fontSize, this.fontWeight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyHighlight(this.defaultColor, this.fontSize, this.fontWeight);
  }

  private applyHighlight(color: string, fontSize: string, fontWeight: string) {
    const element = (event?.target as HTMLElement);
    if (element) {
      element.style.backgroundColor = color;
      element.style.fontSize = fontSize;
      element.style.fontWeight = fontWeight;
    }
  }
}

