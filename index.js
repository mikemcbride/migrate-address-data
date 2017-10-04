
const admin = require("firebase-admin")
const serviceAccount = require("./serviceAccount.json")
const data = require("./realtimeData.json")
const dbUrl = require("./dbUrl.js")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbUrl
})

const db = admin.firestore()

Object.keys(data).forEach(it => {
  const item = data[it]
  db.collection('addresses').add(item)
})