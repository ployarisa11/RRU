/*
  Webhook of Dialogflow
  @author: NottDev
  date: 31/05/2019
*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 4000;
const admin = require("firebase-admin");




// Import the appropriate class
const {
  WebhookClient
} = require('dialogflow-fulfillment');

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/pp', (req, res) => {
  res.send({
    success: true
  });
})

app.post('/webhook', (req, res) => {
  console.log('POST: /');
  console.log('Body: ',req.body);

  //Create an instance
  const agent = new WebhookClient({
    request: req,
    response: res
  });

  //Test get value of WebhookClient
  console.log('agentVersion: ' + agent.agentVersion);
  console.log('intent: ' + agent.intent);
  console.log('locale: ' + agent.locale);
  console.log('query: ', agent.query);
  console.log('session: ', agent.session);

  //Function Location
  function location(agent) {
    return admin.firestore().collection('Registration').doc('Topic').collection('ระยะเวลาการศึกษาระดับปริญญาตรี').doc('ระยะเวลาการศึกษาระดับปริญญาตรี').collection('หลักสูตรปริญญาตรี 5 ปี').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      snapshot.forEach(doc => {
          agent.add("สำหรับระยะเวลาในการศึกษา 5 ปี\n" + doc.data().description);
          agent.add(payload่json); //แสดง paylaod

      });
  });
  }

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Location', location);  // "Location" is once Intent Name of Dialogflow Agent
  agent.handleRequest(intentMap);
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});