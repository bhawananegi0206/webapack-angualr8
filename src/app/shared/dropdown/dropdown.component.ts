import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import './dropdown.component.scss';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {
  @Input() options;
  @Input() selectedOption;
  @Output() newOption =  new EventEmitter<any>();
  @Input() dropdownId;

  constructor() { }

  ngOnInit() {
  this.selectedOption =5;
  }
  changeOption(){
    this.newOption.emit(this.selectedOption);
  }
}
