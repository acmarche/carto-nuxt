export default (slug: Ref) => {
    const config = useRuntimeConfig()
    if (slug.value == null) {
        return {
            pendingShop: null,
            shop: null,
            errorShop: null
        }
    }
    const {pending: pendingShop, data: shop, error: errorShop} =
        useFetch(
            `${config.public.API_URL}/bottin/fichebyslugname/${slug.value}`, {}
        )
    return {
        pendingShop,
        shop,
        errorShop
    }
}