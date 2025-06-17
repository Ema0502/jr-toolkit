import { Component, signal } from '@angular/core';
import { LabelComponent } from 'jr-toolkit';

@Component({
  selector: 'app-label',
  imports: [LabelComponent],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class ViewLabelComponent {
  showHtml = signal(true);
  showTs = signal(false);
  /**
   * Array of prop metadata for documentation table.
   */
  props = [
    {
      name: 'for',
      type: 'string',
      description: "Associates the label with a control (the 'for' attribute).",
    },
    {
      name: 'text',
      type: 'string',
      description: 'Fixed label text; otherwise uses <ng-content>.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Marks the field as (required).',
    },
    {
      name: 'optional',
      type: 'boolean',
      description: 'Marks the field as (optional).',
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
