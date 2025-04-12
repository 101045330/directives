import { ThisReceiver } from "@angular/compiler";
import { Directive, OnInit, ElementRef, } from "@angular/core";

@Directive ({
   selector: '[appBasicHighlight]' ,
})
export class BasicHighlightDirective implements OnInit {
   constructor(private elementRef: ElementRef) {}

   ngOnInit(): void {
        // This is where you can add the logic for the directive
        console.log(ElementRef);
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
   }

   // Example of changing the background color of the element

}
