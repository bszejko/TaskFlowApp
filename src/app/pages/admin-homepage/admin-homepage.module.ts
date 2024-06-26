import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHomepagePageRoutingModule } from './admin-homepage-routing.module';

import { AdminHomepagePage } from './admin-homepage.page';
import { AddProjectModalComponent } from './modals/add-project-modal/add-project-modal.component';
import { TypeaheadModule } from 'src/app/components/typeahead/typeahead.module';
import { RegisterUserModalComponent } from './modals/register-user-modal/register-user-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectDetailsModalComponent } from './modals/project-details-modal/project-details-modal.component';
import { UserProfileModalComponent } from './modals/user-profile-modal/user-profile-modal.component';
import { NewTaskModalComponent } from './modals/new-task-modal/new-task-modal.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomepagePageRoutingModule,
    TypeaheadModule,
    SwiperModule
  ],
  declarations: [AdminHomepagePage, AddProjectModalComponent, RegisterUserModalComponent, ProjectDetailsModalComponent, UserProfileModalComponent, NewTaskModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})



export class AdminHomepagePageModule {
}
