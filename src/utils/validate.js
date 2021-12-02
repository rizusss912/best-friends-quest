export function validate(fild, name, ...types) {
    for (const type of types) {
        if (fild === null) {
            if (type === 'null') return;
        } else if (typeof fild === 'object') {
            if (Array.isArray(fild) && type === 'array') return;
            if (!Array.isArray(fild) && type === 'object') return;
        } else if (typeof fild === type) return;
    }

    throw Error(`fild ${name}: a ${type} was expected, but there was a ${typeof fild}`);
}