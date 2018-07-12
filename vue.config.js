const multiPage = require('./multiPage.js')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/mayi_vue/'
    : '/',
  pages: multiPage
}