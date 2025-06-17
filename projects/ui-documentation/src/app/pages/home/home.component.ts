import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectedCategory, selectedComponentName } from '../../state';
import { COMPONENT_LIST } from '../../core/models/list.constants';
import { ComponentItem } from '../../core/enums/item.enum';
import { ViewSwitchComponent } from '../switch/switch.component';
import { ViewLabelComponent } from '../label/label.component';

@Component({
  selector: 'jr-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  componentsList = COMPONENT_LIST;

  selectedCategory = selectedCategory;
  selectedComponentName = selectedComponentName;

  // Map for ComponentOutlet
  componentMap: Record<string, any> = {
    [ComponentItem.Switch]: ViewSwitchComponent,
    [ComponentItem.Label]: ViewLabelComponent,
  };

  selectComponent(item: ComponentItem) {
    selectedComponentName.set(item);
  }
}
