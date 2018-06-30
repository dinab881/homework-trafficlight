import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ColorValidator } from './color-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // trafficControl: FormControl;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {

    // this.trafficControl.valueChanges.subscribe((value) => console.log(value));
    this.form = this.fb.group({
      trafficControl: ['', ColorValidator('red') ],
    });
  }

  get trafficControl() { return this.form.get('trafficControl'); }
}
