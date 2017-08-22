import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    setValue(key: string, val: string) {
        localStorage.setItem(key, val);
    }

    getValue(key: string): string {
        return localStorage.getItem(key);
    }

    removeValue(key: string) {
        localStorage.removeItem(key);
    }
}
