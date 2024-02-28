export default (args:Ref) => {
    const config = useRuntimeConfig()
    const {
        pending,
        data,
        error
    } = useFetch(
        `${config.public.API_URL}/map/update`, {
            method: 'post',
            body: {args: args}
        }
    );
    return {
        pending,
        data,
        error
    };
}