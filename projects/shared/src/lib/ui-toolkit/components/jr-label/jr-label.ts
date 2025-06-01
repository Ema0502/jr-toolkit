import { 
  booleanAttribute, 
  Component, 
  HostBinding, 
  input } from '@angular/core';

@Component({
  selector: 'jr-label',
  imports: [],
  templateUrl: './jr-label.html',
  styleUrls: ['./jr-label.scss']
})
export class LabelComponent {
  @HostBinding('class') get hostClasses(): string {
    return 'jr-label';
  }

  /**
   * Specifies the 'for' attribute, whitch associates the Label with a form control.
   * @type {string}
   */
  for = input<string>('');

  /**
   * Indicates if the label is optional, generally used in forms to mark fields as optional.
   * @type {boolean}
   */
  required = input(false, {transform: booleanAttribute});

  /**
  * Indicates whether the label is optional.
  */
  optional = input<boolean>(false);

  /**
   * Specifies the text content of the label.
   * @type {string}
   */
  text = input<string>();
}
