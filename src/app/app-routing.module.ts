import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { SchedulerFormComponent } from './modules/scheduler/scheduler-form/scheduler-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: SchedulerFormComponent
    }
];

@NgModule({
    imports: [
        SchedulerModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
