import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    setValue(key: string, val: any) {
        localStorage.setItem(key, JSON.stringify(val));
    }

    getValue<T>(key: string): T {
        return <T>JSON.parse(localStorage.getItem(key));
    }

    removeValue(key: string) {
        localStorage.removeItem(key);
    }
}
