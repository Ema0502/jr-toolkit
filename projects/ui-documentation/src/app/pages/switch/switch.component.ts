import { Component, signal } from '@angular/core';
import { SwitchComponent } from 'jr-toolkit';

@Component({
  selector: 'app-switch',
  imports: [
    SwitchComponent
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})

export class ViewSwitchComponent {
  showHtml = signal(true);
  showTs = signal(false);
  /**
   * Array of prop metadata for documentation table.
   */
  props = [
    {
      name: 'id',
      type: 'string',
      description: 'Unique identifier, prefixed with `switch-`.',
    },
    {
      name: 'isOn',
      type: 'boolean',
      description: 'On/off state of the switch.',
    },
    {
      name: 'isDisabled',
      type: 'boolean',
      description: 'Disables the switch when true.',
    },
    {
      name: 'labelPosition',
      type: '`before` | `after`',
      description: 'Position of the label relative to the toggle.',
    },
    {
      name: 'ariaLabel',
      type: 'string',
      description: 'Accessible aria-label for screen readers.',
    },
  ];

  showHtmlFn = () => {
    this.showHtml.set(true);
    this.showTs.set(false);
  };
  showTsFn = () => {
    this.showTs.set(true);
    this.showHtml.set(false);
  };
}
