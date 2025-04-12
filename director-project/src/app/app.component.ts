import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'director-project';

  onMouseOver() {
    console.log('Mouse over');
  }

  onMouseOut() {
    console.log('Mouse out');
  }

  onKeyPress(event: KeyboardEvent) {
    console.log('Key press', event);
  }

  onKeyDown(event: KeyboardEvent) {
    console.log('Key down', event);
  }

  onKeyUp(event: KeyboardEvent) {
    console.log('Key up', event);
  }

  onPaste(event: ClipboardEvent) {
    console.log('Paste', event);
  }

  onInput(event: Event) {
    console.log('Input', event);
  }

  onChange(event: Event) {
    console.log('Change', event);
  }

  onFocus(event: FocusEvent) {
    console.log('Focus', event);
  }

  onBlur(event: FocusEvent) {
    console.log('Blur', event);
  }

  onCut(event: ClipboardEvent) {
    console.log('Cut', event);
  }

  onCopy(event: ClipboardEvent) {
    console.log('Copy', event);
  }

  onSelect(event: Event) {
    console.log('Select', event);
  }

  onContextMenu(event: MouseEvent) {
    console.log('Context menu', event);
  }

  onDrag(event: DragEvent) {
    console.log('Drag', event);
  }

  onDragStart(event: DragEvent) {
    console.log('Drag start', event);
  }

  onDragEnd(event: DragEvent) {
    console.log('Drag end', event);
  }

  onDragEnter(event: DragEvent) {
    console.log('Drag enter', event);
  }

  onDragOver(event: DragEvent) {
    console.log('Drag over', event);
  }

  onDragLeave(event: DragEvent) {
    console.log('Drag leave', event);
  }

  onDrop(event: DragEvent) {
    console.log('Drop', event);
  }

  onScroll(event: Event) {
    console.log('Scroll', event);
  }

  onWheel(event: WheelEvent) {
    console.log('Wheel', event);
  }

  onTouchStart(event: TouchEvent) {
    console.log('Touch start', event);
  }

  onTouchMove(event: TouchEvent) {
    console.log('Touch move', event);
  }

  onTouchEnd(event: TouchEvent) {
    console.log('Touch end', event);
  }

  onTouchCancel(event: TouchEvent) {
    console.log('Touch cancel', event);
  }

  onPointerDown(event: PointerEvent) {
    console.log('Pointer down', event);
  }

  onPointerUp(event: PointerEvent) {
    console.log('Pointer up', event);
  }

  onPointerMove(event: PointerEvent) {
    console.log('Pointer move', event);
  }

  onPointerEnter(event: PointerEvent) {
    console.log('Pointer enter', event);
  }

  onPointerLeave(event: PointerEvent) {
    console.log('Pointer leave', event);
  }

  onPointerOver(event: PointerEvent) {
    console.log('Pointer over', event);
  }

  onPointerOut(event: PointerEvent) {
    console.log('Pointer out', event);
  }

  onEnter(event: KeyboardEvent) {
    console.log('Enter key', event);
  }

  onSpace(event: KeyboardEvent) {
    console.log('Space key', event);
  }

  onTab(event: KeyboardEvent) {
    console.log('Tab key', event);
  }

  onEsc(event: KeyboardEvent) {
    console.log('Esc key', event);
  }

  onBackspace(event: KeyboardEvent) {
    console.log('Backspace key', event);
  }

  onDelete(event: KeyboardEvent) {
    console.log('Delete key', event);
  }

  onArrowUp(event: KeyboardEvent) {
    console.log('Arrow up key', event);
  }

  onArrowDown(event: KeyboardEvent) {
    console.log('Arrow down key', event);
  }

  onArrowLeft(event: KeyboardEvent) {
    console.log('Arrow left key', event);
  }

  onArrowRight(event: KeyboardEvent) {
    console.log('Arrow right key', event);
  }

  onHome(event: KeyboardEvent) {
    console.log('Home key', event);
  }

  onEnd(event: KeyboardEvent) {
    console.log('End key', event);
  }

  onPageUp(event: KeyboardEvent) {
    console.log('Page up key', event);
  }

  onPageDown(event: KeyboardEvent) {
    console.log('Page down key', event);
  }

  onInsert(event: KeyboardEvent) {
    console.log('Insert key', event);
  }

  onF1(event: KeyboardEvent) {
    console.log('F1 key', event);
  }

  onF2(event: KeyboardEvent) {
    console.log('F2 key', event);
  }

  onF3(event: KeyboardEvent) {
    console.log('F3 key', event);
  }

  onF4(event: KeyboardEvent) {
    console.log('F4 key', event);
  }

  onF5(event: KeyboardEvent) {
    console.log('F5 key', event);
  }

  onF6(event: KeyboardEvent) {
    console.log('F6 key', event);
  }

}
