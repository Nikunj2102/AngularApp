import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

// import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() ninja;
  @Output() onYell = new EventEmitter();
  homeTitle = "Welcome to the homepage...";

  onYellEvent(e)
  {
    this.onYell.emit(e);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
