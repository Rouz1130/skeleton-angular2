//adding component code  and this tells typescript what the word COMPONENT means.
//import statements pull in extra functionality and definitions our files need.
import {Component} from '@angular/core';

@component ({
  selector: 'my-app',
  template:`
  <h1>My First Angular 2 App</h1>
  `
})
//exporting a class definition/allows component available to other components.
export class AppComponent {

}
