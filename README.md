# fiesta-gameserverconnector
A barebones (WIP) reimplementation of the SOAP service that Fiesta's server services interface with for item mall-related operations.
Currently, only the request for the item mall URL is handled (without the account ID).

This fixes the "Go to Fiesta Store" item on the `X`-menu without a hook, by reimplementing the internal Gamigo service.

## Usage
1. Clone this repository to a folder
2. Set the URL to your item mall in app.js on line 10: `const url = "https://your_url.here";`
3. Add a `C:\Windows\System32\drivers\etc\hosts` entry for the original domain: `127.0.0.1 bip.srv.gsc.gas.gamigo.com`
4. Run `npm i` inside the cloned folder to fetch all dependencies
5. Run `node .` inside the cloned folder to start the server
