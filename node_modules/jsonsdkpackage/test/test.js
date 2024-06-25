const jsonSdk =  require("../index")
const sdk = new jsonSdk();

sdk.getAllPosts()
.then(posts=>console.log("users>>>",posts))
.catch(error=>console.log("errors>>",error))

// const jsonSdk =  require("jsonsdkpackage")
// const sdk = new jsonSdk();

// sdk.getAllUsers()
// .then(users=>console.log("users>>>",users))
// .catch(error=>console.log("errors>>",error))