// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    debug: false,
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    plugins: [
        {src: '~/plugins/leaflet.ts', mode: 'client'}
    ],
    app: {
        rootId: 'app',
        head: {
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap'
                }]
        }
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
            BOTTIN_URL: process.env.BOTTIN_URL,
            NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL || '/'
        },
    },
})
