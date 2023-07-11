const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('11.17.0')
})

app.get('/health', (req, res) => {
  //throw 'error'
  // eslint-disable-next-line no-unreachable
  res.send('OK')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
