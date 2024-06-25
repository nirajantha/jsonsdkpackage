const axios = require("axios")

class jsonplaceholdersdk{
    constructor(){
        this.baseUrl = "https://jsonplaceholder.typicode.com"
    }
    async getAllUsers (){
        try {
            const response = await axios.get(`${this.baseUrl}/users`);
            if(response){
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
            
        }
       
    }
}
module.exports = jsonplaceholdersdk;