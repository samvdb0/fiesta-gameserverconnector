# fiesta-gameserverconnector
A barebones (WIP) reimplementation of the SOAP service that Fiesta's server services interface with for item mall-related operations. Currently, only the request for the item mall URL is handled without the account ID.

This fixes the "Go to Fiesta Store" item on the `X`-menu without a hook, by reimplementing the internal Gamigo service.

The URL can be set in app.js on line 11:
`const url = "https://your_url.here";`
