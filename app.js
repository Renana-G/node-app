process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express')
const app = express()
const port = 5000

const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');
sdk.auth('rnd_p9TG5eL2V85D1ovuxIB97u9Z9F2d');

const getAllApps = async ()=>{
  const {data} = await sdk.getServices({limit: '20'})
  return data ? data : 'error'
}

app.get('/', async (req, res) => {
  const data = await getAllApps()

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><pre>');
  res.write(JSON.stringify(data, null, 2));
  res.end('</pre></body></html>');

  // res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
