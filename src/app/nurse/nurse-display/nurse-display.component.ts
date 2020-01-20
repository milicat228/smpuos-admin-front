import { NurseRestService } from './../service/nurse-rest.service';
import { Component, OnInit } from '@angular/core';
import { Nurse } from '../model/nurse';

@Component({
  selector: 'app-nurse-display',
  templateUrl: './nurse-display.component.html',
  styleUrls: ['./nurse-display.component.css']
})
export class NurseDisplayComponent implements OnInit {
  nurses: Nurse[] = [];

  constructor(private nurseRestService: NurseRestService) { }

  ngOnInit() {
    this.nurseRestService.allNurses().subscribe(
      page => {
        this.nurses = page.content;
      }
    );
  }

}
