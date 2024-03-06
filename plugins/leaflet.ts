import L from 'leaflet';
import {Icon} from 'leaflet';
import 'leaflet.markercluster'

/**
 * Because I have this error from a vue component
 * import L from 'leaflet'
 * window is not defined
 */
export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            L,
            Icon
        }
    }
})