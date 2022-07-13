import htmlPurge from 'vite-plugin-html-purgecss' 

export default {
  plugins: [
      htmlPurge(),
  ],
  build: {
    outDir: 'docs'
  },
  server: {
    port: 5000
  }
}