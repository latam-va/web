/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'www.latamva.com.ar', 'latamva.com.ar']
  },
  i18n: {
    locales: ["en-UK", "es-AR"],
    defaultLocale: "es-AR"
  }
}
