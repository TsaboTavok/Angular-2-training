import { SettingsService, Settings } from './../../common/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css']
})
export class SettingsFormComponent implements OnInit {

  private settings: Settings;
  constructor(private _settingsSerivce: SettingsService) { }

  ngOnInit() {
    this.settings =  this._settingsSerivce.getSettings() || new Settings('', '');
  }

  saveSettings() {
    this._settingsSerivce.saveSettings(this.settings);
  }

  clearSettings() {
    this.settings = new Settings('', '');
    this._settingsSerivce.clearSettings();
  }
}
