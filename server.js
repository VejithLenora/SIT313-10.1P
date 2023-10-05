const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors");
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static("public"))

//app.post("/subscribe", cors(), (req, res) => {
app.post('/submit-email', cors(), (req, res)=>{
    console.log("Function started");
    const email = req.body.email
    console.log("Email - " + email);
    if (!email) {
        return res.status(400).json({ error: 'Email address is required' });
      }
    const data = {
        members: [{
            email_address: email,
           status: "subscribed"
        }]
    }
    jsonData = JSON.stringify(data)
    const apiKey = "a4ce59db1c9235c6b4eac33418a1fb9c-us21"
   // const apiKey = "ed9890d0d0d6f04e580c6e939ae3021b-us21" 
    const url = "https://us21.api.mailchimp.com/3.0/lists/288df6f747"
    const options = {
        method: "POST",
        auth: "vej:5483176e2dce34b25538124dfd4d5b91-us21",
        headers: {
            "Content-Type": "application/json", // Set the content type
          }      
    }
    const request = https.request(url, options, (response)=>{
        response.on("data", (data)=>{
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData)
    request.end()
    console.log(email)
})
app.listen(8000, (req, res)=>{
    console.log("Server is Running on Port 8000")
})