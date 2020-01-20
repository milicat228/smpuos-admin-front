import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

/*ZA FORME*/
import { ReactiveFormsModule} from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NurseDisplayComponent } from './nurse-display/nurse-display.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NurseDisplayComponent, NurseFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    RouterModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    NurseDisplayComponent, NurseFormComponent
  ],
  providers: [
    DatePipe
  ]
})
export class NurseModule { }
