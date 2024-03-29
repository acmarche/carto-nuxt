export default function manageFilters(filters: Ref, name: String, value: String, event: Event): Ref {
    // @ts-ignore
    if (!event.target.checked) {
        if (name === 'localite') {
            filters.value.localite = null
        }
        if (name === 'type') {
            filters.value.type = 11
        }
    } else {
        if (name === 'localite') {
            filters.value.localite = value
        }
        if (name === 'type') {
            filters.value.type = value
        }
    }
    return filters
}
