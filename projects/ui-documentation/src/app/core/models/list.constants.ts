import { ComponentCategory } from "../enums/category.enum";
import { ComponentItem } from "../enums/item.enum";

export const COMPONENT_LIST: Record<ComponentCategory, ComponentItem[]> = {
  [ComponentCategory.Components]: [
    ComponentItem.Label,
    ComponentItem.Switch
  ],
  [ComponentCategory.Services]: [],
  [ComponentCategory.Data]: []
};
