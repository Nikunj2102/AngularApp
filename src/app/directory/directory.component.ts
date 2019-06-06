import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {

  ninja:string; 
  ninjas = [
    {name:'Nikunj' , belt: 'Black'},
    {name:'ABC' , belt: 'red'},
    {name:'PQR' , belt: 'purple'}
  ];

  // constructor(public route: ActivatedRoute) {
  //   this.ninja = route.snapshot.params['ninja'];
  //  }

  ngOnInit() {
  }

}
