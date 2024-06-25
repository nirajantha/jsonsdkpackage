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
    async getOneUser (userId){
        try {
            const response = await axios.get(`${this.baseUrl}/users/${userId}`);
            if(response){
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to fetch user: ${error.message}`);
            
        }
       
    }
    async getAllPosts (){
        try {
            const response  = await axios.get(`${this.baseUrl}/posts`)
            if(response){
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to fetch posts: ${error.message}`);
            
        }
       
    }
}
module.exports = jsonplaceholdersdk