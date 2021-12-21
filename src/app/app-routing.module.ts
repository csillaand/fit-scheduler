import { ContactModule } from './modules/contact/contact.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ContactUsComponent } from './modules/contact/contact-us/contact-us.component';
import { HomePageComponent } from './modules/dashboard/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    }
];

@NgModule({
    imports: [
        DashboardModule,
        ContactModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
