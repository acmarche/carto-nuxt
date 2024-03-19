export default function manageFilters(filters: Ref, name: String, value: String, event: Event): Ref {
    console.log("search", value, name)
    // @ts-ignore
    if (!event.target.checked) {
        if (name === 'localite') {
            filters.value.localite = null
        }
        if (name === 'type') {
            filters.value.type = null
        }
    } else {
        console.log(name)
        if (name === 'localite') {
            filters.value.localite = value
        }
        if (name === 'type') {
            filters.value.type = value
        }
    }
    return filters
}
