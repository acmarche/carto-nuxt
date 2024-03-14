export default () => {
    const config = useRuntimeConfig()
    const {
        pending,
        data,
        error
    } = useFetch(
        `${config.public.VISIT_URL}/wp-json/pivot/walk_filters/11`
    );
    return {
        pending,
        data,
        error
    };
}