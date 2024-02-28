export default (slug: Ref) => {
    const config = useRuntimeConfig()
    if (slug.value == null) {
        console.log('nuuul')
        return {
            pendingShop: null,
            shop: null,
            errorShop: null
        }
    }
    console.log(`${config.public.API_URL}/bottin/fichebyslugname/${slug.value}`)
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