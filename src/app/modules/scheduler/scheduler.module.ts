import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerFormComponent } from './scheduler-form/scheduler-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';
import { SchedulerFormElementsComponent } from './scheduler-form-elements/scheduler-form-elements.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
    declarations: [
        SchedulerFormComponent,
        SchedulerFormElementsComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        NgSelectModule,
        NgxMaterialTimepickerModule
    ],
    exports: [
        SchedulerFormComponent
    ]
})
export class SchedulerModule { }
