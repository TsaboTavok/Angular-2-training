import { Injectable } from '@angular/core';

@Injectable()
export class RandomStringService {
    constructor(private length: number) {

    }

    public getString(): string {
        let s = '';
        while (s.length < this.length) {
            s += this.randomchar();
        }
        return s;
    }
    randomchar(): string {
        const n = Math.floor(Math.random() * 62);
        if (n < 10) {
            return n.toString();
        }
        if (n < 36) {
            return String.fromCharCode(n + 55); // A-Z
        }
        return String.fromCharCode(n + 61); // a-z
      }
}
