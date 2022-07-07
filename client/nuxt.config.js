export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Integrated and Dynamic Systems',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: '~/assets/scss/app.scss', lang: 'sass' },
        { src: '~/node_modules/bootstrap-icons/font/bootstrap-icons.scss' }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
        { src: "~/plugins/vee-validate.js", ssr: true }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        [
            'vue-sweetalert2/nuxt',
            {
                cancelButtonColor: '#475569'
            }
        ]
    ],

    // Authentication Strategy: https://auth.nuxtjs.org/providers/laravel-sanctum
    auth: {
        strategies: {
            laravelSanctum: {
                provider: 'laravel/sanctum',
                url: 'http://localhost:80',
                endpoints: {
                    login: {
                        url: '/api/login'
                    },
                    logout: {
                        url: '/api/logout'
                    },
                    user: {
                        url: '/api/user'
                    }
                },
                user: {
                    property: false
                }
            },
        }
    },

    // Axios Module Configuration: https://auth.nuxtjs.org/providers/laravel-sanctum
    axios: {
        baseUrl: 'http://localhost:80/',
        credentials: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [
            'vee-validate'
        ]
    }
}