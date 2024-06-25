const jsonSdk = require("../index")
const sdk = new jsonSdk();

sdk.getAllUsers()
.then(users=>console.log("users>>>",users))
.catch(error=>console.log("errors>>",error))