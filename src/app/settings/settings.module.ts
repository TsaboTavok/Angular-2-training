import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsFormComponent } from './settings-form/settings-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    SettingsFormComponent
  ],
  declarations: [SettingsFormComponent]
})
export class SettingsModule { }
