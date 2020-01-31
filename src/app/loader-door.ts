import { Component, ViewChild } from '@angular/core';
import {AppModule} from './app.module'

@Component({
  selector: 'loader-door',
  templateUrl: './loader-door.html',
  styleUrls: [ './servicegui.scss' ]
})
export class AppComponent  {
  @ViewChild('doorStatusElement', {static: false}) doorStatusElement;
  serviceTitle = "Loader Door"
  serviceDescr = "Open or close the loader door"
  doorStatus: string;
  working = false;

  constructor() {
  }

  ngOnInit() {
    this.doorStatus = "INIT";
  }

  openButtonClicked() {
    this.doorStatus = "OPENED";
    this.doorStatusElement.ripple.launch({centered: true});
    this.working = true;
  }

  closeButtonClicked() {
    this.doorStatus = "CLOSED";
    this.doorStatusElement.ripple.launch({centered: true});
    this.working = false;
  }

  stateButtonClicked() {
    // Do nothing
  }

}


