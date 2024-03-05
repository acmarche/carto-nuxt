export function nameStartsWithUnderscore(name: String) {
    return !name.startsWith('_')
}

export function itemHasData(item: Array<any>) {
    return item.length > 0;
}

export function capitalized(word: String) {
    if(word == 'localite')
        word = 'Localité'

    if(word == 'tags')
        word = 'Filières'

    return word.charAt(0).toUpperCase()
        + word.slice(1)
}

export function prettyPhone(phone: string) {
  return `+32 ${phone}`
}
