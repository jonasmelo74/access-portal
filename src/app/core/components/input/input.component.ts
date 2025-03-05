import { Component, Input } from '@angular/core';

@Component({
  selector: 'input[app-input]',
  standalone: true,
  imports: [],
  template: ` 
    <ng-content/>
  `,
  styleUrl: './input-question.component.scss', 
  animations: []
})
export class InputComponent {
}
