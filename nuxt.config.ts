// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Portfolio | Cheng Tak Kin",
            meta: [
                {charset: "utf-8"},
            ],
            link: [
                {rel: "icon", type: "image/png", href: "/favicon.ico"},
            ],
        },
    },
    runtimeConfig: {
        secret: "private"
    },
    appConfig: {
        config: "public"
    },
    modules: ["@nuxtjs/tailwindcss"],
    buildModules: ["@pinia/nuxt"],
    css: ["@/assets/css/main.css"]
});
