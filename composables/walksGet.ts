export default (args: Ref) => {
    const config = useRuntimeConfig()
    const url = `${config.public.VISIT_URL}/wp-json/pivot/walks_list/${args.value.type}`
    console.log(url)
    const {
        pending,
        data,
        error
    } = useFetch(
        url, {
            method: 'post',
            body: {args},
        }
    );
    return {
        pending,
        data,
        error
    };
}