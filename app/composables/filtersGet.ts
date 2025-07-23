export default () => {
    const config = useRuntimeConfig()
    console.log( `${config.public.API_URL}/map/search`)
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