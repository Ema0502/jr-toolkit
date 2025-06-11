import { Component, computed, ElementRef, forwardRef, input, output, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jr-switch',
  imports: [],
  templateUrl: './jr-switch.component.html',
  styleUrls: ['./jr-switch.module.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  /**
   * The ID to give the switch in the format `switch-${id}`.
   *
   * @type {string}
   * @memberof SwitchComponent
   */
  public id = input('', {
    transform: (value: string) => `switch-${value}`,
  });
  /**labelPosition
   * The on/off state of the switch.
   *
   * @type {boolean}
   * @memberof SwitchComponent
   */
  public isOn = input(false, {
    transform: (value: boolean) => {
      this._inOn = value;
      return this._inOn;
    },
  });
  /**
   * The disabled/enabled state of the switch.
   *
   * @type {boolean}
   * @memberof SwitchComponent
   */
  public isDisabled = input(false, {
    transform: (value: boolean) => {
      this._isDisabled = value;
      return this._isDisabled;
    },
  });
  /**
   * Sets the label to be lefft or right of the switch.
   *
   * @type {'after' | 'before'}
   * @memberof SwitchComponent
   */
  public labelPosition = input<'after' | 'before'>('before');
  /**
   * The aria label to be applied to the switch.
   * @type {string}
   * @memberof SwitchComponent
   */
  public ariaLabel = input<string>('');
  /**
   * An event fired when the switch's state is changed.
   * @type {boolean}
   * @memberof SwitchComponent
   */
  public onChange = output<boolean>();

  protected checkboxElement =
    viewChild<ElementRef<HTMLInputElement>>('toggleElement');
  protected labelClass = computed(
    () => `jr-c-switch__label__${this.labelPosition()}`,
  );
  protected _inOn = false;
  protected _isDisabled = false;
  public onFormChange?: (value: boolean) => void;
  public onFormTouched?: () => void;

  writeValue(value: boolean): void {
    this._inOn = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onFormChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onFormTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  /**
   * Toggles thw switch and fires the necessary avents off.
   */
  protected toggle(): void {
    if (this._isDisabled) return;

    let localCheckboxElement = this.checkboxElement();
    if (localCheckboxElement)
      this._inOn = localCheckboxElement.nativeElement.checked;

    this.onChange.emit(this._inOn);
    if (this.onFormChange) this.onFormChange(this._inOn);
    if (this.onFormTouched) this.onFormTouched();
  }
}
