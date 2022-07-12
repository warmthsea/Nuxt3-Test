import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Nuxt 3',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt3',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    css: ['~/assets/scss/reset.scss', '~/assets/scss/public.scss'],
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    app: {
        baseURL: process.env.NODE_ENV === 'production' ? './' : '/',
        buildAssetsDir: process.env.NODE_ENV === 'production' ? '/static/' : '/_nuxt/'
    }
})
