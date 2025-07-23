import type {Point} from "leaflet";

/**
 * NOT USE
 * to save functions
 * @param refresh
 */
const previewOpen = defineModel('previewOpen')
const data: never[] = []
const map= null
function showPreview() {

}

function addMarkers(refresh = false) {
  const customIcon = L.icon({
    iconUrl: '/images/geolocation/marker-icon.png',
    shadowUrl: '/images/geolocation/marker-shadow.png',
  });

  // @ts-ignore
    data.value.hits.forEach((fiche) => {
    const point = [fiche.latitude, fiche.longitude]
    addOneMarker(fiche, point, customIcon)
  })

  if (refresh) {
    if (data.value.hits.length > 10) {
      map.panTo(center)
    } else if (data.value.hits.length > 0) {
      map.panTo([data.value.hits[0].latitude, data.value.hits[0].longitude])
    }
  }
}

function addOneMarker(fiche:Object, point: Point, customIcon: Object) {
  const marker = L.marker(point, {title: fiche.name, icon: customIcon}).addTo(markerLayer);
  marker.addEventListener('click', () => {
    showPreview(fiche.slugname)
  });
}
