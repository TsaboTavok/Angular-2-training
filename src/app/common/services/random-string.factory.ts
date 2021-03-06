export function RandomStringFactory(length: number) {
    return function(): string{
        let s = '';
        while (s.length < length) {
            s += randomchar();
        }
        return s;
    };
}

function randomchar(): string {
    const n = Math.floor(Math.random() * 62);
    if (n < 10) {
        return n.toString();
    }
    if (n < 36) {
        return String.fromCharCode(n + 55); // A-Z
    }
    return String.fromCharCode(n + 61); // a-z
  }

