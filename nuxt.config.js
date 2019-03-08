module.exports = {
    mode: 'spa',
    generate: {
        dir: '../laragon/www/other'
    },
    modules: [
        ['@nuxtjs/onesignal', {
            init: {
              appId: 'a345a76d-604d-4ed5-b206-6715e8827c40',
              allowLocalhostAsSecureOrigin: true,
              importScripts: [],
              welcomeNotification: {
                disable: false
              }
            }
        }],
        ['@nuxtjs/pwa', {
            icon: false,
            workbox: false
        }]
    ]
}
