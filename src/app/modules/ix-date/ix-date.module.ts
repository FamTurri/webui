import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CoreComponents } from 'app/core/core-components.module';
import { IxDateComponent } from 'app/modules/ix-date/ix-date.component';
import { TooltipModule } from 'app/modules/tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    CoreComponents,
    TooltipModule,
  ],
  declarations: [
    IxDateComponent,
  ],
  exports: [
    IxDateComponent,
  ],
})
export class IxDateModule { }
