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
import { CommitDescriptionComponent } from './commit-description/commit-description.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { CommitBodyComponent } from "./commit-body/commit-body.component";
import {CommitFootersComponent} from "./commit-footers/commit-footers.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";



@NgModule({
  declarations: [
    HomeComponent,
    CommitMessageComponent,
    CommitTypeComponent,
    CommitScopeComponent,
    CommitDescriptionComponent,
    CommitBodyComponent,
    CommitFootersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ]
})
export class HomeModule {}
