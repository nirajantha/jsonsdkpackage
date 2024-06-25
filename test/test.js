const jsonSdk = require("jsonsdkpackage")
const sdk = new jsonSdk();

// sdk.getAllUsers()
// .then(users=>console.log("users>>>",users))
// .catch(error=>console.log("errors>>",error))

// const res = sdk.getAllUsers().then(users=>users)
// console.log("res>>",res)

async function fetchUsers(){
   const res =  await sdk.getAllUsers()
   console.log("res>>",res)
}
fetchUsers();