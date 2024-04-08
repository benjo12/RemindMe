import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import registerUser from './registerUser.js'

(async () =>{
   
    await  mongoose.connect(process.env.MONGODB_URL)
    
    try {
        await registerUser('Mi Zuki', 'mi@zuki.com', '123123123')

        console.log('user registered')
        
    } catch (error) {
        console.log(error)
    }
})()