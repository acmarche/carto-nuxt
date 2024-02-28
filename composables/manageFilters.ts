export default (filters: Ref, name: String, value: String, event: Event) => {
    return function manageFilters(name: String, value: String, event: Event) {
        const filt = {localite: filters.value.localite, tags: filters.value.tags}
        // @ts-ignore
        if (!event.target.checked) {
            if (name === 'localite') {
                filt.localite = null
            } else {
                const index = filt.tags.indexOf(value)
                if (index !== -1) {
                    filt.tags.splice(index, 1)
                }
            }
        } else {
            if (name === 'localite') {
                filt.localite = value
            } else {
                filt.tags.push(value)
            }
        }
        filters.value = filt
    }
}