/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com']
  },
  i18n: {
    locales: ["en-UK", "es-AR"],
    defaultLocale: "es-AR"
  }
}
