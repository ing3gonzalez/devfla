const express = require('express')
const app = express()
const port = 3000


const Routes = require ('./routes');


/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

app.use('/users',Routes.UserRoutes)
app.use('/api',Routes.ApiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})