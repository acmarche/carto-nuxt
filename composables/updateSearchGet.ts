export default (args:Ref) => {
    const config = useRuntimeConfig()
    console.log()
    const {
        status,
        data,
        error
    } = useFetch(
        `${config.public.API_URL}/map/update`, {
            method: 'post',
            body: {args: args}
        }
    );
    return {
        status,
        data,
        error
    };
}