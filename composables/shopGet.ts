export default (slug?: String) => {
    const config = useRuntimeConfig()
    if (slug == null) {
        return {
            pendingShop: null,
            shop: null,
            errorShop: null
        }
    }
    const {pending: pendingShop, data: shop, error: errorShop} =
        useFetch(
            `${config.public.API_URL}/bottin/fichebyslugname/${slug}`, {}
        )
    return {
        pendingShop,
        shop,
        errorShop
    }
}