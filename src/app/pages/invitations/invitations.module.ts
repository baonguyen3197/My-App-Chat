import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsRoutingModule } from './invitations-routing.module';
import { InvitationsComponent } from './invitations.component';
import { ShareModuleModule } from '../share-module/share-module.module';

@NgModule({
  declarations: [
    InvitationsComponent
  ],
  imports: [
    CommonModule,
    InvitationsRoutingModule,
    ShareModuleModule
  ]
})
export class InvitationsModule { }
