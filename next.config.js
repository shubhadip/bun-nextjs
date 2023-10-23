// /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   experimental: {
// //     appDir: true,
// //   },
// // }

// module.exports = (phase, defaultConfig) => {
//   console.log('defaultConfig.', defaultConfig)
//   console.log('phase', phase);
//   return withBundleAnalyzer(defaultConfig)
// }

// // module.exports = nextConfig

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})