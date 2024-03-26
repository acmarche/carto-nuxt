export default () => {
    const config = useRuntimeConfig()
    const url = `${config.public.VISIT_URL}/wp-json/pivot/walks_list/11`
    console.log(url)
    const {
        pending,
        data,
        refresh,
        error
    } = useFetch(
        url, {
            method: 'get',
        }
    );
    return {
        pending,
        data,
        refresh,
        error
    };
}