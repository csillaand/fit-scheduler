import { activityTypeMap } from './../_models/constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduler-form',
  templateUrl: './scheduler-form.component.html',
  styleUrls: ['./scheduler-form.component.sass']
})
export class SchedulerFormComponent implements OnInit {
    public dayOneFormGroup!: FormGroup;
    public dayTwoFormGroup!: FormGroup;
    public dayThreeFormGroup!: FormGroup;
    public dayFourFormGroup!: FormGroup;
    public dayFiveFormGroup!: FormGroup;
    public activityTypeMap = activityTypeMap;
    public items: any = [];
    
    constructor() {}
    
    ngOnInit() {
    }
    
    public addItem (newItem: any)
    {
        this.items.push(newItem);
    }

    public displayDayOfWeek(index: number)
    {
        switch (index) {
            case 0:
                return 'Luni';
            case 1:
                return 'Marti';
            case 2:
                return 'Miercuri';
            case 3:
                return 'Joi';
            case 4:
                return 'Vineri'
        }

        return '';
    }
}
