import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import registerUser from './registerUser.js'

(async () =>{
   
    await  mongoose.connect(process.env.MONGODB_URL)
    
    try {
        await registerUser('De Borah', 'debo@rah.com', '123123123')

        console.log('user registered')
        
    } catch (error) {
        console.log(error)
    }
})()