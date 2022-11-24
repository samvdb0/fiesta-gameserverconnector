// fiesta-gameserverconnector - Sam "saze" V. 2022

const parser = require('body-parser');
require('body-parser-xml')(parser);

const app = require('express')();
app.use(parser.xml());

// edit this property to your preferred item mall URL.
const url = "https://your_url.here";

app.post('/gameserverconnector-webapp-fiesta-us/sso', (req, res) => {
  const body = req.body['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0];
  const requestType = Object.keys(body)[0];
  const arguments = body[requestType][0];
  
  console.log(`Request: "${requestType}"`);
  console.log("Arguments: %j", arguments); // args
  
  // it's also possible to use the accountId argument to send back an URL with 
  // a temporary token for the user to log in directly into the mall on page load.
  // const accountId = arguments["ns1:accountId"][0];
  // console.log(accountId);
  
  res.set('Content-Type', 'text/xml');  
  res.send(`
  <?xml version="1.0" encoding="UTF-8"?>
  <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns1="http://infrastructure.games.gamigo.com/v_1_3">
    <SOAP-ENV:Body>
      <ns1:getItemShopUrlResponse>
        <ns1:url>${url}</ns1:url>
      </ns1:getItemShopUrlResponse>
    </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>
  `);
});

app.listen(8080, () => {
  console.log(`Listening on 8080`);
});