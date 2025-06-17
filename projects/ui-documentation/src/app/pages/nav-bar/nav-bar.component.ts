import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCategory } from '../../core/enums/category.enum';
import { selectedCategory, selectedComponentName } from '../../state';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'jr-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.module.scss'],
})
export class NavbarComponent {
  componentCategory = ComponentCategory;

  public selectCategory(category: ComponentCategory): void {
    selectedCategory.set(category);
    selectedComponentName.set(null);
  }
}
