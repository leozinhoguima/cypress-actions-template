const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  browser: 'firefox'
})
.then((results) => {
  // Cypress não conseguiu rodar (ex.: falha ao conectar no Firefox)
  if (results.status === 'failed') {
    console.error(results.message)
    process.exit(1)
  }

  const args = {
    target: process.env.TARGET_TOKEN_FIREFOX,
  }
  tesults.results(results, args);
})
.catch((err) => {
  console.error(err)
  process.exit(1)
})
