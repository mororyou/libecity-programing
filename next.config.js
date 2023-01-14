/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/react',
])

const options = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(options)