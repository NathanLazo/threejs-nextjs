/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  compress: true,
  swcMinify: false // it should be false by default 
})

