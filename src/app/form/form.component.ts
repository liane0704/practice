import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // 匯入表單相關功能

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //雙向綁定
  name: any
 email: any
 password: any

 // 定義一個表單稱為applyForm，並且表單的型別為FormGroup，也就是表單的集合。
applyForm!: FormGroup;

  constructor(
    private fb: FormBuilder // 將表單相關元件啟動，並給予名稱fb
  ) { }

  ngOnInit(): void {
    this.applyForm = this.fb.group({ // 在元件啟動的時候建立每個表單的控制元件
      name: ["", Validators.required],//必填
      email: ["", Validators.minLength(3)],//最少要三字元
      password: [""],//非必填
  });
}

  submit(){

    console.group(this.applyForm.value)
    console.group(this.applyForm.valid)

  }

}
