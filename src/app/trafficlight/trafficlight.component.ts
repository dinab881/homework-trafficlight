import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

type TLColor = 'red' | 'yellow' | 'green';

@Component({
  selector: 'app-trafficlight',
  templateUrl: './trafficlight.component.html',
  styleUrls: ['./trafficlight.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TrafficlightComponent),
    multi: true
  }]
})
export class TrafficlightComponent implements OnInit, ControlValueAccessor {

  private _currentColor: TLColor;
  private _colors: TLColor[] = ['red', 'yellow', 'green'];

  lightControl: FormControl;

  propagateChange = (color: TLColor) => {};
  propagateTouch = (color: TLColor) => {};

  constructor() { }

  ngOnInit() {
    this.lightControl = new FormControl();
  }

  writeValue(color: TLColor): void {
    this.currentColor = color;

  }
  get currentColor() {
    return this._currentColor;
  }

  set currentColor(color: TLColor) {
    this._currentColor = color;
    this.lightControl.setValue(color);
    this.propagateChange(color);
    this.propagateTouch(color);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  toggleDown() {
    // const nextColor = this._colors[(this._colors.indexOf(this.currentColor) + 1) % 3];
    // console.log(this.currentColor);
   this.currentColor = this._colors[(this._colors.indexOf(this.currentColor) + 1) % 3];
   // this.lightControl.setValue(nextColor);
   // console.log('-----', nextColor);

  }
  toggleUp() {
    // const nextColor = this._colors[(this._colors.indexOf(this.currentColor) + 2) % 3];
     this.currentColor = this._colors[(this._colors.indexOf(this.currentColor) + 2) % 3];
    // this.lightControl.setValue(nextColor);
   // console.log('--up---');

    }
  selectColor() {
    this.currentColor = this.lightControl.value;
    // console.log('*****', this.lightControl.value);
    console.log('------', 'onChange');
  }

}
