import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  forma! : FormGroup;
  get commentControls(): AbstractControl[]{
    return (this.forma.get('comment') as FormArray).controls
  }
  ngOnInit(): void {
    this.forma = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('',[Validators.minLength(6)]),
      message: new FormGroup({
        from: new FormControl(''),
        text: new FormControl('')
      }),
      comment: new FormArray([])
    });
    this.forma.valueChanges.subscribe();
  }

  addComment(){
    const control = new FormControl('');
    (this.forma.get('comment') as FormArray).push(control)
  }

  qwe: any
  submit() {
    const valueForm = { ...this.forma.value}
    this.qwe= valueForm
  }
}