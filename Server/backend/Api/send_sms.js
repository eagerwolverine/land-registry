// const express = require("express");
const Nexmo = require('nexmo')
// const router = express.Router();
const config = require('../Config/db_config')

const nexmo = new Nexmo(
  {
    apiKey: config.NEXMO_API_KEY,
    apiSecret: config.NEXMO_API_SECRET,
  },
  { debug: true },
)

exports.send_sms = function (number, text) {
  const to = '91' + number
  const from = 'Land Registry'
  console.log(number, text)
  nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (responseData) {
      console.log(responseData)
    }
  })
}

// const { Vonage } = require('@vonage/server-sdk')

// const vonage = new Vonage({
//   apiKey: "e12e479c",
//   apiSecret: "qrqxH4tvnMWRGnLY"
// })


// const from = "Vonage APIs"
// const to = "917756884738"
// const text = 'A text message sent using the Vonage SMS API'

// async function sendSMS() {
//     await vonage.sms.send({to, from, text})
//         .then(resp => { console.log('Message sent successfully'); console.log(resp); })
//         .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
// }

// sendSMS();
