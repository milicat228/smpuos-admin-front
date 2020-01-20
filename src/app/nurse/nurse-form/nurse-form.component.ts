import { Router } from '@angular/router';
import { NurseRestService } from './../service/nurse-rest.service';
import { ProfessionalQualification } from './../model/nurse';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nurse-form',
  templateUrl: './nurse-form.component.html',
  styleUrls: ['./nurse-form.component.css']
})
export class NurseFormComponent implements OnInit {
  nurseForm: FormGroup;
  loading = false;
  message: String = '';
  professionalQualifications: ProfessionalQualification[] = [];

  datePickerConfig: Partial<BsDatepickerConfig> = Object.assign({},
    {
        containerClass: 'theme-default',
        dateInputFormat: 'DD-MM-YYYY'
  });


  constructor(private formBuilder: FormBuilder, private nurseService: NurseRestService, private datePipe: DatePipe, public router: Router) {
    this.nurseForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      active: [''],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      jmbg: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      dateOfBirth: ['', [Validators.required]],
      professionalQualification: this.formBuilder.group({
        id: [, [Validators.required]]
      }),
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.nurseService.allQualifications().subscribe(
      page => {
        this.professionalQualifications = page.content;
      }
    );
  }

  addNurse() {
    this.loading = true;
    const nurse = this.nurseForm.value;
    nurse.dateOfBirth = this.datePipe.transform(nurse.dateOfBirth, 'yyyy-MM-dd');
    this.nurseService.addNurse(nurse).subscribe(
      (data) => {
        this.router.navigate(['nurse']);
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.message = error.details;
      }
    );
  }

}
