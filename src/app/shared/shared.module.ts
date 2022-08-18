import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, DividerComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavComponent],
})
export class SharedModule {}
