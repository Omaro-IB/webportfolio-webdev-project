export function Scramble(text) {
    const mapper = {
        d: 'o',
        l: 'm',
        c: 'a',
        x: 'r',
        b: '.',
        1: 'i',
        2: 'b',
        3: '@',
        4: 'g',
        5: 'l',
        6: 'c',
        7: ':',
        8: 't'
    }
    let newString = ''
    for (let i = 0; i < text.length; i++) {newString += mapper[text[i]]}
    return newString
}
