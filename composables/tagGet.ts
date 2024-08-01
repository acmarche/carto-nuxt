export default (slug: String) => {
    const config = useRuntimeConfig()
    if (slug == null) {
        return {
            pendingTag: null,
            tag: null,
            errorTag: null
        }
    }
    const {pending: pendingTag, data: tag, error: errorTag} =
        useFetch(
            `${config.public.API_URL}/bottin/tagbyslug/${slug}`, {}
        )
    return {
        pendingTag,
        tag,
        errorTag
    }
}