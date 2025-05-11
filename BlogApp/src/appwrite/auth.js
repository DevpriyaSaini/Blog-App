import conf from"../conf/conf.js";
import { Client, Account } from "appwrite";
export class Authservice{
    client=new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteprojectId);
        this.account=new Account(this.client);
    }
    async createaccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                return this.login({email,password});

            }
            else{
                return userAccount;
            }
            
        } catch (error) {
            throw error;
            
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
            
        } catch (error) {
         throw error;   
        }
    }
    async curUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            console.log("logoutError",error);
        }
    }

}

const authservice=new Authservice()
export default authservice;