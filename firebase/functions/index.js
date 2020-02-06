"use strict";

const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion, Payload} = require("dialogflow-fulfillment");
const LINE_MESSAGING_API = " https://notify-api.line.me/api/notify";
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements




exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
 const agent = new WebhookClient({ request, response });

  const payload = {
  "type": "template",
  "altText": "this is a confirm template",
  "template": {
    "type": "confirm",
    "actions": [
      {
        "type": "message",
        "label": "ถูก",
        "text": "ถูก"
      },
      {
        "type": "message",
        "label": "ไม่ถูก",
        "text": "ไม่ถูก"
      }
    ],
    "text": "คุณได้รับคำตอบถูกต้องไหมคะ?"
  }
};


 


  
  //หมวดการลงทะเบียน
  //การเพิ่ม
  function Additional_Credit_Registration(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม

    	const lineMessage = 'ploy';
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
    //ประกาศตัวแปร payload เพื่อแสดงออกหน้าจอ
   let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
   
		 //let text =  request.body.queryResult.queryText;
    	//return agent.add(text);
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
  
   		return   admin.firestore().collection('Registration').doc('Topic').collection('Additional_Credit_Registration').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("การเพิ่มรายวิชา\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
        
        
	});   
      });
    
 }

  //การถอน
   function Withdraw_credit_registration(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                  	  date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Withdraw_credit_registration').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("การถอนรายวิชา\n" + doc.data().description);
         agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }

  
  //การยกเลิกรายวิชา
   function Course_termination(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Course_termination').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("การยกเลิกรายวิชา\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }

   //การลืมรหัสผ่าน
   function Forgot_Password(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Forgot_Password').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("กรณีลืมรหัสผ่าน\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }
  
  //ลงทะเบียนเรียนไม่ได้
   function Unable_to_register(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Unable_to_register').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("กรณีลงทะเบียนเรียนไม่ได้\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }
  
    
  //การขอเปิดรายวิชาเพิ่ม
   function To_Increase_the_new_crouse(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('To_Increase_the_new_crouse').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("กรณีขอเปิดรายวิชาเพิ่ม\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }
  
   //การลงทะเบียนซ้ำ
   function Duplicate_registrations(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Duplicate_registrations').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("กรณีลงทะเบียนซ้ำ\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }
  
  //หน่วยกิตที่ต้องสะสมของภาคปกติ
   function Regular_Session_cumulative(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Cumulative_credits').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("สำหรับภาคปกติ\n" + doc.data().regular_session);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }
  
  //หน่วยกิตที่ต้องสะสมของภาคพิเศษ
   function Spacial_Session_cumulative(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Cumulative_credits').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("สำหรับภาคพิเศษ\n" + doc.data().special_session);
         agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }
 
    //ระยะเวลาในการศึกษา 4 ปี
   function Year4_undergraduate_program(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Undergraduate_Study_Period').doc('Undergraduate_level').collection('4_Year_undergraduate_program').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("สำหรับระยะเวลาในการศึกษา 4 ปี\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }

  
      //ระยะเวลาในการศึกษา 5 ปี
   function Year5_undergraduate_program(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Undergraduate_Study_Period').doc('Undergraduate_level').collection('5_Year_undergraduate_program').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("สำหรับระยะเวลาในการศึกษา 5 ปี\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
        
	});   
      });
 }
  
        //หลักสูตรปริญญาตรีต่อเนื่อง
   function Continuing_undergraduate_program(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Undergraduate_Study_Period').doc('Undergraduate_level').collection('Continuing_undergraduate_program').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add("สำหรับหลักสูตรปริญญาตรีต่อเนื่อง\n" + doc.data().description);
        agent.add(payload่json); //แสดง paylaod
	});   
      });
 }
  
          //การลงทะเบียนเรียน
   function Enroll_in(agent) { 
    //เลขcount เวลามีคนเข้ามาสอบถาม
  		let Addnum = admin.firestore().collection('Count_Intent').doc('Registration');
     	let payload่json = new Payload(`LINE`, payload, { sendAsMessage: true });
    	let transaction = db.runTransaction (t => { 
        	return t.get(Addnum).then(doc => {
         	     let newcount = doc.data().count + 1;
                  
      				t.set(Addnum, {
                      count: newcount,
                    date: admin.firestore.FieldValue.serverTimestamp()
                    
                    
                    });
           });
            });
   
   //return ข้อมูลคำตอบ 
   		return admin.firestore().collection('Registration').doc('Topic').collection('Enroll_in').orderBy("date", "desc").limit(1).get().then((snapshot) => {
      	snapshot.forEach(doc=>{
		agent.add(doc.data().description);
        agent.add(payload่json); //แสดง paylaod
	});   
      });
 }
  
  function Default_Fallback_Intent(agent){
    	 let text =  request.body.queryResult.queryText;
    	 let c = 'หอพัก';
    	//agent.add("Correct");
    	if (text.search(c) !== -1) {
            agent.add("Correct");
        }else{
        	agent.add("intent");
        }
  }
  
  
    let intentMap = new Map();
  //การลงทะเบียน
    intentMap.set("Additional_Credit_Registration", Additional_Credit_Registration);//การเพิ่ม
  	intentMap.set("Withdraw_credit_registration", Withdraw_credit_registration); //การถอน
  	intentMap.set("Course_termination", Course_termination); //การยกเลิกรายวิชา
  	intentMap.set("Forgot_Password", Forgot_Password); //การลืมรหัสผ่าน
    intentMap.set("Unable_to_register", Unable_to_register); //ลงทะเบียนไม่ได้
  	intentMap.set("To_Increase_the_new_crouse", To_Increase_the_new_crouse); //การขอเปิดรายวิชาเพิ่ม
  	intentMap.set("Duplicate_registrations", Duplicate_registrations); //การลงทะเบียนซ้ำ
  	intentMap.set("Regular_Session_cumulative", Regular_Session_cumulative); //หน่วยกิตที่ต้องสะสมของภาคปกติ
  	intentMap.set("Spacial_Session_cumulative", Spacial_Session_cumulative); //หน่วยกิตที่ต้องสะสมของภาคพิเศษ
  	intentMap.set("4_Year_undergraduate_program", Year4_undergraduate_program); //ระยะเวลาในการศึกษา 4 ปี
  	intentMap.set("5_Year_undergraduate_program", Year5_undergraduate_program); //ระยะเวลาในการศึกษา 5 ปี
  	intentMap.set("Continuing_undergraduate_program", Continuing_undergraduate_program); //ศึกษาปริญญาต่อเนื่อง
  	intentMap.set("Enroll_in", Enroll_in); //การลงทะเบียนเรียน
  	intentMap.set("Default Fallback Intent", Default_Fallback_Intent); //กรณีอื่นๆ
  
    agent.handleRequest(intentMap);
  }
);