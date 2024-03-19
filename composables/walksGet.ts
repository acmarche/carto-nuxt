export default (args:Ref) => {
    const config = useRuntimeConfig()
    const {
        pending,
        data,
        error
    } = useFetch(
        `${config.public.VISIT_URL}/wp-json/pivot/walks_list/11`, {
            method: 'post',
            body: {args: args},
            mode: "no-cors"
        }
    );
    return {
        pending,
        data,
        error
    };
}