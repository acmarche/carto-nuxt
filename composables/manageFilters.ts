export default function manageFilters(filters: Ref, name: String, value: String, event: Event): Ref {
    // @ts-ignore
    if (!event.target.checked) {
        if (name === 'localite') {
            filters.value.localite = null
        } else {
            const index = filters.value.tags.indexOf(value)
            if (index !== -1) {
                filters.value.tags.splice(index, 1)
            }
        }
    } else {
        if (name === 'localite') {
            filters.value.localite = value
        } else {
            filters.value.tags.push(value)
        }
    }
    return filters
}
