var express = require('express')
var app = express()


//app.use(express.static(__dirname, 'public'));
app.use(express.static('public'))
/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


/*app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening on port 3000!')
})*/
