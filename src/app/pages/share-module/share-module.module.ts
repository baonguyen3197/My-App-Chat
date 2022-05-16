import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule
  ],
  exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule
  ]
})
export class ShareModuleModule { }
