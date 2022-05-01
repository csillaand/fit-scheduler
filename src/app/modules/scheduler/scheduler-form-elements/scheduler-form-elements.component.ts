import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { activityTypeMap } from '../_models/constants';

@Component({
  selector: 'app-scheduler-form-elements',
  templateUrl: './scheduler-form-elements.component.html',
  styleUrls: ['./scheduler-form-elements.component.sass']
})
export class SchedulerFormElementsComponent implements OnInit {
    public form!: FormGroup
    @Input() days!: any;
    public activityTypeMap = activityTypeMap;
    @Output() public values = new EventEmitter();
    @Input() public previousDay!: string;
    @Input() public nextDay!: string;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            morningActivityType: [],
            morningFrom: [],
            morningTo: [],
            eveningActivityType: [],
            eveningFrom: [],
            eveningTo: []
        });
    }

    public onNext(value: any): void
    {
        this.values.emit(value);
    }

}
