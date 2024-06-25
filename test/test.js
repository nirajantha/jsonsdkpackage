import jsonplaceholdersdk from "../index.js"
const sdk = new jsonplaceholdersdk();

sdk.getAllPosts()
.then(posts=>console.log("users>>>",posts))
.catch(error=>console.log("errors>>",error))


// const jsonplaceholdersdk =  require("jsonsdkpackage")
// const sdk = new jsonplaceholdersdk();

// sdk.getAllPosts()
// .then(users=>console.log("users>>>",users))
// .catch(error=>console.log("errors>>",error))