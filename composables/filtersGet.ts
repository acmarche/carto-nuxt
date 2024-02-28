export default () => {
    const config = useRuntimeConfig()
    const {
        pending,
        data,
        error
    } = useFetch(
        `${config.public.API_URL}/map/search`
    );
    return {
        pending,
        data,
        error
    };
}