// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Portfolio | Cheng Tak Kin",
        }
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
