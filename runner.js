const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ3ZTMwOTRlLTQwNjEtNDhhNy1hZGQ4LTBmODE2MzAxODBlMS0xNzkxNTc1NzUzMTcxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYTg3MjViMWEtM2JmYi00YTY4LTlkMTgtMDY2NzllYzY2OTg0IiwidHlwZSI6InQifQ.ZZ3yCG2sYHC9sIqMMGwLvTHjN3elDO-ua2OqEekvle8'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'token',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
