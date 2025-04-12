import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: false
})
export class NumberOnlyDirective {

  private allowedSpecialKeys: string[] = [
    'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'
  ];

  constructor() {}

  // Prevent non-numeric key presses
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {

    const isNumber = /^[0-9]$/.test(event.key);
    const isSpecial = this.allowedSpecialKeys.includes(event.key);

    if (!isNumber && !isSpecial) {
      event.preventDefault();
      console.log('Blocked keydown:', event.key);
    } else {
      console.log('Allowed keydown:', event.key);
    }



    if (!isNumber && !isSpecial) {
      event.preventDefault();
    }
  }

  // Keypress is mostly legacy, but you can log it if needed
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    console.log('Keypress:', event.key);
  }

  // Fires after the key is released
  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    console.log('Keyup:', event.key);
  }
}
