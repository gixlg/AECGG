import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { CommitScopeComponent } from './commit-scope/commit-scope.component';
import { CommitTypeComponent } from './commit-type/commit-type.component';
import { CommitMessageComponent } from "./commit-message/commit-message.component";


@NgModule({
  declarations: [
    HomeComponent,
    CommitMessageComponent,
    CommitTypeComponent,
    CommitScopeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class HomeModule {}
