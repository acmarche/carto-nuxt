export default (codeCgt: Ref) => {
    const config = useRuntimeConfig()
    if (codeCgt.value == null) {
        return {
            pendingOffer: null,
            offer: null,
            errorOffer: null
        }
    }
    console.log(codeCgt.value)
    const {pending: pendingOffer, data: offer, error: errorOffer} =
        useFetch(
            `${config.public.VISIT_URL}/wp-json/pivot/offer/${codeCgt.value}`, {}
        )
    return {
        pendingOffer,
        offer,
        errorOffer
    }
}