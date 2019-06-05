import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'ninja-directory';
  ninja = {
    name: "Yoshi",
    belt: "Black"
  };
  
  yell(event)
  {
    alert("I am yelling");
  }

}
