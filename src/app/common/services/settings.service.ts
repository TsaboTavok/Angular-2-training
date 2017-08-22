import { Injectable } from '@angular/core';
import { LocalStorageService, Settings } from '..';

@Injectable()
export class SettingsService {
    private settingsKey = 'settingsservice_settings';

    constructor(private localStorage: LocalStorageService) { }

    saveSettings(settings: Settings) {
        this.localStorage.setValue(this.settingsKey, settings);
    }

    getSettings(): Settings {
        return this.localStorage.getValue<Settings>(this.settingsKey);
    }

    clearSettings() {
        this.localStorage.removeValue(this.settingsKey);
    }
}
