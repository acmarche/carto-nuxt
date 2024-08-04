import xmlbuilder from 'xmlbuilder';

export async function getPages(event) {
    const config = useRuntimeConfig(event)
    const data = await $fetch(`${config.public.API_URL}/map/update`, {
        method: 'post',
        body: {args: {}}
    })
    const urls = []
    data.hits.forEach((fiche) => {
        urls.push(`/acteur/${fiche.slug}`)
    })
    const filters = []
    const {localite, ...filtersTmp} = data.filters
    Object.values(filtersTmp).forEach(filter => {
        filters.push(...filter)
    })
    filters.forEach((filter) => {
        urls.push(`/filiere/${filter.slug}`)
    })
    localite.forEach(localite => {
        localite.url = `/localite/${localite.slug}`
        urls.push(`/localite/${localite.name}`)
    })
    const pages = [
        {loc: config.public.SITE_URL + '/', lastmod: '2024-08-04', changefreq: 'weekly', priority: '1.0'},
        {loc: config.public.SITE_URL + '/geolocalisation', lastmod: '2024-08-03', changefreq: 'monthly', priority: '0.8'},
        {loc: config.public.SITE_URL + '/acteur', lastmod: '2024-08-03', changefreq: 'monthly', priority: '1'},
        {loc: config.public.SITE_URL + '/localite', lastmod: '2024-08-03', changefreq: 'monthly', priority: '1'},
        {loc: config.public.SITE_URL + '/filiere', lastmod: '2024-08-03', changefreq: 'monthly', priority: '1'},
        {loc: config.public.SITE_URL + '/about', lastmod: '2024-08-03', changefreq: 'monthly', priority: '0.8'},
    ];
    urls.forEach((url) => {
        pages.push({
            loc: `${config.public.SITE_URL}${url}`,
            lastmod: '2024-08-04',
            changefreq: 'weekly',
            priority: 0.8
        })
    })
    const urlset = xmlbuilder.create('urlset', {version: '1.0', encoding: 'UTF-8'})
        .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    pages.forEach(url => {
        const urlElement = urlset.ele('url');
        urlElement.ele('loc', url.loc);
        urlElement.ele('lastmod', url.lastmod);
        urlElement.ele('changefreq', url.changefreq);
        urlElement.ele('priority', url.priority);
    });
    const xmlString = urlset.end({pretty: true});
    return xmlString
}

export default defineEventHandler((event) => getPages(event));