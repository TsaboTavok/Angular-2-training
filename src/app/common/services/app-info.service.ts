import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
    getAppInfo(): object {
        return { App: 'Pizza Store', Version: '0.3 beta'};
    }
}
