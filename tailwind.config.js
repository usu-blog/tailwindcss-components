module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.js',
      // TypeScript
      'src/plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  theme: {},
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['checked'],
    },
  },
  plugins: [],
}
