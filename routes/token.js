const express = require('express'),
    router = express.Router();
const https = require('https')
router.get('/', async function(req, res){
    res.json({token: await gettoken()})
      
})

const data = new TextEncoder().encode(
  JSON.stringify({"device_id":"95e07640-0972-11ec-93ec-9b4e3b8d9ffa"})
)


function gettoken() {
    const options = {
      hostname: 'booyah.live',
      port: 443,
      path: '/api/v3/users/85598510/chat-tokens',
      method: 'POST',
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en",
        "booyah-session-key": "MTYzMzM1OTYyN3xOd3dBTkRSVVdrNUZVVGRUVVVOVE5FRkRORmd5UmtwS1NVTkZWRFF5VlZsVU5rbzBXVlZTVlZsSVJFMDNVVE5JV0RkSVRFZ3lTa0U9fMdO3_J0zwEzXFz9yi3Vi1AOH3QcVK2TEEeZeO9nZXdh",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "x-csrf-token": "MTYzMzM1OTYyN3xOd3dBTkRSVVdrNUZVVGRUVVVOVE5FRkRORmd5UmtwS1NVTkZWRFF5VlZsVU5rbzBXVlZTVlZsSVJFMDNVVE5JV0RkSVRFZ3lTa0U9fMdO3_J0zwEzXFz9yi3Vi1AOH3QcVK2TEEeZeO9nZXdh",
        "x-request-id": "web_221fc300-2524-11ec-a18b-cfd0b4078b5a",
        "cookie": "muxData=mux_viewer_id=46d39de5-214a-416d-a429-9762a31c4814&msn=0.20094291960603838&sid=618e0c88-2a76-4c10-871c-2431c14711e7&sst=1632448411428.1&sex=1632451393697.8; apple_state_key=ce889ece252311ecb953468cacc90ec9; session_key=MTYzMzM1OTYyN3xOd3dBTkRSVVdrNUZVVGRUVVVOVE5FRkRORmd5UmtwS1NVTkZWRFF5VlZsVU5rbzBXVlZTVlZsSVJFMDNVVE5JV0RkSVRFZ3lTa0U9fMdO3_J0zwEzXFz9yi3Vi1AOH3QcVK2TEEeZeO9nZXdh"
      },
      "referrer": "https://booyah.live/cristianghost?source=3",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"device_id\":\"95e07640-0972-11ec-93ec-9b4e3b8d9ffa\"}",
      "mode": "cors"
    }

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        res.setEncoding('utf8'); 
        let response = '';
  
        res.on('data', (chunk) => {
          response += chunk;
        });
        
        res.on('end', () => {
          const parsed = (JSON.parse(response))
  
          let token = parsed.token
  
          console.log('token',token)
          resolve(token);
        });
      });
  
      req.on('error', (err) => {
        reject(err);
      });
  
      req.write(data)
      req.end();
    });
  }

module.exports = router;