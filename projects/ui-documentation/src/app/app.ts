import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabelComponent } from '../../../shared/src/lib/ui-toolkit/components/jr-label/jr-label';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LabelComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ui-documentation';
}
