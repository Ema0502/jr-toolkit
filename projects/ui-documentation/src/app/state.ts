import { signal } from '@angular/core';
import { ComponentCategory } from './core/enums/category.enum';

export const selectedCategory = signal<ComponentCategory | null>(null);
export const selectedComponentName = signal<string | null>(null);
