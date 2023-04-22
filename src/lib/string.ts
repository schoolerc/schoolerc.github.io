export function capitalize(word: string): string {
    if (word.length == 0) {
        return '';
    } else if (word.length == 1) {
        return word.charAt(0).toUpperCase();
    } else {
        return word.charAt(0).toUpperCase() + word.substring(1);
    }
}

export function splitCamelCase(phrase: string) : Array<string> {
    const words: Array<string> = [];
    let start = 0;
    while (start < phrase.length) {
        let end = start;
        while (end < phrase.length && phrase.charAt(end).toUpperCase() != phrase.charAt(end)) {
            end++;
        }
        words.push(phrase.substring(start, end));
        start = end;
    }

    return words;
}